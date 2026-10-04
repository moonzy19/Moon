-- Project by Tirta | security hardening verified against Supabase advisors.
-- SECURITY DEFINER functions remain available to authenticated clients, while anonymous
-- execution is limited to the two intentionally public client RPCs.

do $$
declare r record;
begin
  for r in
    select n.nspname, p.proname, pg_get_function_identity_arguments(p.oid) args
    from pg_proc p
    join pg_namespace n on n.oid=p.pronamespace
    where n.nspname='public' and p.prosecdef
  loop
    execute format('revoke execute on function %I.%I(%s) from public, anon', r.nspname, r.proname, r.args);
    execute format('grant execute on function %I.%I(%s) to authenticated', r.nspname, r.proname, r.args);
  end loop;
end $$;

grant execute on function public.hris_get_public_app_theme() to anon;
grant execute on function public.verify_employee_id_card(text) to anon;

alter view public.hris_system_health set (security_invoker = true);
alter view public.hris_v21_security_overview set (security_invoker = true);
alter view public.hris_v22_payroll_summary set (security_invoker = true);

do $$
declare r record;
begin
  for r in
    select n.nspname, p.proname, pg_get_function_identity_arguments(p.oid) args
    from pg_proc p
    join pg_namespace n on n.oid=p.pronamespace
    where n.nspname='public'
      and not exists (
        select 1 from unnest(coalesce(p.proconfig, array[]::text[])) cfg
        where cfg like 'search_path=%'
      )
  loop
    execute format('alter function %I.%I(%s) set search_path = public, pg_temp', r.nspname, r.proname, r.args);
  end loop;
end $$;
