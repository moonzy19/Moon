-- Project by Tirta V61 | Employee registration approval bridge
-- Safe/idempotent: connects pending employee registrations to the existing
-- hris_approval_requests + hris_decide_approval workflow.

-- 1) Every new inactive Karyawan registration gets an approval request.
create or replace function public.hris_register_employee_registration_approval()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if new.status_aktif = false
     and lower(coalesce(new.role, 'karyawan')) = 'karyawan'
     and lower(coalesce(new.status_karyawan, '')) <> 'ditolak' then
    perform public.hris_v13_create_approval(
      'employee_registration',
      new.id_karyawan,
      new.email
    );
  end if;
  return new;
end;
$$;

revoke all on function public.hris_register_employee_registration_approval() from public, anon, authenticated;

drop trigger if exists trg_employee_registration_approval on public.karyawan;
create trigger trg_employee_registration_approval
after insert on public.karyawan
for each row execute function public.hris_register_employee_registration_approval();

-- 2) Whatever approval surface is used, the final approval status is mirrored
--    into karyawan. This also makes the old/other Approval Center safe to use.
create or replace function public.hris_sync_employee_registration_approval()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_email text := coalesce(new.decided_by, auth.jwt()->>'email');
  v_employee_email text;
begin
  if new.modul <> 'employee_registration'
     or old.status is not distinct from new.status
     or new.status not in ('Disetujui','Ditolak') then
    return new;
  end if;

  if new.status = 'Disetujui' then
    update public.karyawan
    set status_aktif = true,
        status_karyawan = case
          when lower(trim(coalesce(status_karyawan,''))) in ('menunggu verifikasi','menunggu')
            then 'Tetap'
          else status_karyawan
        end,
        tanggal_keluar = null,
        alasan_keluar_kode = null,
        alasan_keluar = null,
        updated_at = now()
    where id_karyawan = trim(new.record_id);
  else
    update public.karyawan
    set status_aktif = false,
        status_karyawan = 'Ditolak',
        updated_at = now()
    where id_karyawan = trim(new.record_id);
  end if;

  select email into v_employee_email
  from public.karyawan
  where id_karyawan = trim(new.record_id)
  limit 1;

  if v_employee_email is not null then
    insert into public.hris_employee_notifications(
      id_karyawan,
      title,
      message,
      type,
      link
    )
    select
      trim(new.record_id),
      'Status registrasi karyawan',
      case
        when new.status = 'Disetujui'
          then 'Registrasi Anda telah disetujui. Akun karyawan sekarang aktif.'
        else 'Registrasi Anda ditolak oleh administrator.'
      end,
      'approval',
      '#/employee'
    where exists (
      select 1 from public.karyawan k
      where k.id_karyawan = trim(new.record_id)
    );
  end if;

  return new;
end;
$$;

revoke all on function public.hris_sync_employee_registration_approval() from public, anon, authenticated;

drop trigger if exists trg_sync_employee_registration_approval on public.hris_approval_requests;
create trigger trg_sync_employee_registration_approval
after update of status on public.hris_approval_requests
for each row execute function public.hris_sync_employee_registration_approval();

-- 3) Backfill approval requests for pending registrations that already exist.
do $$
declare
  r record;
begin
  for r in
    select k.id_karyawan, k.email
    from public.karyawan k
    where k.status_aktif = false
      and lower(coalesce(k.role, 'karyawan')) = 'karyawan'
      and lower(coalesce(k.status_karyawan, '')) <> 'ditolak'
      and not exists (
        select 1
        from public.hris_approval_requests ar
        where ar.modul = 'employee_registration'
          and ar.record_id = k.id_karyawan
          and ar.status = 'Menunggu'
      )
  loop
    perform public.hris_v13_create_approval(
      'employee_registration',
      r.id_karyawan,
      r.email
    );
  end loop;
end;
$$;

notify pgrst, 'reload schema';
