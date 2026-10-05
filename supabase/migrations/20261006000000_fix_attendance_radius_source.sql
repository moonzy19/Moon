-- Project by Tirta
-- Fix attendance radius source.

create or replace function public.hris_ess_clock_in(
 p_id_karyawan text,
 p_tanggal date,
 p_jam time,
 p_lat numeric,
 p_long numeric,
 p_accuracy numeric,
 p_selfie text,
 p_lokasi text default 'GPS'
) returns uuid
language plpgsql
security definer
set search_path=public
as $$
declare
  v_id uuid;
  v_now timestamp;
  v_tz text;
  v_require_gps boolean;
  v_require_selfie boolean;
  v_radius numeric;
  v_max_accuracy numeric;
  v_office_lat numeric;
  v_office_long numeric;
  v_distance numeric;
begin
  if p_id_karyawan is null or p_id_karyawan <> public.hris_ess_employee_id() then
    raise exception 'Akses absensi ditolak';
  end if;

  select coalesce(timezone,'Asia/Jakarta'),
         attendance_latitude,
         attendance_longitude,
         coalesce(attendance_max_accuracy_meters,100),
         greatest(1, coalesce(attendance_radius_meters::numeric,150))
    into v_tz,v_office_lat,v_office_long,v_max_accuracy,v_radius
  from public.hris_company_settings
  where id=1;

  v_now := now() at time zone coalesce(v_tz,'Asia/Jakarta');

  v_require_gps :=
    lower(coalesce(
      (select value from public.hris_enterprise_settings
       where key='require_gps' limit 1),'true'
    ))='true';

  v_require_selfie :=
    lower(coalesce(
      (select value from public.hris_enterprise_settings
       where key='require_selfie' limit 1),'true'
    ))='true';

  if v_require_gps and (p_lat is null or p_long is null) then
    raise exception 'Lokasi GPS wajib diambil sebelum clock-in';
  end if;

  if p_accuracy is not null and p_accuracy > v_max_accuracy then
    raise exception 'Akurasi GPS terlalu rendah. Maksimal % meter', round(v_max_accuracy);
  end if;

  if v_require_selfie and (p_selfie is null or length(p_selfie) < 100) then
    raise exception 'Selfie wajib diambil sebelum clock-in';
  end if;

  if p_selfie is not null and length(p_selfie) > 3500000 then
    raise exception 'Ukuran selfie terlalu besar. Ambil ulang foto.';
  end if;

  if p_selfie is not null and p_selfie not like 'data:image/jpeg;base64,%' then
    raise exception 'Format selfie tidak valid';
  end if;

  if p_lat is not null and p_long is not null
     and v_office_lat is not null and v_office_long is not null then

    v_distance := 6371000 * 2 * asin(sqrt(
      power(sin(radians(p_lat-v_office_lat)/2),2) +
      cos(radians(v_office_lat))*cos(radians(p_lat))*
      power(sin(radians(p_long-v_office_long)/2),2)
    ));

    if v_distance > v_radius then
      raise exception
        'Di luar radius absensi. Jarak Anda sekitar % meter, batas % meter',
        round(v_distance), round(v_radius);
    end if;

  elsif v_require_gps
        and (v_office_lat is null or v_office_long is null) then
    raise exception
      'Lokasi kantor untuk radius absensi belum dikonfigurasi oleh admin';
  end if;

  if exists(
    select 1
    from public.absensi
    where id_karyawan=p_id_karyawan
      and tanggal=(v_now::date)
      and jam_masuk is not null
  ) then
    raise exception 'Anda sudah melakukan clock-in untuk hari ini';
  end if;

  insert into public.absensi(
    id_karyawan,tanggal,jam_masuk,status,latitude,longitude,lokasi_masuk,
    akurasi_masuk,selfie_masuk,sumber,keterangan
  ) values (
    p_id_karyawan,v_now::date,v_now::time(0),'Hadir',
    p_lat,p_long,coalesce(p_lokasi,'GPS ESS'),
    p_accuracy,p_selfie,'ESS',
    'Clock-in ESS | Server timestamp'
  )
  returning id into v_id;

  return v_id;
end;
$$;

grant execute on function public.hris_ess_clock_in(
 text,date,time,numeric,numeric,numeric,text,text
) to authenticated;


