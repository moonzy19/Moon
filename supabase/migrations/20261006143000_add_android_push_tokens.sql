create table if not exists public.hris_push_tokens (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  token text not null,
  platform text not null default 'android' check (platform in ('android','ios','web')),
  app_id text,
  is_active boolean not null default true,
  last_seen_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, token)
);

create index if not exists idx_hris_push_tokens_user_active
  on public.hris_push_tokens(user_id, is_active);

create index if not exists idx_hris_push_tokens_token
  on public.hris_push_tokens(token);

alter table public.hris_push_tokens enable row level security;

drop policy if exists push_tokens_select_own on public.hris_push_tokens;
create policy push_tokens_select_own
on public.hris_push_tokens
for select
 to authenticated
using (user_id = auth.uid());

drop policy if exists push_tokens_insert_own on public.hris_push_tokens;
create policy push_tokens_insert_own
on public.hris_push_tokens
for insert
 to authenticated
with check (user_id = auth.uid());

drop policy if exists push_tokens_update_own on public.hris_push_tokens;
create policy push_tokens_update_own
on public.hris_push_tokens
for update
 to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists push_tokens_delete_own on public.hris_push_tokens;
create policy push_tokens_delete_own
on public.hris_push_tokens
for delete
 to authenticated
using (user_id = auth.uid());

grant select, insert, update, delete on public.hris_push_tokens to authenticated;

create or replace function public.hris_touch_push_token()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at := now();
  new.last_seen_at := now();
  return new;
end;
$$;

revoke all on function public.hris_touch_push_token() from public, anon;
drop trigger if exists trg_hris_push_tokens_touch on public.hris_push_tokens;
create trigger trg_hris_push_tokens_touch
before update on public.hris_push_tokens
for each row execute function public.hris_touch_push_token();

notify pgrst, 'reload schema';

