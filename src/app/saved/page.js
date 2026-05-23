"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Bookmark, Heart, Grid, ShoppingBag, Eye, Trash2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWishlist } from "@/context/WishlistContext";
import { setups, products, formatPrice } from "@/data";

export default function SavedPage() {
  const { savedSetups, savedProducts, toggleSetup, toggleProduct } = useWishlist();
  const [activeTab, setActiveTab] = useState("setups");

  const mySavedSetups = setups.filter((s) => savedSetups.includes(s.id));
  const mySavedProducts = products.filter((p) => savedProducts.includes(p.id));

  return (
    <div className="min-h-screen bg-[#FCFBF9] pb-24 md:pb-36 animate-fade-in select-none">
      
      {/* Editorial Moodboard Header */}
      <div className="px-4 md:px-8 pt-10 pb-8 max-w-[1040px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-[#E8E6E0]/60">
        <div className="space-y-2">
          <span className="text-[8px] font-bold tracking-widest text-[#2E5A27] uppercase flex items-center gap-2">
            <Bookmark className="w-3.5 h-3.5 fill-[#2E5A27]/10" /> PERSONAL CURATION VAULT
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-[#141414] leading-none">Saved Inspiration</h1>
          <p className="text-xs text-[#777672] max-w-sm font-light leading-relaxed">
            Your private atmospheric gallery of verified blueprints, aesthetic items, and design details.
          </p>
        </div>

        {/* Tactile Tab Controller */}
        <div className="flex bg-[#F0EFEA] p-1 rounded-2xl border border-[#E8E6E0]/50 self-start md:self-auto shadow-inset-subtle">
          <button
            onClick={() => setActiveTab("setups")}
            className={cn(
              "px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2",
              activeTab === "setups" 
                ? "bg-white text-[#141414] shadow-[0_2px_8px_rgba(20,20,20,0.04)]" 
                : "text-[#777672] hover:text-[#141414]"
            )}
          >
            <Grid className="w-3.5 h-3.5" strokeWidth={1.5} />
            Setups ({mySavedSetups.length})
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={cn(
              "px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2",
              activeTab === "products" 
                ? "bg-white text-[#141414] shadow-[0_2px_8px_rgba(20,20,20,0.04)]" 
                : "text-[#777672] hover:text-[#141414]"
            )}
          >
            <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
            Gears ({mySavedProducts.length})
          </button>
        </div>
      </div>

      {/* Main Grid View */}
      <div className="px-4 md:px-8 py-10 max-w-[1040px] mx-auto">
        
        {/* Setups Tab */}
        {activeTab === "setups" && (
          <>
            {mySavedSetups.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mySavedSetups.map((setup) => (
                  <div key={setup.id} className="group bg-[#FAF9F6] rounded-[36px] border border-[#E8E6E0]/60 overflow-hidden hover:shadow-premium transition-all duration-500">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF9F6]">
                      <img src={setup.image} alt={setup.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102" />
                      
                      {/* Floating Trash Action */}
                      <button 
                        onClick={() => toggleSetup(setup.id)}
                        className="absolute top-4 right-4 w-9.5 h-9.5 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white text-red-500 shadow-sm transition-all active:scale-90"
                      >
                        <Heart className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                    <div className="p-6 md:p-8 space-y-4">
                      <span className="text-[9px] font-bold text-[#2E5A27] uppercase tracking-widest">{setup.style} SETUP</span>
                      <Link href={`/setup/${setup.slug}`} className="block">
                        <h3 className="font-serif font-semibold text-lg md:text-xl text-[#141414] group-hover:text-[#2E5A27] transition-colors leading-tight">{setup.title}</h3>
                      </Link>
                      <div className="flex items-center justify-between text-xs pt-4 border-t border-[#E8E6E0]/60">
                        <span className="flex items-center gap-1.5 text-[#8E8D88]"><Eye className="w-3.5 h-3.5" /> {setup.views} views</span>
                        <span className="font-bold text-[#141414]">{formatPrice(setup.estimatedCost)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Emotional Premium Empty State */
              <div className="max-w-md mx-auto text-center py-16 px-6 space-y-8 animate-fade-in">
                {/* CSS Abstract Illustration of Moodboards */}
                <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF5EE] to-[#EBF2EB] rounded-full scale-100 ambient-glow opacity-80 z-0"></div>
                  <div className="absolute w-24 h-24 bg-white rounded-[24px] shadow-premium border border-[#E8E6E0]/60 -rotate-6 z-10 flex items-center justify-center">
                    <Grid className="w-8 h-8 text-[#8E8D88] opacity-60" strokeWidth={1.2} />
                  </div>
                  <div className="absolute w-20 h-20 bg-[#FAF9F6] rounded-[20px] shadow-float border border-[#E8E6E0]/50 rotate-12 z-20 flex items-center justify-center top-6 left-12">
                    <Heart className="w-6 h-6 text-[#2E5A27] opacity-80" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif font-normal text-xl md:text-2xl text-[#141414]">Begin Your Workspace Aesthetic</h3>
                  <p className="text-xs text-[#777672] leading-relaxed max-w-sm mx-auto font-light">
                    Build a gorgeous visual blueprint library. Collect natural wood designs, deep focus dens, and Nordic workspaces to inspire your own daily environment.
                  </p>
                </div>

                <Link href="/explore" className="bg-[#141414] text-white px-7 py-3 rounded-full text-[10px] tracking-wider uppercase font-bold inline-flex items-center gap-2 hover:bg-[#2E5A27] transition-all duration-300 shadow-premium active:scale-95">
                  Discover bluePrints <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </>
        )}

        {/* Products Tab */}
        {activeTab === "products" && (
          <>
            {mySavedProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {mySavedProducts.map((product) => (
                  <div key={product.id} className="group bg-white border border-[#E8E6E0]/40 rounded-[28px] p-3.5 flex flex-col justify-between hover:shadow-premium transition-all duration-500">
                    <div className="relative aspect-square rounded-2xl bg-[#FAF9F6] p-6 flex items-center justify-center mb-3">
                      <img src={product.image} alt={product.name} className="max-h-[85%] object-contain group-hover:scale-104 transition-transform duration-500" />
                      <button 
                        onClick={() => toggleProduct(product.id)}
                        className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-red-500 shadow-sm transition-all active:scale-90"
                      >
                        <Heart className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                    <div className="space-y-1.5 px-1.5">
                      <span className="text-[8px] uppercase font-bold tracking-widest text-[#8E8D88] block">{product.category}</span>
                      <Link href={`/product/${product.slug}`} className="block">
                        <h4 className="font-bold text-[11px] text-[#141414] group-hover:text-[#2E5A27] transition-colors line-clamp-1 mt-0.5">{product.name}</h4>
                      </Link>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#FAF9F6]">
                        <span className="text-[11px] font-bold text-[#141414]">{formatPrice(product.price)}</span>
                        <a href={product.affiliateLinks?.amazon || "#"} target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold text-[#2E5A27] hover:underline uppercase tracking-wider">Buy Link</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Emotional Premium Empty State */
              <div className="max-w-md mx-auto text-center py-16 px-6 space-y-8 animate-fade-in">
                {/* CSS Abstract Illustration of Gears */}
                <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF5EE] to-[#EBF2EB] rounded-full scale-100 ambient-glow opacity-80 z-0"></div>
                  <div className="absolute w-24 h-24 bg-white rounded-[24px] shadow-premium border border-[#E8E6E0]/60 rotate-12 z-10 flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-[#8E8D88] opacity-60" strokeWidth={1.2} />
                  </div>
                  <div className="absolute w-20 h-20 bg-[#FAF9F6] rounded-[20px] shadow-float border border-[#E8E6E0]/50 -rotate-6 z-20 flex items-center justify-center top-6 right-12">
                    <Heart className="w-6 h-6 text-[#2E5A27] opacity-85" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif font-normal text-xl md:text-2xl text-[#141414]">Curate Your Ergonomic Setup</h3>
                  <p className="text-xs text-[#777672] leading-relaxed max-w-sm mx-auto font-light">
                    Collect acoustic soundbars, wireless custom mechanical keyboards, and premium monitor arms. Tap the heart icon to save products into your physical design catalog.
                  </p>
                </div>

                <Link href="/" className="bg-[#141414] text-white px-7 py-3 rounded-full text-[10px] tracking-wider uppercase font-bold inline-flex items-center gap-2 hover:bg-[#2E5A27] transition-all duration-300 shadow-premium active:scale-95">
                  Browse Components <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}
