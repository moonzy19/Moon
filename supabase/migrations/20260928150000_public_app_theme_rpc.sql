begin;

-- Android login is shown before authentication. Expose only the non-sensitive
-- company theme so the login screen can follow the Super Admin-selected portal theme.
create or replace function public.hris_get_public_app_theme()
returns text
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  v_theme text;
begin
  select employee_portal_theme into v_theme
  from public.hris_company_settings
  where id = 1;

  return case
    when v_theme in ('sun','moon','galaxy','blackhole','nebula') then v_theme
    else 'sun'
  end;
end;
$$;

revoke all on function public.hris_get_public_app_theme() from public;
grant execute on function public.hris_get_public_app_theme() to anon, authenticated;

commit;
