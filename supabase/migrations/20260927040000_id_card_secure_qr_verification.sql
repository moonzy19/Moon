-- Project by Tirta — Secure ID Card QR verification
-- Applied to Supabase project wlqizasencncctwiytjp on 2026-09-27.
-- QR codes contain an opaque token, not employee personal data.

create table if not exists public.hris_id_card_tokens (
  id uuid primary key default gen_random_uuid(),
  id_karyawan text not null unique
    references public.karyawan(id_karyawan)
    on update cascade
    on delete cascade,
  token text not null unique default encode(gen_random_bytes(24), 'hex'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  revoked_at timestamptz null
);

create index if not exists ix_hris_id_card_tokens_employee
  on public.hris_id_card_tokens(id_karyawan);

create index if not exists ix_hris_id_card_tokens_revoked
  on public.hris_id_card_tokens(revoked_at);

alter table public.hris_id_card_tokens enable row level security;

drop policy if exists hris_id_card_tokens_admin_select
  on public.hris_id_card_tokens;

create policy hris_id_card_tokens_admin_select
on public.hris_id_card_tokens
for select
 to authenticated
using (private.is_hris_admin());

create or replace function public.ensure_id_card_verification_token(
  p_id_karyawan text
)
returns text
language plpgsql
security definer
set search_path = public, private, pg_temp
as $$
declare
  v_id text := trim(coalesce(p_id_karyawan, ''));
  v_token text;
begin
  if not private.is_hris_admin() then
    raise exception 'not authorized';
  end if;

  if v_id = '' then
    raise exception 'employee id is required';
  end if;

  select token
    into v_token
  from public.hris_id_card_tokens
  where id_karyawan = v_id
    and revoked_at is null
  limit 1;

  if v_token is not null then
    return v_token;
  end if;

  insert into public.hris_id_card_tokens (
    id_karyawan,
    token,
    updated_at,
    revoked_at
  )
  values (
    v_id,
    encode(gen_random_bytes(24), 'hex'),
    now(),
    null
  )
  on conflict (id_karyawan)
  do update set
    updated_at = now(),
    revoked_at = null
  returning token into v_token;

  return v_token;
end;
$$;

revoke all on function public.ensure_id_card_verification_token(text)
  from public;
grant execute on function public.ensure_id_card_verification_token(text)
  to authenticated;

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

revoke all on function public.verify_employee_id_card(text)
  from public;
grant execute on function public.verify_employee_id_card(text)
  to anon, authenticated;
