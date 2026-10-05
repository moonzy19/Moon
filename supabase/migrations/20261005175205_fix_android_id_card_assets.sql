-- Project by Tirta: Android employee ID card assets
-- Already applied to the connected Supabase project.

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
  v_is_admin boolean := (select private.is_hris_admin());
  v_is_owner boolean := false;
begin
  if v_id = '' then raise exception 'employee id is required'; end if;
  if not v_is_admin then
    select exists (
      select 1 from public.karyawan k
      where k.id_karyawan = v_id
        and k.status_aktif = true
        and (
          (k.auth_user_id is not null and k.auth_user_id = (select auth.uid()))
          or (nullif(lower(trim(k.email)), '') is not null
              and lower(trim(k.email)) = lower(trim(coalesce((select auth.jwt() ->> 'email'), ''))))
        )
    ) into v_is_owner;
    if not v_is_owner then raise exception 'not authorized'; end if;
  end if;
  select token into v_token
  from public.hris_id_card_tokens
  where id_karyawan = v_id and revoked_at is null
  limit 1;
  if v_token is not null then return v_token; end if;
  insert into public.hris_id_card_tokens (id_karyawan, token, updated_at, revoked_at)
  values (v_id, encode(gen_random_bytes(24), 'hex'), now(), null)
  on conflict (id_karyawan) do update set
    token = encode(gen_random_bytes(24), 'hex'), updated_at = now(), revoked_at = null
  returning token into v_token;
  return v_token;
end;
$$;

revoke all on function public.ensure_id_card_verification_token(text) from public, anon;
grant execute on function public.ensure_id_card_verification_token(text) to authenticated;

drop policy if exists profile_photos_authenticated_select on storage.objects;
create policy profile_photos_authenticated_select on storage.objects
for select to authenticated
using (
  bucket_id = 'profile-photos' and (
    public.hris_has_permission('people.read')
    or (storage.foldername(name))[1] = (select auth.uid())::text
    or (storage.foldername(name))[2] = (select auth.uid())::text
    or exists (
      select 1 from public.karyawan k
      where k.foto_url = name and k.status_aktif = true
        and (
          (k.auth_user_id is not null and k.auth_user_id = (select auth.uid()))
          or (nullif(lower(trim(k.email)), '') is not null
              and lower(trim(k.email)) = lower(trim(coalesce((select auth.jwt() ->> 'email'), ''))))
        )
    )
  )
);
