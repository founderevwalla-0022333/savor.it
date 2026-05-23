"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, Grid, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { categories, products } from "@/data";

// Custom icons / Emojis / Backgrounds for categories to look extremely premium
const CATEGORY_STYLES = {
  monitors: { bg: "bg-[#EDF6F8] border-[#CDE5EB]", text: "text-[#1E6B7B]", emoji: "🖥️", tagline: "4K & Ultrawides" },
  keyboards: { bg: "bg-[#FAF0F8] border-[#ECD0E7]", text: "text-[#86307B]", emoji: "⌨️", tagline: "Custom & Mechanical" },
  mouse: { bg: "bg-[#F3EFFC] border-[#E0D4FA]", text: "text-[#552BBE]", emoji: "🖱️", tagline: "Ergonomic & Light" },
  deskmats: { bg: "bg-[#FDF6ED] border-[#F2E0C9]", text: "text-[#9A6229]", emoji: "🪵", tagline: "Organic Felt & Wool" },
  lighting: { bg: "bg-[#FAF6F0] border-[#EADEC9]", text: "text-[#78593E]", emoji: "💡", tagline: "Monitor Bars & Bulbs" },
  audio: { bg: "bg-[#F0F7F4] border-[#D0E5DB]", text: "text-[#2D5A27]", emoji: "🔊", tagline: "Hi-Fi Studio Speakers" },
  furniture: { bg: "bg-[#F7F8FA] border-[#E2E8F0]", text: "text-[#4A5568]", emoji: "🪑", tagline: "Standing Desks & Chairs" },
  accessories: { bg: "bg-white border-[#EAEAEA]", text: "text-black", emoji: "🔌", tagline: "Hubs & Cable Management" }
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Editorial Header */}
      <div className="px-6 lg:px-10 pt-10 pb-6 max-w-5xl mx-auto space-y-1 border-b border-[#EAEAEA]/60">
        <span className="text-[10px] font-bold tracking-widest text-[#2E7D32] uppercase flex items-center gap-1.5">
          <Grid className="w-3.5 h-3.5 fill-[#2E7D32]/10" /> Blueprint Categories
        </span>
        <h1 className="text-3xl lg:text-4xl font-serif font-bold text-[#111111]">Explore Gear Categories</h1>
        <p className="text-xs text-[#888888] max-w-sm">Every element of a modern workspace verified for design cohesion.</p>
      </div>

      <div className="px-6 lg:px-10 py-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const count = products.filter((p) => p.category === cat.key).length;
            const style = CATEGORY_STYLES[cat.key] || CATEGORY_STYLES.accessories;
            
            return (
              <Link 
                key={cat.key} 
                href={`/category/${cat.key}`}
                className={cn(
                  "p-6 rounded-[32px] border flex flex-col justify-between h-[200px] transition-all duration-300 hover:-translate-y-1 hover:shadow-soft group",
                  style.bg
                )}
              >
                <div className="space-y-2">
                  <span className="text-3xl block">{style.emoji}</span>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#111111]">{cat.name}</h3>
                    <p className="text-[10px] text-[#888888] mt-0.5">{style.tagline}</p>
                  </div>
                </div>

                <div className="flex items-end justify-between pt-4 border-t border-black/5">
                  <span className="text-xs font-bold text-[#111111]">{count} tagged gear</span>
                  <span className="w-8 h-8 rounded-full bg-white/80 border border-black/5 flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
