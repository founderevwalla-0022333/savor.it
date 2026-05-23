"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, Share2, Heart, Bookmark, Eye, ArrowRight, Star, ExternalLink, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { setups, products, formatPrice } from "@/data";
import { useWishlist } from "@/context/WishlistContext";

export default function SetupDetailPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const { isSetupSaved, toggleSetup, addToRecentlyViewed, isProductSaved, toggleProduct } = useWishlist();

  // Find setup by slug or ID
  const setup = setups.find(
    (s) => s.slug === slug || s.id.toString() === slug
  ) || setups[0]; // fallback

  const saved = isSetupSaved(setup.id);

  // Track page view in Recently Viewed
  useEffect(() => {
    if (setup) {
      addToRecentlyViewed({
        id: setup.id,
        type: "setup",
        slug: setup.slug,
        title: setup.title,
        estimatedCost: setup.estimatedCost,
        image: setup.image
      });
    }
  }, [setup, addToRecentlyViewed]);

  // Load products in this setup
  const setupProducts = products.filter((p) => setup.productIds.includes(p.id));

  // Load related setups
  const relatedSetups = setups.filter((s) => s.id !== setup.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FCFBF9] pb-24 md:pb-36 animate-fade-in select-none">
      
      {/* 1. TOP STICKY BAR */}
      <div className="max-w-[1040px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 bg-[#FCFBF9]/80 backdrop-blur-xl z-30 border-b border-[#E8E6E0]/30">
        <Link href="/" className="p-2.5 bg-white border border-[#E8E6E0] rounded-full hover:bg-[#FAF9F6] transition-all shadow-inset-subtle">
          <ChevronLeft className="w-4 h-4 text-[#141414]" strokeWidth={1.5} />
        </Link>
        <span className="text-[9px] font-bold tracking-widest text-[#2E5A27] uppercase flex items-center gap-1.5 bg-[#EBF2EB] border border-[#2E5A27]/20 px-3.5 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5 fill-[#2E5A27]/10" /> BLUEPRINT SPECIFICATION
        </span>
        <div className="flex items-center gap-2.5">
          <button className="p-2.5 bg-white border border-[#E8E6E0] rounded-full hover:bg-[#FAF9F6] transition-all shadow-inset-subtle">
            <Share2 className="w-4 h-4 text-[#141414]" strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => toggleSetup(setup.id)}
            className="p-2.5 bg-white border border-[#E8E6E0] rounded-full hover:bg-[#FAF9F6] transition-all shadow-inset-subtle"
          >
            <Heart className={cn("w-4 h-4 transition-colors duration-300", saved ? "fill-red-500 text-red-500" : "text-[#141414]")} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="max-w-[760px] mx-auto px-4 pt-6 space-y-10 md:space-y-12">
        
        {/* 2. DESCRIPTION & TITLE */}
        <div className="space-y-3.5">
          <div className="flex items-center gap-2 pt-2">
            <span className="text-[9px] font-bold text-[#2E5A27] uppercase tracking-widest bg-[#2E5A27]/10 px-3 py-1 rounded-md">
              {setup.style} Setup
            </span>
            <span className="text-[9px] font-bold text-[#8E8D88] uppercase tracking-widest">
              {setupProducts.length} Tagged Elements
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-serif text-[#141414] leading-tight">
            {setup.title}
          </h1>
          
          <div className="flex items-center gap-3 pt-2">
            <img src={setup.creator.avatar} alt={setup.creator.name} className="w-7 h-7 rounded-full object-cover border border-[#E8E6E0]" />
            <span className="text-xs font-semibold text-[#777672]">Shared by {setup.creator.name}</span>
            <span className="text-xs text-[#E8E6E0]">·</span>
            <span className="text-xs text-[#777672] flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {setup.views} views</span>
          </div>
        </div>

        {/* 3. HERO IMAGE */}
        <div className="relative rounded-[36px] overflow-hidden shadow-premium border border-[#E8E6E0]/50 bg-[#FAF9F6]">
          <div className="aspect-[4/3] md:aspect-video w-full">
            <img src={setup.image} alt={setup.title} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 text-[#FAF9F6] bg-black/40 backdrop-blur-md px-4.5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
            Estimated Blueprint Cost: {formatPrice(setup.estimatedCost)}
          </div>
        </div>

        {/* 4. OVERVIEW STORY */}
        <div className="space-y-4 pt-2">
          <h3 className="font-serif text-xl md:text-2xl text-[#141414] leading-tight">Setup Blueprint Narrative</h3>
          <p className="text-xs md:text-sm text-[#777672] leading-relaxed font-light">
            {setup.description} Built intentionally to accommodate long hours of work without introducing physical fatigue or visual clutter. The monitor height has been calibrated perfectly to screen level, and peripherals were hand-selected to meet premium tactile and acoustic standards.
          </p>
        </div>

        {/* 5. PRODUCTS INSIDE THE SETUP */}
        <div className="space-y-6 pt-6 border-t border-[#E8E6E0]/60">
          <h3 className="text-[10px] font-bold text-[#141414] uppercase tracking-widest">Hardware Blueprint Components ({setupProducts.length})</h3>
          
          <div className="space-y-4">
            {setupProducts.map((product) => {
              const savedProduct = isProductSaved(product.id);
              return (
                <div 
                  key={product.id} 
                  className="group bg-white border border-[#E8E6E0]/45 p-4 rounded-[28px] flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:shadow-premium"
                >
                  <Link href={`/product/${product.slug}`} className="flex items-center gap-4 flex-1">
                    <div className="w-16 h-16 bg-[#FAF9F6] rounded-xl flex items-center justify-center p-2 border border-[#E8E6E0]/30 shrink-0 overflow-hidden">
                      <img src={product.image} alt={product.name} className="max-h-full object-contain" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[8px] uppercase tracking-widest text-[#8E8D88] font-bold block">{product.category}</span>
                      <h4 className="font-bold text-xs text-[#141414] group-hover:text-[#2E5A27] transition-colors truncate mt-0.5">{product.name}</h4>
                      <p className="text-[10px] text-[#777672] font-light truncate mt-0.5">{product.specs[0]}</p>
                    </div>
                  </Link>

                  <div className="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-[#FAF9F6]">
                    <div className="text-left md:text-right shrink-0">
                      <span className="text-xs font-bold text-[#141414] block">{formatPrice(product.price)}</span>
                      <span className="text-[9px] text-[#2E5A27] font-bold">Amazon Verified ⚡</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => toggleProduct(product.id)}
                        className="w-9 h-9 rounded-full border border-[#E8E6E0] flex items-center justify-center text-red-500 hover:bg-[#FAF9F5] transition-colors"
                      >
                        <Heart className={cn("w-4 h-4 transition-colors duration-300", savedProduct ? "fill-red-500" : "text-[#777672]")} strokeWidth={1.5} />
                      </button>
                      
                      <a 
                        href={product.affiliateLinks?.amazon || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#141414] text-white py-2.5 px-4.5 rounded-full text-[10px] tracking-wider uppercase font-bold flex items-center gap-1 hover:bg-[#2E5A27] transition-all shadow-sm"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6. RELATED WORKSPACES */}
        <div className="space-y-6 pt-6 border-t border-[#E8E6E0]/60">
          <h3 className="text-[10px] font-bold text-[#141414] uppercase tracking-widest">More Setups You'll Love</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedSetups.map((s) => {
              const savedSetup = isSetupSaved(s.id);
              return (
                <div key={s.id} className="group bg-white border border-[#E8E6E0]/40 rounded-[24px] overflow-hidden hover:shadow-premium transition-all duration-300">
                  <div className="relative aspect-video">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" />
                    <button 
                      onClick={() => toggleSetup(s.id)}
                      className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center text-[#141414]"
                    >
                      <Heart className={cn("w-3.5 h-3.5 transition-colors duration-300", savedSetup ? "fill-red-500 text-red-500" : "")} strokeWidth={1.5} />
                    </button>
                  </div>
                  <div className="p-4 space-y-1">
                    <Link href={`/setup/${s.slug}`} className="block">
                      <h4 className="font-bold text-[11px] text-[#141414] group-hover:text-[#2E5A27] transition-colors truncate">{s.title}</h4>
                    </Link>
                    <div className="flex items-center justify-between text-[10px] text-[#8E8D88] pt-1">
                      <span>By {s.creator.name}</span>
                      <span className="font-bold text-[#141414]">{formatPrice(s.estimatedCost)}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
