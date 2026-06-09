-- SmarterFlow Kanban — Supabase schema
-- Run in: Supabase dashboard → SQL Editor → New query

create table if not exists cards (
  id          text primary key,
  client_id   text not null,
  col         text not null check (col in ('todo', 'inprogress', 'done')),
  title       text not null default '',
  note        text not null default '',
  pri         text not null default 'med' check (pri in ('high', 'med', 'low')),
  start_date  text not null default '',
  start_time  text not null default '',
  end_date    text not null default '',
  end_time    text not null default '',
  sort_order  integer not null default 0,
  updated_at  timestamptz not null default now()
);

create index if not exists cards_client_col on cards (client_id, col, sort_order);

-- Public read/write (single-user tool, no auth needed)
alter table cards enable row level security;
create policy "public_all" on cards for all using (true) with check (true);

-- Auto-update updated_at on every write
create or replace function set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;

create trigger cards_updated_at
  before update on cards
  for each row execute procedure set_updated_at();
