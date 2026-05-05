-- Create the rsvps table for wedding RSVP submissions
create table rsvps (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  co_attendees text,
  guest_side text,
  phone text,
  email text,
  postal_code text,
  address text,
  attending boolean not null,
  guest_count integer default 1,
  dietary_restrictions text,
  message text,
  created_at timestamptz default now()
);

-- Allow anonymous inserts only
alter table rsvps enable row level security;
create policy "Allow anonymous insert" on rsvps for insert to anon with check (true);
-- View via Supabase dashboard (authenticated) — no select policy for anon
