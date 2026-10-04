-- Project by Tirta — Admin Notification Center Events

-- Replace legacy notification triggers before installing the event-idempotent
-- versions below. These names existed in earlier migrations.
drop trigger if exists trg_notify_new_employee on public.karyawan;
drop trigger if exists trg_notify_feedback_new on public.hris_employee_feedback;
drop trigger if exists trg_notify_ess_leave_request on public.hris_employee_leave_requests;
drop trigger if exists trg_notify_attendance_request on public.hris_employee_attendance_requests;
drop trigger if exists trg_notify_ess_overtime_request on public.hris_employee_overtime_requests;
drop trigger if exists trg_notify_leave_request on public.hris_cuti;
drop trigger if exists trg_notify_overtime_request on public.hris_lembur;
drop trigger if exists trg_notify_new_feedback on public.hris_employee_feedback;
drop trigger if exists trg_notify_new_ess_leave on public.hris_employee_leave_requests;
drop trigger if exists trg_notify_new_ess_attendance on public.hris_employee_attendance_requests;
drop trigger if exists trg_notify_new_ess_overtime on public.hris_employee_overtime_requests;
drop trigger if exists trg_notify_new_ess_profile on public.hris_employee_profile_requests;
drop trigger if exists trg_notify_new_legacy_leave on public.hris_cuti;
drop trigger if exists trg_notify_new_legacy_overtime on public.hris_lembur;
drop trigger if exists trg_notify_new_recruitment_application on public.hris_recruitment_applications_v25;
-- Adds durable, deduplicated notification events for the admin header.
-- Public UI is intentionally fed through hris_notifications; sensitive trigger
-- functions remain trigger-only and are not executable by anon/authenticated users.

create extension if not exists pgcrypto;

-- Durable event metadata. Nullable event_key allows legacy notifications to coexist.
alter table public.hris_notifications
  add column if not exists event_key text,
  add column if not exists event_code text,
  add column if not exists entity_id text,
  add column if not exists metadata jsonb not null default '{}'::jsonb;

create unique index if not exists ux_hris_notifications_recipient_event
  on public.hris_notifications(lower(recipient_email), event_key)
  where event_key is not null;

create index if not exists ix_hris_notifications_event_code
  on public.hris_notifications(event_code, created_at desc);

