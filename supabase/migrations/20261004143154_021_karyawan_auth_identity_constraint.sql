do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conrelid='public.karyawan'::regclass
      and conname='fk_karyawan_auth_user_id'
  ) then
    alter table public.karyawan
      add constraint fk_karyawan_auth_user_id
      foreign key (auth_user_id) references auth.users(id)
      on delete set null
      not valid;
  end if;
end $$;

alter table public.karyawan validate constraint fk_karyawan_auth_user_id;

-- The canonical partial unique index `uq_karyawan_auth_user` already exists in the base schema.
