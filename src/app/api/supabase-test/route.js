import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Check env vars are present
  if (!url || !key) {
    return NextResponse.json(
      {
        connected: false,
        error: "Missing environment variables",
        debug: {
          hasUrl: !!url,
          hasKey: !!key,
        },
      },
      { status: 500 }
    );
  }

  try {
    const supabase = createClient(url, key);

    // Ping by fetching the Supabase version — works even with no tables
    const { data, error } = await supabase
      .from("products")
      .select("count", { count: "exact", head: true });

    if (error && error.code !== "42P01") {
      // 42P01 = table doesn't exist — still means we're connected!
      throw error;
    }

    return NextResponse.json({
      connected: true,
      project_url: url,
      message:
        error?.code === "42P01"
          ? "✅ Connected to Supabase! (products table not created yet — run supabase_schema.sql)"
          : "✅ Connected to Supabase! products table exists.",
      product_count: data ?? 0,
    });
  } catch (err) {
    return NextResponse.json(
      {
        connected: false,
        error: err.message,
        hint: "Check your NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local",
      },
      { status: 500 }
    );
  }
}