-- Idempotent notification insert. This prevents polling/retries from creating duplicates.
create or replace function public.hris_notify_once(
  p_recipient text,
  p_type text,
  p_title text,
  p_message text,
  p_link text default null,
  p_event_key text default null,
  p_event_code text default null,
  p_entity_id text default null,
  p_metadata jsonb default '{}'::jsonb
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id uuid;
begin
  if p_recipient is null or btrim(p_recipient) = '' then
    return null;
  end if;

  insert into public.hris_notifications(
    recipient_email, type, title, message, link,
    event_key, event_code, entity_id, metadata
  )
  values(
    lower(btrim(p_recipient)),
    coalesce(nullif(btrim(p_type), ''), 'system'),
    coalesce(nullif(btrim(p_title), ''), 'Notification'),
    coalesce(p_message, ''),
    p_link,
    nullif(btrim(p_event_key), ''),
    nullif(btrim(p_event_code), ''),
    nullif(btrim(p_entity_id), ''),
    coalesce(p_metadata, '{}'::jsonb)
  )
  on conflict (lower(recipient_email), event_key) where event_key is not null
  do nothing
  returning id into v_id;

  return v_id;
end;
$$;

revoke all on function public.hris_notify_once(text,text,text,text,text,text,text,text,jsonb)
  from public, anon, authenticated;

-- -------------------------------------------------------------------------
-- New employee registration (person icon).
-- -------------------------------------------------------------------------
create or replace function public.hris_notify_new_employee()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  u record;
begin
  if new.status_aktif = false
     and lower(coalesce(new.role, 'karyawan')) = 'karyawan'
     and lower(coalesce(new.status_karyawan, '')) <> 'ditolak' then
    for u in
      select lower(email) as email
      from public.hris_users
      where status = 'Aktif'
        and role in ('Admin','HRD','Super Admin')
        and email is not null
    loop
      perform public.hris_notify_once(
        u.email,
        'employee',
        'Karyawan Baru',
        'Karyawan baru terdaftar: ' || coalesce(new.nama, new.id_karyawan, 'Tanpa nama'),
        '#/employee-new',
        'employee-registration:' || coalesce(new.id_karyawan, new.id::text),
        'EMPLOYEE_REGISTRATION_NEW',
        coalesce(new.id_karyawan, new.id::text),
        jsonb_build_object(
          'name', coalesce(new.nama, new.id_karyawan, 'Tanpa nama'),
          'employee_id', coalesce(new.id_karyawan, ''),
          'email', coalesce(new.email, '')
        )
      );
    end loop;
  end if;
  return new;
end;
$$;

revoke all on function public.hris_notify_new_employee() from public, anon, authenticated;
drop trigger if exists trg_notify_new_employee on public.karyawan;
create trigger trg_notify_new_employee
after insert on public.karyawan
for each row execute function public.hris_notify_new_employee();

-- -------------------------------------------------------------------------
-- Employee feedback / suggestion box (message icon).
-- -------------------------------------------------------------------------
create or replace function public.hris_notify_new_feedback()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  u record;
  v_name text;
begin
  select coalesce(k.nama, new.id_karyawan, 'Karyawan') into v_name
  from public.karyawan k
  where lower(k.id_karyawan) = lower(new.id_karyawan)
  limit 1;

  for u in
    select lower(email) as email
    from public.hris_users
    where status = 'Aktif'
      and role in ('Admin','HRD','Super Admin')
      and email is not null
  loop
    perform public.hris_notify_once(
      u.email,
      'feedback',
      'Masukan Karyawan Baru',
      'Masukan baru dari ' || v_name || ': ' || coalesce(new.judul, 'Saran baru'),
      '#/feedback',
      'feedback:' || new.id::text,
      'FEEDBACK_NEW',
      new.id::text,
      jsonb_build_object(
        'name', v_name,
        'subject', coalesce(new.judul, 'Saran baru'),
        'category', coalesce(new.kategori, 'Masukan')
      )
    );
  end loop;
  return new;
end;
$$;

revoke all on function public.hris_notify_new_feedback() from public, anon, authenticated;
drop trigger if exists trg_notify_new_feedback on public.hris_employee_feedback;
create trigger trg_notify_new_feedback
after insert on public.hris_employee_feedback
for each row execute function public.hris_notify_new_feedback();

-- -------------------------------------------------------------------------
-- ESS leave request (bell icon).
-- -------------------------------------------------------------------------
create or replace function public.hris_notify_new_ess_leave()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  u record;
  v_name text;
begin
  if new.status <> 'Menunggu' then return new; end if;
  select coalesce(k.nama, new.id_karyawan, 'Karyawan') into v_name
  from public.karyawan k where lower(k.id_karyawan)=lower(new.id_karyawan) limit 1;

  for u in select lower(email) email from public.hris_users where status='Aktif' and role in ('Admin','HRD','Super Admin') and email is not null loop
    perform public.hris_notify_once(
      u.email, 'leave', 'Pengajuan Cuti / Izin Baru',
      v_name || ' mengajukan ' || coalesce(new.jenis, 'cuti') || ' untuk ' || new.tanggal_mulai::text || ' - ' || new.tanggal_selesai::text || '.',
      '#/approvals', 'ess-leave:'||new.id::text, 'LEAVE_REQUEST_NEW', new.id::text,
      jsonb_build_object('name',v_name,'leave_type',coalesce(new.jenis,'cuti'),'date_range',new.tanggal_mulai::text||' - '||new.tanggal_selesai::text,'record_id',new.id::text)
    );
  end loop;
  return new;
end;
$$;
revoke all on function public.hris_notify_new_ess_leave() from public, anon, authenticated;
drop trigger if exists trg_notify_new_ess_leave on public.hris_employee_leave_requests;
create trigger trg_notify_new_ess_leave after insert on public.hris_employee_leave_requests for each row execute function public.hris_notify_new_ess_leave();

-- -------------------------------------------------------------------------
-- ESS profile/data change request (bell icon).
-- -------------------------------------------------------------------------
create or replace function public.hris_notify_new_ess_profile()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  u record;
  v_name text;
begin
  if new.status <> 'Menunggu' then return new; end if;
  select coalesce(k.nama, new.id_karyawan, 'Karyawan') into v_name
  from public.karyawan k where lower(k.id_karyawan)=lower(new.id_karyawan) limit 1;

  for u in select lower(email) email from public.hris_users where status='Aktif' and role in ('Admin','HRD','Super Admin') and email is not null loop
    perform public.hris_notify_once(
      u.email, 'profile', 'Permintaan Perubahan Data',
      v_name || ' meminta perubahan ' || coalesce(new.field_name, 'data karyawan') || '.',
      '#/approvals', 'ess-profile:'||new.id::text, 'PROFILE_CHANGE_REQUEST_NEW', new.id::text,
      jsonb_build_object('name',v_name,'field_name',coalesce(new.field_name,'data karyawan'),'employee_id',coalesce(new.id_karyawan,''),'record_id',new.id::text)
    );
  end loop;
  return new;
end;
$$;
revoke all on function public.hris_notify_new_ess_profile() from public, anon, authenticated;
drop trigger if exists trg_notify_new_ess_profile on public.hris_employee_profile_requests;
create trigger trg_notify_new_ess_profile after insert on public.hris_employee_profile_requests for each row execute function public.hris_notify_new_ess_profile();

-- -------------------------------------------------------------------------
-- ESS attendance correction (bell icon).
-- -------------------------------------------------------------------------
create or replace function public.hris_notify_new_ess_attendance()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  u record;
  v_name text;
begin
  if new.status <> 'Menunggu' then return new; end if;
  select coalesce(k.nama, new.id_karyawan, 'Karyawan') into v_name
  from public.karyawan k where lower(k.id_karyawan)=lower(new.id_karyawan) limit 1;

  for u in select lower(email) email from public.hris_users where status='Aktif' and role in ('Admin','HRD','Super Admin') and email is not null loop
    perform public.hris_notify_once(
      u.email, 'attendance', 'Permintaan Koreksi Absensi',
      v_name || ' mengajukan koreksi absensi untuk ' || new.tanggal::text || '.',
      '#/approvals', 'ess-attendance:'||new.id::text, 'ATTENDANCE_REQUEST_NEW', new.id::text,
      jsonb_build_object('name',v_name,'date',new.tanggal::text,'request_type',coalesce(new.jenis,''),'record_id',new.id::text)
    );
  end loop;
  return new;
end;
$$;
revoke all on function public.hris_notify_new_ess_attendance() from public, anon, authenticated;
drop trigger if exists trg_notify_new_ess_attendance on public.hris_employee_attendance_requests;
create trigger trg_notify_new_ess_attendance after insert on public.hris_employee_attendance_requests for each row execute function public.hris_notify_new_ess_attendance();

-- -------------------------------------------------------------------------
-- ESS overtime request (bell icon).
-- -------------------------------------------------------------------------
create or replace function public.hris_notify_new_ess_overtime()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  u record;
  v_name text;
begin
  if new.status <> 'Menunggu' then return new; end if;
  select coalesce(k.nama, new.id_karyawan, 'Karyawan') into v_name
  from public.karyawan k where lower(k.id_karyawan)=lower(new.id_karyawan) limit 1;

  for u in select lower(email) email from public.hris_users where status='Aktif' and role in ('Admin','HRD','Super Admin') and email is not null loop
    perform public.hris_notify_once(
      u.email, 'overtime', 'Pengajuan Lembur Baru',
      v_name || ' mengajukan lembur ' || new.menit::text || ' menit pada ' || new.tanggal::text || '.',
      '#/approvals', 'ess-overtime:'||new.id::text, 'OVERTIME_REQUEST_NEW', new.id::text,
      jsonb_build_object('name',v_name,'minutes',new.menit,'date',new.tanggal::text,'record_id',new.id::text)
    );
  end loop;
  return new;
end;
$$;
revoke all on function public.hris_notify_new_ess_overtime() from public, anon, authenticated;
drop trigger if exists trg_notify_new_ess_overtime on public.hris_employee_overtime_requests;
create trigger trg_notify_new_ess_overtime after insert on public.hris_employee_overtime_requests for each row execute function public.hris_notify_new_ess_overtime();

-- -------------------------------------------------------------------------
-- Legacy leave/overtime tables remain supported for older HR entry points.
-- -------------------------------------------------------------------------
create or replace function public.hris_notify_new_legacy_leave()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare u record; v_name text;
begin
  if coalesce(new.status,'Menunggu') <> 'Menunggu' then return new; end if;
  select coalesce(k.nama,new.id_karyawan,'Karyawan') into v_name from public.karyawan k where lower(k.id_karyawan)=lower(new.id_karyawan) limit 1;
  for u in select lower(email) email from public.hris_users where status='Aktif' and role in ('Admin','HRD','Super Admin') and email is not null loop
    perform public.hris_notify_once(u.email,'leave','Pengajuan Cuti / Izin Baru',v_name||' mengajukan '||coalesce(new.jenis,'cuti')||' untuk '||new.tanggal_mulai::text||' - '||new.tanggal_selesai::text||'.','#/approvals','leave:'||new.id::text,'LEAVE_REQUEST_NEW',new.id::text,jsonb_build_object('name',v_name,'leave_type',coalesce(new.jenis,'cuti'),'date_range',new.tanggal_mulai::text||' - '||new.tanggal_selesai::text));
  end loop;
  return new;
end;
$$;
revoke all on function public.hris_notify_new_legacy_leave() from public, anon, authenticated;
drop trigger if exists trg_notify_new_legacy_leave on public.hris_cuti;
create trigger trg_notify_new_legacy_leave after insert on public.hris_cuti for each row execute function public.hris_notify_new_legacy_leave();

create or replace function public.hris_notify_new_legacy_overtime()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare u record; v_name text;
begin
  if coalesce(new.status,'Menunggu') <> 'Menunggu' then return new; end if;
  select coalesce(k.nama,new.id_karyawan,'Karyawan') into v_name from public.karyawan k where lower(k.id_karyawan)=lower(new.id_karyawan) limit 1;
  for u in select lower(email) email from public.hris_users where status='Aktif' and role in ('Admin','HRD','Super Admin') and email is not null loop
    perform public.hris_notify_once(u.email,'overtime','Pengajuan Lembur Baru',v_name||' mengajukan lembur '||coalesce(new.menit,0)::text||' menit pada '||new.tanggal::text||'.','#/approvals','overtime:'||new.id::text,'OVERTIME_REQUEST_NEW',new.id::text,jsonb_build_object('name',v_name,'minutes',coalesce(new.menit,0),'date',new.tanggal::text));
  end loop;
  return new;
end;
$$;
revoke all on function public.hris_notify_new_legacy_overtime() from public, anon, authenticated;
drop trigger if exists trg_notify_new_legacy_overtime on public.hris_lembur;
create trigger trg_notify_new_legacy_overtime after insert on public.hris_lembur for each row execute function public.hris_notify_new_legacy_overtime();

-- -------------------------------------------------------------------------
-- Recruitment V25 application (bell icon).
-- -------------------------------------------------------------------------
create or replace function public.hris_notify_new_recruitment_application()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  u record;
  v_name text;
  v_position text;
begin
  select cp.full_name, ro.posisi
    into v_name, v_position
  from public.hris_candidate_profiles_v25 cp
  join public.hris_recruitment_openings_v25 ro on ro.id = new.opening_id
  where cp.id = new.candidate_profile_id
  limit 1;

  v_name := coalesce(v_name, 'Kandidat');
  v_position := coalesce(v_position, 'posisi yang dibuka');

  for u in select lower(email) email from public.hris_users where status='Aktif' and role in ('Admin','HRD','Super Admin') and email is not null loop
    perform public.hris_notify_once(
      u.email,'recruitment','Kandidat Baru',
      v_name || ' melamar posisi ' || v_position || '.',
      '#/recruitment-v25','recruitment-application:'||new.id::text,'RECRUITMENT_APPLICATION_NEW',new.id::text,
      jsonb_build_object('name',v_name,'position',v_position,'application_id',new.id::text,'opening_id',new.opening_id::text,'applied_at',new.applied_at)
    );
  end loop;
  return new;
end;
$$;
revoke all on function public.hris_notify_new_recruitment_application() from public, anon, authenticated;
drop trigger if exists trg_notify_new_recruitment_application on public.hris_recruitment_applications_v25;
create trigger trg_notify_new_recruitment_application after insert on public.hris_recruitment_applications_v25 for each row execute function public.hris_notify_new_recruitment_application();

-- -------------------------------------------------------------------------
-- Time-based contract reminder. The web header invokes this periodically;
-- event_key makes it idempotent, so a contract generates only one reminder
-- while it is within the 7-day window.
-- -------------------------------------------------------------------------
create or replace function public.hris_generate_admin_notifications()
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  c record;
  u record;
  v_days integer;
  v_count integer := 0;
begin
  if not public.hris_has_permission('notifications.read') then
    raise exception 'Not authorized to generate admin notifications';
  end if;

  for c in
    select
      ec.id,
      ec.id_karyawan,
      ec.tanggal_selesai,
      coalesce(k.nama, ec.id_karyawan, 'Karyawan') as nama
    from public.hris_employee_contracts ec
    left join public.karyawan k on lower(k.id_karyawan)=lower(ec.id_karyawan)
    where ec.status='Aktif'
      and ec.tanggal_selesai is not null
      and ec.tanggal_selesai between current_date and current_date + 7
  loop
    v_days := greatest(0, c.tanggal_selesai - current_date);
    for u in
      select lower(email) email
      from public.hris_users
      where status='Aktif'
        and role in ('Admin','HRD','Super Admin')
        and email is not null
    loop
      if public.hris_notify_once(
        u.email,
        'contract',
        'Kontrak Akan Berakhir',
        'Kontrak ' || c.nama || ' akan berakhir dalam ' || v_days::text || ' hari (' || c.tanggal_selesai::text || ').',
        '#/enterprise-v26',
        'contract-expiring:' || c.id::text,
        'CONTRACT_EXPIRING_SOON',
        c.id::text,
        jsonb_build_object('name',c.nama,'days_left',v_days,'end_date',c.tanggal_selesai::text,'employee_id',c.id_karyawan)
      ) is not null then
        v_count := v_count + 1;
      end if;
    end loop;
  end loop;

  return v_count;
end;
$$;

revoke all on function public.hris_generate_admin_notifications() from public, anon;
grant execute on function public.hris_generate_admin_notifications() to authenticated;

-- Existing rows inserted before this migration can still receive a contract
-- reminder as soon as the current header requests generation.

notify pgrst, 'reload schema';

-- Realtime for admin notifications and the two source feeds used by the header.
do $$
begin
  if to_regclass('realtime.messages') is not null then
    if not exists(select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename='hris_notifications') then
      alter publication supabase_realtime add table public.hris_notifications;
    end if;
    if not exists(select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename='hris_employee_notifications') then
      alter publication supabase_realtime add table public.hris_employee_notifications;
    end if;
    if not exists(select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename='karyawan') then
      alter publication supabase_realtime add table public.karyawan;
    end if;
    if not exists(select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename='hris_employee_feedback') then
      alter publication supabase_realtime add table public.hris_employee_feedback;
    end if;
  end if;
end $$;

create extension if not exists pg_cron with schema pg_catalog;
do $$
declare v_jobid bigint;
begin
  if not exists(select 1 from cron.job where jobname='hris-contract-expiry-notifications') then
    v_jobid:=cron.schedule('hris-contract-expiry-notifications','0 0 * * *',$job$select public.hris_generate_admin_notifications_job();$job$);
  end if;
end $$;
