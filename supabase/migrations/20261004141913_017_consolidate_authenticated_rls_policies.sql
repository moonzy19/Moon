do $$
declare r record; p record; act text; q text; w text; polname text; can_merge boolean;
begin
 for r in select tablename from pg_policies where schemaname='public' and permissive='PERMISSIVE' and roles=ARRAY['authenticated']::name[] group by tablename having count(*)>1 loop
   can_merge:=true;
   for p in select policyname from pg_policies where schemaname='public' and tablename=r.tablename and permissive='PERMISSIVE' and 'authenticated'=any(roles) and roles<>ARRAY['authenticated']::name[] loop can_merge:=false; end loop;
   if not can_merge then continue; end if;
   foreach act in array ARRAY['SELECT','INSERT','UPDATE','DELETE'] loop
     q:=null; w:=null;
     select string_agg('('||replace(replace(coalesce(qual,'true'),'auth.uid()','(select auth.uid())'),'auth.jwt()','(select auth.jwt())')||')',' OR ') into q
     from pg_policies where schemaname='public' and tablename=r.tablename and permissive='PERMISSIVE' and roles=ARRAY['authenticated']::name[] and cmd in(act,'ALL') and act in('SELECT','UPDATE','DELETE');
     select string_agg('('||replace(replace(coalesce(with_check,'true'),'auth.uid()','(select auth.uid())'),'auth.jwt()','(select auth.jwt())')||')',' OR ') into w
     from pg_policies where schemaname='public' and tablename=r.tablename and permissive='PERMISSIVE' and roles=ARRAY['authenticated']::name[] and cmd in(act,'ALL') and act in('INSERT','UPDATE');
     if (act='SELECT' and q is null) or (act='DELETE' and q is null) or (act='INSERT' and w is null) or (act='UPDATE' and (q is null or w is null)) then continue; end if;
     polname:='authz_'||lower(act);
     execute format('drop policy if exists %I on public.%I',polname,r.tablename);
     if act='SELECT' then execute format('create policy %I on public.%I as permissive for select to authenticated using (%s)',polname,r.tablename,q);
     elsif act='INSERT' then execute format('create policy %I on public.%I as permissive for insert to authenticated with check (%s)',polname,r.tablename,w);
     elsif act='UPDATE' then execute format('create policy %I on public.%I as permissive for update to authenticated using (%s) with check (%s)',polname,r.tablename,q,w);
     elsif act='DELETE' then execute format('create policy %I on public.%I as permissive for delete to authenticated using (%s)',polname,r.tablename,q); end if;
   end loop;
   for p in select policyname from pg_policies where schemaname='public' and tablename=r.tablename and permissive='PERMISSIVE' and roles=ARRAY['authenticated']::name[] and policyname not like 'authz_%' loop
     execute format('drop policy %I on public.%I',p.policyname,r.tablename);
   end loop;
 end loop;
end $$;
