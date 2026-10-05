create table if not exists public.hris_announcement_reads (
  announcement_id uuid not null references public.hris_announcements(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  read_at timestamptz not null default now(),
  primary key (announcement_id, user_id)
);

alter table public.hris_announcement_reads enable row level security;

drop policy if exists authz_select on public.hris_announcement_reads;
drop policy if exists authz_insert on public.hris_announcement_reads;
drop policy if exists authz_update on public.hris_announcement_reads;
drop policy if exists authz_delete on public.hris_announcement_reads;

create policy authz_select
on public.hris_announcement_reads
for select to authenticated
using (user_id = auth.uid());

create policy authz_insert
on public.hris_announcement_reads
for insert to authenticated
with check (user_id = auth.uid());

create policy authz_update
on public.hris_announcement_reads
for update to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

grant select, insert, update
on public.hris_announcement_reads
to authenticated;

create or replace function public.hris_announcement_publish(p_id uuid)
returns public.hris_announcements
language plpgsql
security definer
set search_path to 'public', 'pg_temp'
as $function$
declare
  v_row public.hris_announcements;
begin
  if public.current_hris_role() not in ('Super Admin', 'Admin', 'HRD') then
    raise exception 'Akses ditolak: announcements.publish'
      using errcode = '42501';
  end if;

  update public.hris_announcements
     set status = 'published',
         published_at = coalesce(published_at, now()),
         updated_at = now()
   where id = p_id
     and status = 'draft'
   returning * into v_row;

  if v_row.id is null then
    raise exception 'Pengumuman tidak ditemukan atau bukan draft';
  end if;

  return v_row;
end;
$function$;

create or replace function public.hris_announcement_archive(p_id uuid)
returns public.hris_announcements
language plpgsql
security definer
set search_path to 'public', 'pg_temp'
as $function$
declare
  v_row public.hris_announcements;
begin
  if public.current_hris_role() not in ('Super Admin', 'Admin', 'HRD') then
    raise exception 'Akses ditolak: announcements.archive'
      using errcode = '42501';
  end if;

  update public.hris_announcements
     set status = 'archived',
         updated_at = now()
   where id = p_id
     and status <> 'archived'
   returning * into v_row;

  if v_row.id is null then
    raise exception 'Pengumuman tidak ditemukan atau sudah diarsipkan';
  end if;

  return v_row;
end;
$function$;

grant execute on function public.hris_announcement_publish(uuid) to authenticated;
grant execute on function public.hris_announcement_archive(uuid) to authenticated;

create or replace function public.hris_notify_feedback_reply()
returns trigger
language plpgsql
security definer
set search_path to 'public', 'pg_temp'
as $function$
declare
  v_recipient text;
  v_name text;
  v_notification_id uuid;
begin
  if new.tanggapan_hr is null
     or btrim(new.tanggapan_hr) = '' then
    return new;
  end if;

  if tg_op <> 'UPDATE'
     or coalesce(new.tanggapan_hr, '') =
        coalesce(old.tanggapan_hr, '') then
    return new;
  end if;

  select lower(trim(k.email)),
         coalesce(k.nama, new.id_karyawan, 'Karyawan')
    into v_recipient, v_name
    from public.karyawan k
   where k.id_karyawan = new.id_karyawan
   limit 1;

  if v_recipient is not null
     and btrim(v_recipient) <> '' then

    select public.hris_notify_once(
      v_recipient,
      'feedback',
      'Tanggapan HR Baru',
      'HR memberikan tanggapan pada masukan "' ||
        coalesce(new.judul, 'Masukan Anda') || '".',
      '#/feedback',
      'feedback-reply:' || new.id::text || ':' ||
        md5(coalesce(new.tanggapan_hr, '')),
      'FEEDBACK_REPLY',
      new.id::text,
      jsonb_build_object(
        'name', v_name,
        'subject', coalesce(new.judul, 'Masukan Anda'),
        'status', coalesce(new.status, 'Baru')
      )
    ) into v_notification_id;

  end if;

  return new;
end;
$function$;

drop trigger if exists trg_notify_feedback_reply
on public.hris_employee_feedback;

create trigger trg_notify_feedback_reply
after update of tanggapan_hr
on public.hris_employee_feedback
for each row
execute function public.hris_notify_feedback_reply();

do $$
begin
  if not exists (
    select 1
      from pg_publication_tables
     where pubname = 'supabase_realtime'
       and schemaname = 'public'
       and tablename = 'hris_announcements'
  ) then
    alter publication supabase_realtime
      add table public.hris_announcements;
  end if;

  if not exists (
    select 1
      from pg_publication_tables
     where pubname = 'supabase_realtime'
       and schemaname = 'public'
       and tablename = 'hris_announcement_reads'
  ) then
    alter publication supabase_realtime
      add table public.hris_announcement_reads;
  end if;
end
$$;
