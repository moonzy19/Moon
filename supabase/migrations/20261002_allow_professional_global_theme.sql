-- Project by Tirta: allow Professional as a persisted global employee/admin theme.

ALTER TABLE public.hris_company_settings
  DROP CONSTRAINT IF EXISTS hris_company_settings_employee_portal_theme_check;

ALTER TABLE public.hris_company_settings
  ADD CONSTRAINT hris_company_settings_employee_portal_theme_check
  CHECK (employee_portal_theme = ANY (ARRAY[
    'professional'::text,
    'sun'::text,
    'moon'::text,
    'galaxy'::text,
    'blackhole'::text,
    'nebula'::text,
    'aurora'::text
  ]));

ALTER TABLE public.hris_user_preferences
  DROP CONSTRAINT IF EXISTS hris_user_preferences_theme_check;

ALTER TABLE public.hris_user_preferences
  ADD CONSTRAINT hris_user_preferences_theme_check
  CHECK (theme = ANY (ARRAY[
    'professional'::text,
    'sun'::text,
    'moon'::text,
    'galaxy'::text,
    'blackhole'::text,
    'nebula'::text,
    'aurora'::text
  ]));

CREATE OR REPLACE FUNCTION public.hris_get_employee_portal_theme()
RETURNS text
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
declare
  v_theme text;
begin
  select employee_portal_theme into v_theme
  from public.hris_company_settings
  where id = 1;

  return case
    when v_theme in ('professional','sun','moon','galaxy','blackhole','nebula','aurora') then v_theme
    else 'professional'
  end;
end;
$function$;

CREATE OR REPLACE FUNCTION public.hris_set_employee_portal_theme(p_theme text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
declare
  v_email text;
begin
  if p_theme not in ('professional','sun','moon','galaxy','blackhole','nebula','aurora') then
    raise exception 'Tema Portal Karyawan tidak valid';
  end if;

  v_email = lower(coalesce(auth.jwt()->>'email',''));

  if not exists (
    select 1 from public.hris_users
    where lower(email)=v_email
      and status='Aktif'
      and role='Super Admin'
  ) then
    raise exception 'Hanya Super Admin yang dapat mengubah tema Portal Karyawan';
  end if;

  update public.hris_company_settings
  set employee_portal_theme=p_theme,
      updated_at=now()
  where id=1;

  if not found then
    raise exception 'Pengaturan perusahaan dengan id=1 tidak ditemukan';
  end if;
end;
$function$;
