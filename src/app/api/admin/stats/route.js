import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Uses service role key for server-side admin reads (bypasses RLS)
// Falls back to anon key if service role not configured
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function GET() {
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Missing Supabase config" }, { status: 500 });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Run all counts in parallel
    const [
      productsRes,
      setupsRes,
      clicksRes,
      categoriesRes,
      publishedProductsRes,
      draftProductsRes,
      publishedSetupsRes,
    ] = await Promise.all([
      supabase.from("products").select("*", { count: "exact", head: true }),
      supabase.from("setups").select("*", { count: "exact", head: true }),
      supabase.from("affiliate_clicks").select("*", { count: "exact", head: true }),
      supabase.from("categories").select("*", { count: "exact", head: true }),
      supabase
        .from("products")
        .select("*", { count: "exact", head: true })
        .eq("status", "published"),
      supabase
        .from("products")
        .select("*", { count: "exact", head: true })
        .eq("status", "draft"),
      supabase
        .from("setups")
        .select("*", { count: "exact", head: true })
        .eq("status", "published"),
    ]);

    // Recent activity — last 5 items across products + setups
    const [recentProductsRes, recentSetupsRes, recentClicksRes] = await Promise.all([
      supabase
        .from("products")
        .select("id, name, status, created_at")
        .order("created_at", { ascending: false })
        .limit(3),
      supabase
        .from("setups")
        .select("id, title, status, created_at")
        .order("created_at", { ascending: false })
        .limit(3),
      supabase
        .from("affiliate_clicks")
        .select("platform, clicked_at, product_id")
        .order("clicked_at", { ascending: false })
        .limit(5),
    ]);

    return NextResponse.json({
      stats: {
        products: productsRes.count ?? 0,
        setups: setupsRes.count ?? 0,
        affiliate_clicks: clicksRes.count ?? 0,
        categories: categoriesRes.count ?? 0,
        published_products: publishedProductsRes.count ?? 0,
        draft_products: draftProductsRes.count ?? 0,
        published_setups: publishedSetupsRes.count ?? 0,
      },
      recent: {
        products: recentProductsRes.data ?? [],
        setups: recentSetupsRes.data ?? [],
        clicks: recentClicksRes.data ?? [],
      },
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
