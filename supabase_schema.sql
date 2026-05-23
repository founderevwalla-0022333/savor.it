-- =================================================================================
-- The Setup Vault - Supabase PostgreSQL Schema
-- Run this entire script in your Supabase SQL Editor.
-- =================================================================================

-- 1. Create Roles & Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create Tables

-- Categories
CREATE TABLE public.categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    icon TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tags (Moods, Aesthetics, Personalities)
CREATE TABLE public.tags (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('mood', 'aesthetic', 'personality', 'room_type', 'lighting')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Products
CREATE TABLE public.products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    price NUMERIC(10, 2) DEFAULT 0,
    mrp NUMERIC(10, 2),
    discount INTEGER DEFAULT 0,
    rating NUMERIC(3, 2) DEFAULT 0,
    reviews INTEGER DEFAULT 0,
    sold INTEGER DEFAULT 0,
    image_url TEXT,
    description TEXT,
    specs JSONB DEFAULT '[]'::jsonb, -- Array of strings
    affiliate_links JSONB DEFAULT '{}'::jsonb, -- { amazon: url, flipkart: url, brand: url }
    seo_meta_title TEXT,
    seo_meta_desc TEXT,
    seo_og_image TEXT,
    status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Product Tags (Many-to-Many)
CREATE TABLE public.product_tags (
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    tag_id UUID REFERENCES public.tags(id) ON DELETE CASCADE,
    PRIMARY KEY (product_id, tag_id)
);

-- Setups
CREATE TABLE public.setups (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    cover_image TEXT,
    gallery JSONB DEFAULT '[]'::jsonb, -- Array of image URLs
    category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    views INTEGER DEFAULT 0,
    saves INTEGER DEFAULT 0,
    estimated_cost NUMERIC(10, 2) DEFAULT 0,
    creator_name TEXT,
    creator_avatar TEXT,
    seo_meta_title TEXT,
    seo_meta_desc TEXT,
    seo_og_image TEXT,
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'published', 'archived')),
    publish_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Setup Tags (Many-to-Many)
CREATE TABLE public.setup_tags (
    setup_id UUID REFERENCES public.setups(id) ON DELETE CASCADE,
    tag_id UUID REFERENCES public.tags(id) ON DELETE CASCADE,
    PRIMARY KEY (setup_id, tag_id)
);

-- Setup Products (Many-to-Many)
CREATE TABLE public.setup_products (
    setup_id UUID REFERENCES public.setups(id) ON DELETE CASCADE,
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    position_x NUMERIC(5, 2), -- Optional for mapping hotspots
    position_y NUMERIC(5, 2), -- Optional for mapping hotspots
    PRIMARY KEY (setup_id, product_id)
);

-- Affiliates / Clicks Analytics
CREATE TABLE public.affiliate_clicks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    platform TEXT NOT NULL, -- e.g., 'amazon', 'flipkart', 'brand'
    source_url TEXT,
    clicked_at TIMESTAMPTZ DEFAULT NOW()
);

-- Homepage Blocks (Visual Builder)
CREATE TABLE public.homepage_blocks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    type TEXT NOT NULL, -- e.g., 'hero', 'trending_products', 'spotlight', 'mood_board'
    title TEXT,
    subtitle TEXT,
    content JSONB, -- Stores specific config (e.g., product IDs, setup IDs)
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Row Level Security (RLS)
-- For now, enabling open read access for the public frontend, but restricting writes.
-- (Assumes anon key for reads, service role or authenticated admin for writes)

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.setups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.setup_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.setup_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.affiliate_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.homepage_blocks ENABLE ROW LEVEL SECURITY;

-- Read Access Policies (Public can read published data)
CREATE POLICY "Public read categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Public read tags" ON public.tags FOR SELECT USING (true);
CREATE POLICY "Public read published products" ON public.products FOR SELECT USING (status = 'published');
CREATE POLICY "Public read product_tags" ON public.product_tags FOR SELECT USING (true);
CREATE POLICY "Public read published setups" ON public.setups FOR SELECT USING (status = 'published');
CREATE POLICY "Public read setup_tags" ON public.setup_tags FOR SELECT USING (true);
CREATE POLICY "Public read setup_products" ON public.setup_products FOR SELECT USING (true);
CREATE POLICY "Public read homepage_blocks" ON public.homepage_blocks FOR SELECT USING (is_active = true);
CREATE POLICY "Public insert affiliate_clicks" ON public.affiliate_clicks FOR INSERT WITH CHECK (true);
