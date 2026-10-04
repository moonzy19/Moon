-- Project by Tirta | runtime reconciliation for RPCs/storage used by the current client.
-- Safe/idempotent: creates only missing runtime contracts and reasserts private storage policies.

alter table public.hris_company_settings add column if not exists employee_portal_theme text not null default 'sun';

create table if not exists public.hris_user_preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  language text not null default 'id' check (language in ('id','en','ja','ko','zh')),
  theme text not null default 'sun',
  updated_at timestamptz not null default now()
);

alter table public.hris_user_preferences enable row level security;
drop policy if exists hris_user_preferences_select_own on public.hris_user_preferences;
create policy hris_user_preferences_select_own on public.hris_user_preferences for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists hris_user_preferences_insert_own on public.hris_user_preferences;
create policy hris_user_preferences_insert_own on public.hris_user_preferences for insert to authenticated with check ((select auth.uid()) = user_id);
drop policy if exists hris_user_preferences_update_own on public.hris_user_preferences;
create policy hris_user_preferences_update_own on public.hris_user_preferences for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
grant select, insert, update on public.hris_user_preferences to authenticated;

alter table public.hris_company_settings drop constraint if exists hris_company_settings_employee_portal_theme_check;
alter table public.hris_company_settings add constraint hris_company_settings_employee_portal_theme_check check (employee_portal_theme in ('professional','sun','moon','galaxy','blackhole','nebula','aurora'));
alter table public.hris_user_preferences drop constraint if exists hris_user_preferences_theme_check;
alter table public.hris_user_preferences add constraint hris_user_preferences_theme_check check (theme in ('professional','sun','moon','galaxy','blackhole','nebula','aurora'));

create or replace function public.hris_get_public_app_theme()
returns text language plpgsql stable security definer set search_path=public,pg_temp as $$
declare v_theme text;
begin
  select employee_portal_theme into v_theme from public.hris_company_settings where id=1;
  return case when v_theme in ('professional','sun','moon','galaxy','blackhole','nebula','aurora') then v_theme else 'professional' end;
end; $$;
revoke all on function public.hris_get_public_app_theme() from public;
grant execute on function public.hris_get_public_app_theme() to anon, authenticated;

create or replace function public.hris_set_public_app_theme(p_theme text)
returns void language plpgsql security definer set search_path=public,pg_temp as $$
begin
  if p_theme not in ('professional','sun','moon','galaxy','blackhole','nebula','aurora') then raise exception 'Tema aplikasi publik tidak valid'; end if;
  if not exists (select 1 from public.hris_users where lower(email)=lower(coalesce(auth.jwt()->>'email','')) and status='Aktif' and role='Super Admin') then raise exception 'Hanya Super Admin yang dapat mengubah tema aplikasi publik'; end if;
  update public.hris_company_settings set employee_portal_theme=p_theme, updated_at=now() where id=1;
  if not found then raise exception 'Pengaturan perusahaan dengan id=1 tidak ditemukan'; end if;
end; $$;
revoke all on function public.hris_set_public_app_theme(text) from public, anon;
grant execute on function public.hris_set_public_app_theme(text) to authenticated;

create or replace function public.hris_get_employee_portal_theme()
returns text language plpgsql stable security definer set search_path=public,pg_temp as $$
declare v_theme text;
begin
  select employee_portal_theme into v_theme from public.hris_company_settings where id=1;
  return case when v_theme in ('professional','sun','moon','galaxy','blackhole','nebula','aurora') then v_theme else 'professional' end;
end; $$;
revoke all on function public.hris_get_employee_portal_theme() from public, anon;
grant execute on function public.hris_get_employee_portal_theme() to authenticated;

create or replace function public.hris_set_employee_portal_theme(p_theme text)
returns void language plpgsql security definer set search_path=public,pg_temp as $$
begin
  if p_theme not in ('professional','sun','moon','galaxy','blackhole','nebula','aurora') then raise exception 'Tema Portal Karyawan tidak valid'; end if;
  if not exists (select 1 from public.hris_users where lower(email)=lower(coalesce(auth.jwt()->>'email','')) and status='Aktif' and role='Super Admin') then raise exception 'Hanya Super Admin yang dapat mengubah tema Portal Karyawan'; end if;
  update public.hris_company_settings set employee_portal_theme=p_theme, updated_at=now() where id=1;
  if not found then raise exception 'Pengaturan perusahaan dengan id=1 tidak ditemukan'; end if;
end; $$;
revoke all on function public.hris_set_employee_portal_theme(text) from public, anon;
grant execute on function public.hris_set_employee_portal_theme(text) to authenticated;

create table if not exists public.hris_offline_attendance_events (
  client_event_id text primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  id_karyawan text not null references public.karyawan(id_karyawan) on update cascade on delete cascade,
  action text not null check (action in ('clock_in','clock_out')),
  processed_at timestamptz not null default now()
);
alter table public.hris_offline_attendance_events enable row level security;
drop policy if exists hris_offline_attendance_events_self on public.hris_offline_attendance_events;
create policy hris_offline_attendance_events_self on public.hris_offline_attendance_events for select to authenticated using (user_id = (select auth.uid()));
grant select on public.hris_offline_attendance_events to authenticated;

