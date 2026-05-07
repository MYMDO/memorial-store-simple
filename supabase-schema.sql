-- SQL Schema for Supabase
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/YOUR_PROJECT/sql

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('granite', 'marble')),
  price TEXT NOT NULL,
  emoji TEXT DEFAULT '🪦',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (public read, authenticated write)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Everyone can read products
CREATE POLICY "Public read access" ON products
  FOR SELECT USING (true);

-- Only authenticated users can modify
CREATE POLICY "Authenticated insert" ON products
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated update" ON products
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated delete" ON products
  FOR DELETE USING (auth.role() = 'authenticated');

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE products;

-- Insert sample data
INSERT INTO products (name, category, price, emoji) VALUES
  ('Пам''ятник гранітний ''Ангел''', 'granite', '15 000 грн', '🪦'),
  ('Пам''ятник мармуровий ''Спокій''', 'marble', '18 000 грн', '🪦'),
  ('Пам''ятник гранітний ''Вічність''', 'granite', '22 000 грн', '🪦'),
  ('Пам''ятник мармуровий ''Світла пам''ять''', 'marble', '20 000 грн', '🪦'),
  ('Пам''ятник мармуровий ''Пам''ять''', 'marble', '16 500 грн', '🪦'),
  ('Пам''ятник гранітний ''Слава''', 'granite', '25 000 грн', '🪦'),
  ('Пам''ятник мармуровий ''Любов''', 'marble', '19 000 грн', '🪦'),
  ('Пам''ятник гранітний ''Надія''', 'granite', '17 500 грн', '🪦'),
  ('Пам''ятник гранітний ''Тризуб''', 'granite', '28 000 грн', '🪦');
