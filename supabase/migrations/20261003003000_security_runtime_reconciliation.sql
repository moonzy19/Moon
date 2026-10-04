-- Project by Tirta: reconcile live DB security/performance fixes with source control.
-- Safe/non-destructive: policy replacement, function hardening, and explicit grants only.

-- Keep employee/admin token reads in one permissive policy and avoid repeated auth calls.
drop policy if exists hris_id_card_tokens_admin_select
  on public.hris_id_card_tokens;

drop policy if exists hris_id_card_tokens_select
  on public.hris_id_card_tokens;

create policy hris_id_card_tokens_select
on public.hris_id_card_tokens
for select
to authenticated
using (
  (select private.is_hris_admin())
  or exists (
    select 1
    from public.karyawan k
    where k.id_karyawan = hris_id_card_tokens.id_karyawan
      and k.status_aktif = true
      and (
        (k.auth_user_id is not null and k.auth_user_id = (select auth.uid()))
        or (
          nullif(lower(trim(k.email)), '') is not null
          and lower(trim(k.email)) = lower(trim(coalesce((select auth.jwt() ->> 'email'), '')))
        )
      )
  )
);

-- Admin-only token creation remains privileged, but anonymous execution is explicitly denied.
revoke execute on function public.ensure_id_card_verification_token(text)
  from public, anon;
grant execute on function public.ensure_id_card_verification_token(text)
  to authenticated;

-- Employee-owned token helper is also never callable anonymously.
-- Keep fixed search paths on privileged functions.
alter function public.ensure_id_card_verification_token(text)
  set search_path = public, pg_temp;
