-- ============================================================
-- SUPABASE SETUP — Châm Portfolio
-- Chạy script này trong Supabase SQL Editor
-- https://supabase.com/dashboard → SQL Editor → New query
-- ============================================================

-- Tạo bảng lưu toàn bộ data của web
create table if not exists site_data (
  key        text primary key,
  value      jsonb not null,
  updated_at timestamptz default now()
);

-- Enable Row Level Security
alter table site_data enable row level security;

-- Policy: Ai cũng có thể đọc (public read)
create policy "Public read"
  on site_data for select
  using (true);

-- Policy: Ai cũng có thể ghi (admin đã có password gate riêng)
create policy "Public write"
  on site_data for all
  using (true)
  with check (true);

-- ============================================================
-- Seed data ban đầu (chạy sau khi tạo bảng)
-- Chỉ insert nếu chưa có — KHÔNG overwrite data đang tồn tại
-- ============================================================

insert into site_data (key, value) values
  ('works',   '[]'::jsonb),
  ('posts',   '[]'::jsonb),
  ('career',  '[]'::jsonb),
  ('hero',    '{}'::jsonb),
  ('about',   '{}'::jsonb),
  ('contact', '{}'::jsonb)
on conflict (key) do nothing;
