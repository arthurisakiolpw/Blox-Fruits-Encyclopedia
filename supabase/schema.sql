-- Optional future data backend. Run in Supabase SQL Editor.
create table if not exists public.entries (id bigint generated always as identity primary key,slug text unique not null,category text not null,name_th text not null,name_en text not null,description_th text default '',description_en text default '',icon text default '📚',created_at timestamptz default now());
alter table public.entries enable row level security;
create policy "Public read entries" on public.entries for select using (true);
-- Do not enable public write access. Add authenticated admin roles later.