create or replace function public.hris_ess_sync_offline_attendance(
  p_client_event_id text, p_action text, p_id_karyawan text, p_tanggal date, p_jam time,
  p_lat numeric, p_long numeric, p_accuracy numeric, p_selfie text,
  p_lokasi text default 'GPS ESS OFFLINE'
) returns uuid language plpgsql security definer set search_path=public,pg_temp as $$
declare v_user uuid := (select auth.uid()); v_result uuid;
begin
  if v_user is null or p_id_karyawan is null or p_id_karyawan <> public.hris_ess_employee_id() then raise exception 'Akses absensi ditolak' using errcode='42501'; end if;
  if p_client_event_id is null or length(trim(p_client_event_id)) < 8 then raise exception 'Client event id tidak valid'; end if;
  if p_action not in ('clock_in','clock_out') then raise exception 'Action absensi tidak valid'; end if;
  if exists (select 1 from public.hris_offline_attendance_events where client_event_id = trim(p_client_event_id)) then return null; end if;
  if p_action = 'clock_in' then
    v_result := public.hris_ess_clock_in(p_id_karyawan,p_tanggal,p_jam,p_lat,p_long,p_accuracy,p_selfie,coalesce(p_lokasi,'GPS ESS OFFLINE'));
  else
    v_result := public.hris_ess_clock_out(p_id_karyawan,p_tanggal,p_jam,p_lat,p_long,p_accuracy,p_selfie,coalesce(p_lokasi,'GPS ESS OFFLINE'));
  end if;
  insert into public.hris_offline_attendance_events(client_event_id,user_id,id_karyawan,action) values(trim(p_client_event_id),v_user,p_id_karyawan,p_action);
  return v_result;
end; $$;
revoke all on function public.hris_ess_sync_offline_attendance(text,text,text,date,time,numeric,numeric,numeric,text,text) from public, anon;
grant execute on function public.hris_ess_sync_offline_attendance(text,text,text,date,time,numeric,numeric,numeric,text,text) to authenticated;

insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('profile-photos','profile-photos',false,2097152,array['image/jpeg','image/png','image/webp']::text[])
on conflict (id) do update set name=excluded.name, public=false, file_size_limit=excluded.file_size_limit, allowed_mime_types=excluded.allowed_mime_types;
insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('bpjs-cards','bpjs-cards',false,5242880,array['image/jpeg','image/png','image/webp','application/pdf']::text[])
on conflict (id) do update set name=excluded.name, public=false, file_size_limit=excluded.file_size_limit, allowed_mime_types=excluded.allowed_mime_types;

drop policy if exists profile_photos_registration_anon_insert on storage.objects;
create policy profile_photos_registration_anon_insert on storage.objects for insert to anon, authenticated with check (bucket_id='profile-photos' and (storage.foldername(name))[1]='registration');
drop policy if exists profile_photos_authenticated_insert on storage.objects;
create policy profile_photos_authenticated_insert on storage.objects for insert to authenticated with check (bucket_id='profile-photos' and (public.hris_has_permission('people.write') or ((storage.foldername(name))[1]='avatars' and (storage.foldername(name))[2]=(select auth.uid())::text) or (storage.foldername(name))[1]=(select auth.uid())::text));
drop policy if exists profile_photos_authenticated_select on storage.objects;
create policy profile_photos_authenticated_select on storage.objects for select to authenticated using (bucket_id='profile-photos' and (public.hris_has_permission('people.read') or (storage.foldername(name))[1]=(select auth.uid())::text or (storage.foldername(name))[2]=(select auth.uid())::text));

drop policy if exists bpjs_cards_insert on storage.objects;
create policy bpjs_cards_insert on storage.objects for insert to authenticated with check (bucket_id='bpjs-cards' and public.hris_has_permission('people.write'));
drop policy if exists bpjs_cards_select on storage.objects;
create policy bpjs_cards_select on storage.objects for select to authenticated using (bucket_id='bpjs-cards' and (public.hris_has_permission('people.read') or exists(select 1 from public.karyawan k where k.id_karyawan=(storage.foldername(name))[2] and (k.auth_user_id=(select auth.uid()) or lower(k.email)=lower(coalesce((select auth.jwt()->>'email'),''))))));

drop policy if exists profile_photos_authenticated_update on storage.objects;
create policy profile_photos_authenticated_update on storage.objects for update to authenticated using (bucket_id='profile-photos' and public.hris_has_permission('people.write')) with check (bucket_id='profile-photos' and public.hris_has_permission('people.write'));
drop policy if exists profile_photos_authenticated_delete on storage.objects;
create policy profile_photos_authenticated_delete on storage.objects for delete to authenticated using (bucket_id='profile-photos' and public.hris_has_permission('people.write'));
drop policy if exists bpjs_cards_update on storage.objects;
create policy bpjs_cards_update on storage.objects for update to authenticated using (bucket_id='bpjs-cards' and public.hris_has_permission('people.write')) with check (bucket_id='bpjs-cards' and public.hris_has_permission('people.write'));
drop policy if exists bpjs_cards_delete on storage.objects;
create policy bpjs_cards_delete on storage.objects for delete to authenticated using (bucket_id='bpjs-cards' and public.hris_has_permission('people.write'));
