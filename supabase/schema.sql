-- ADMEEC — schéma Supabase complet
-- À exécuter dans Supabase SQL Editor.
-- Ce script crée les tables, les index, les politiques RLS et les politiques Storage nécessaires.

create extension if not exists "pgcrypto";

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  summary text,
  content text,
  main_verse text,
  category text,
  author text,
  image_url text,
  is_message_of_day boolean default false,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.videos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique,
  description text,
  url text,
  thumbnail_url text,
  category text,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  published_at timestamptz default now(),
  created_at timestamptz not null default now()
);

create table if not exists public.audios (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique,
  description text,
  url text,
  thumbnail_url text,
  category text,
  duration text,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  published_at timestamptz default now(),
  created_at timestamptz not null default now()
);

create table if not exists public.ressources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique,
  description text,
  url text,
  thumbnail_url text,
  category text,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  published_at timestamptz default now(),
  created_at timestamptz not null default now()
);

create table if not exists public.lives (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  start_at timestamptz,
  end_at timestamptz,
  location text,
  online_url text,
  status text not null default 'open' check (status in ('open', 'closed', 'finished', 'cancelled')),
  created_at timestamptz not null default now()
);

create table if not exists public.seminaires (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  start_at timestamptz,
  end_at timestamptz,
  location text,
  online_url text,
  status text not null default 'open' check (status in ('open', 'closed', 'finished', 'cancelled')),
  created_at timestamptz not null default now()
);

create table if not exists public.groupes (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  start_at timestamptz,
  end_at timestamptz,
  location text,
  online_url text,
  status text not null default 'open' check (status in ('open', 'closed', 'finished', 'cancelled')),
  created_at timestamptz not null default now()
);

create table if not exists public.intervenants (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  bio text,
  photo_url text,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now()
);

create table if not exists public.temoignages (
  id uuid primary key default gen_random_uuid(),
  name text,
  country text,
  message text not null,
  category text,
  status text not null default 'pending' check (status in ('pending', 'published', 'archived')),
  created_at timestamptz not null default now()
);

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  country text,
  subject text,
  message text not null,
  status text not null default 'new' check (status in ('new', 'read', 'closed')),
  created_at timestamptz not null default now()
);

create table if not exists public.demandes_priere (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  country text,
  subject text,
  message text not null,
  status text not null default 'new' check (status in ('new', 'read', 'closed')),
  created_at timestamptz not null default now()
);

create table if not exists public.demandes_accompagnement (
  id uuid primary key default gen_random_uuid(),
  type text default 'spirituel',
  name text not null,
  email text,
  phone text,
  country text,
  subject text,
  message text not null,
  status text not null default 'new' check (status in ('new', 'read', 'closed')),
  created_at timestamptz not null default now()
);

create index if not exists idx_messages_status_published on public.messages(status, published_at desc);
create index if not exists idx_videos_status_published on public.videos(status, published_at desc);
create index if not exists idx_audios_status_published on public.audios(status, published_at desc);
create index if not exists idx_ressources_status_published on public.ressources(status, published_at desc);

alter table public.messages enable row level security;
alter table public.videos enable row level security;
alter table public.audios enable row level security;
alter table public.ressources enable row level security;
alter table public.lives enable row level security;
alter table public.seminaires enable row level security;
alter table public.groupes enable row level security;
alter table public.intervenants enable row level security;
alter table public.temoignages enable row level security;
alter table public.contacts enable row level security;
alter table public.demandes_priere enable row level security;
alter table public.demandes_accompagnement enable row level security;

-- Lecture publique des contenus publiés.
do $$ begin
  create policy "Lecture publique messages publies" on public.messages for select using (status = 'published');
exception when duplicate_object then null; end $$;
do $$ begin
  create policy "Lecture publique videos publiees" on public.videos for select using (status = 'published');
exception when duplicate_object then null; end $$;
do $$ begin
  create policy "Lecture publique audios publies" on public.audios for select using (status = 'published');
exception when duplicate_object then null; end $$;
do $$ begin
  create policy "Lecture publique ressources publiees" on public.ressources for select using (status = 'published');
exception when duplicate_object then null; end $$;
do $$ begin
  create policy "Lecture publique lives" on public.lives for select using (status in ('open', 'finished'));
exception when duplicate_object then null; end $$;
do $$ begin
  create policy "Lecture publique seminaires" on public.seminaires for select using (status in ('open', 'finished'));
exception when duplicate_object then null; end $$;
do $$ begin
  create policy "Lecture publique groupes" on public.groupes for select using (status = 'open');
exception when duplicate_object then null; end $$;
do $$ begin
  create policy "Lecture publique intervenants" on public.intervenants for select using (status = 'published');
exception when duplicate_object then null; end $$;
do $$ begin
  create policy "Lecture publique temoignages" on public.temoignages for select using (status = 'published');
exception when duplicate_object then null; end $$;

-- Les formulaires publics passent par des API serveur avec service_role.
-- Le service_role contourne RLS. Ne publiez jamais SUPABASE_SERVICE_ROLE_KEY côté navigateur.

-- Bucket public pour les créations HTML5 libres.
insert into storage.buckets (id, name, public)
values ('creations-libres', 'creations-libres', true)
on conflict (id) do update set public = true;

-- Autoriser la lecture/listing du bucket des créations.
do $$ begin
  create policy "Lecture publique creations-libres" on storage.objects
  for select using (bucket_id = 'creations-libres');
exception when duplicate_object then null; end $$;

-- Les uploads dans Storage doivent être faits par le tableau de bord Supabase ou par un outil admin sécurisé.
