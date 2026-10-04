alter table public.hris_users
  add column if not exists auth_user_id uuid references auth.users(id) on delete set null;

create unique index if not exists uq_hris_users_auth_user_id
  on public.hris_users(auth_user_id)
  where auth_user_id is not null;

update public.hris_users h
set auth_user_id=u.id
from auth.users u
where h.auth_user_id is null
  and lower(trim(h.email))=lower(trim(u.email));

create or replace function public.handle_new_auth_user()
returns trigger
language plpgsql
security definer
set search_path=public,pg_temp
as $$
begin
  insert into public.hris_users(email,nama,role,status,auth_user_id)
  values (new.email,coalesce(new.raw_user_meta_data->>'nama',split_part(coalesce(new.email,''),'@',1)),'Karyawan','Aktif',new.id)
  on conflict (email) do update
    set auth_user_id=coalesce(public.hris_users.auth_user_id,excluded.auth_user_id);
  return new;
end $$;

revoke execute on function public.handle_new_auth_user() from public,anon,authenticated;

create or replace function public.hris_claim_employee_account()
returns boolean
language plpgsql
security definer
set search_path=public,pg_temp
as $$
declare
  v_user uuid:=auth.uid();
  v_email text:=lower(trim(coalesce(auth.jwt()->>'email','')));
  v_count integer;
  v_employee_id uuid;
begin
  if v_user is null or v_email='' then return false; end if;
  select count(*),min(id) into v_count,v_employee_id
  from public.karyawan
  where auth_user_id is null
    and lower(trim(coalesce(email,'')))=v_email;
  if v_count<>1 or v_employee_id is null then return false; end if;
  update public.karyawan set auth_user_id=v_user where id=v_employee_id and auth_user_id is null;
  return found;
end $$;

revoke all on function public.hris_claim_employee_account() from public,anon;
grant execute on function public.hris_claim_employee_account() to authenticated;

create or replace function public.hris_my_role()
returns text
language sql
stable
security definer
set search_path=public,pg_temp
as $$
  select role from public.hris_users
  where status='Aktif'
    and (auth_user_id=auth.uid() or lower(trim(email))=lower(trim(coalesce(auth.jwt()->>'email',''))))
  order by (auth_user_id=auth.uid()) desc
  limit 1;
$$;

revoke execute on function public.hris_my_role() from public,anon;
grant execute on function public.hris_my_role() to authenticated;
