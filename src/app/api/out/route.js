import { NextResponse } from "next/server";
// import { supabase } from "@/lib/supabase"; // Uncomment when supabase is configured

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const productId = searchParams.get("pid");
  const platform = searchParams.get("platform");

  if (!url) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Record click asynchronously if productId and platform are provided
  if (productId && platform) {
    try {
      // await supabase.from('affiliate_clicks').insert([
      //   { product_id: productId, platform: platform, source_url: request.headers.get('referer') }
      // ]);
      console.log(`Tracked click for Product ${productId} on ${platform}`);
    } catch (error) {
      console.error("Failed to track click:", error);
    }
  }

  return NextResponse.redirect(url);
}