create or replace function public.hris_ess_clock_out(
 p_id_karyawan text,
 p_tanggal date,
 p_jam time,
 p_lat numeric,
 p_long numeric,
 p_accuracy numeric,
 p_selfie text,
 p_lokasi text default 'GPS'
) returns uuid
language plpgsql
security definer
set search_path=public
as $$
declare
  v_id uuid;
  v_now timestamp;
  v_tz text;
  v_require_gps boolean;
  v_require_selfie boolean;
  v_radius numeric;
  v_max_accuracy numeric;
  v_office_lat numeric;
  v_office_long numeric;
  v_distance numeric;
begin
  if p_id_karyawan is null or p_id_karyawan <> public.hris_ess_employee_id() then
    raise exception 'Akses absensi ditolak';
  end if;

  select coalesce(timezone,'Asia/Jakarta'),
         attendance_latitude,
         attendance_longitude,
         coalesce(attendance_max_accuracy_meters,100),
         greatest(1, coalesce(attendance_radius_meters::numeric,150))
    into v_tz,v_office_lat,v_office_long,v_max_accuracy,v_radius
  from public.hris_company_settings
  where id=1;

  v_now := now() at time zone coalesce(v_tz,'Asia/Jakarta');

  v_require_gps :=
    lower(coalesce(
      (select value from public.hris_enterprise_settings
       where key='require_gps' limit 1),'true'
    ))='true';

  v_require_selfie :=
    lower(coalesce(
      (select value from public.hris_enterprise_settings
       where key='require_selfie' limit 1),'true'
    ))='true';

  if v_require_gps and (p_lat is null or p_long is null) then
    raise exception 'Lokasi GPS wajib diambil sebelum clock-out';
  end if;

  if p_accuracy is not null and p_accuracy > v_max_accuracy then
    raise exception 'Akurasi GPS terlalu rendah. Maksimal % meter', round(v_max_accuracy);
  end if;

  if v_require_selfie and (p_selfie is null or length(p_selfie) < 100) then
    raise exception 'Selfie wajib diambil sebelum clock-out';
  end if;

  if p_selfie is not null and length(p_selfie) > 3500000 then
    raise exception 'Ukuran selfie terlalu besar. Ambil ulang foto.';
  end if;

  if p_selfie is not null and p_selfie not like 'data:image/jpeg;base64,%' then
    raise exception 'Format selfie tidak valid';
  end if;

  if p_lat is not null and p_long is not null
     and v_office_lat is not null and v_office_long is not null then

    v_distance := 6371000 * 2 * asin(sqrt(
      power(sin(radians(p_lat-v_office_lat)/2),2) +
      cos(radians(v_office_lat))*cos(radians(p_lat))*
      power(sin(radians(p_long-v_office_long)/2),2)
    ));

    if v_distance > v_radius then
      raise exception
        'Di luar radius absensi. Jarak Anda sekitar % meter, batas % meter',
        round(v_distance), round(v_radius);
    end if;

  elsif v_require_gps
        and (v_office_lat is null or v_office_long is null) then
    raise exception
      'Lokasi kantor untuk radius absensi belum dikonfigurasi oleh admin';
  end if;

  select id,tanggal,jam_masuk
    into v_id
  from public.absensi
  where id_karyawan=p_id_karyawan
    and tanggal between (v_now::date-1) and v_now::date
    and jam_masuk is not null
    and jam_pulang is null
  order by tanggal desc, created_at desc
  limit 1;

  if v_id is null then
    raise exception 'Clock-in aktif tidak ditemukan';
  end if;

  update public.absensi
  set jam_pulang=v_now::time(0),
      longitude=coalesce(p_long,longitude),
      latitude=coalesce(p_lat,latitude),
      lokasi_pulang=coalesce(p_lokasi,'GPS ESS'),
      akurasi_pulang=p_accuracy,
      selfie_pulang=p_selfie,
      sumber='ESS',
      keterangan=coalesce(keterangan,'')||
        ' | Clock-out ESS | Server timestamp'
  where id=v_id;

  return v_id;
end;
$$;

grant execute on function public.hris_ess_clock_out(
 text,date,time,numeric,numeric,numeric,text,text
) to authenticated;
