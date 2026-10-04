do $$
begin
  if to_regclass('realtime.messages') is not null then
    if not exists(select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename='karyawan') then
      alter publication supabase_realtime add table public.karyawan;
    end if;
    if not exists(select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename='hris_employee_feedback') then
      alter publication supabase_realtime add table public.hris_employee_feedback;
    end if;
  end if;
end $$;
