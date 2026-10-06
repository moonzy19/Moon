create or replace function public.verify_employee_id_card(
  p_token text
)
returns jsonb
language sql
security definer
set search_path = public, pg_temp
as $$
  select jsonb_build_object(
    'found', true,
    'id_karyawan', k.id_karyawan,
    'nama', k.nama,
    'jabatan', coalesce(k.jabatan, ''),
    'departemen', coalesce(k.departemen, ''),
    'status_aktif', coalesce(k.status_aktif, false),
    'status_karyawan',
      coalesce(
        nullif(k.status_karyawan, ''),
        case when coalesce(k.status_aktif, false) then 'Aktif' else 'Nonaktif' end
      ),
    'tanggal_keluar', k.tanggal_keluar,
    'alasan_keluar', coalesce(k.alasan_keluar, ''),
    'company_name',
      coalesce(
        (select cs.company_name
           from public.hris_company_settings cs
          where cs.id = 1
          limit 1),
        'Project by Tirta'
      )
  )
  from public.hris_id_card_tokens t
  join public.karyawan k
    on k.id_karyawan = t.id_karyawan
  where t.token = trim(coalesce(p_token, ''))
    and t.revoked_at is null
  limit 1;
$$;

revoke all on function public.verify_employee_id_card(text) from public;
grant execute on function public.verify_employee_id_card(text) to anon, authenticated;
