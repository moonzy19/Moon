-- Project by Tirta
-- Sync AI HR Center + HR/Call Center configuration
-- Secrets and production phone values are intentionally NOT stored here.

alter table public.hris_company_settings
  add column if not exists call_center_phone text;

alter table public.hris_company_settings
  add column if not exists call_center_name text;

alter table public.hris_ai_center_settings_v1
  add column if not exists temperature numeric(3,2)
    not null default 0.20;

alter table public.hris_ai_center_settings_v1
  add column if not exists allowed_modules jsonb
    not null default '["assistant","analytics","insights","reports","feedback","recruitment","attendance","turnover","payroll","people"]'::jsonb;

alter table public.hris_ai_center_settings_v1
  add column if not exists updated_by uuid;

insert into public.hris_ai_center_settings_v1
  (id, enabled, provider, model, max_output_tokens)
values
  (1, true, 'openai', 'gpt-6-luna', 1800)
on conflict (id) do nothing;

notify pgrst, 'reload schema';
