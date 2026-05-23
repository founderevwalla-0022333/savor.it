"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, Share2, Heart, Star, Bookmark, ArrowRight, ShieldCheck, CheckCircle2, ShoppingBag, Eye, Cpu, Compass, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { products, setups, formatPrice } from "@/data";
import { useWishlist } from "@/context/WishlistContext";
import { motion } from "framer-motion";

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const { isProductSaved, toggleProduct, addToRecentlyViewed } = useWishlist();

  // Find product by slug or ID
  const product = products.find(
    (p) => p.slug === slug || p.id.toString() === slug
  ) || products[0]; // fallback to first product if not found

  const saved = isProductSaved(product.id);
  const [activeThumb, setActiveThumb] = useState(product.image);
  const [activeTab, setActiveTab] = useState("overview");

  // Track page view in Recently Viewed
  useEffect(() => {
    if (product) {
      setActiveThumb(product.image);
      addToRecentlyViewed({
        id: product.id,
        type: "product",
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.image
      });
    }
  }, [product, addToRecentlyViewed]);

  // Find setups using this product
  const setupsUsingThis = setups.filter((s) => s.productIds.includes(product.id));

  // Similar Products
  const similarProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  // Fallback if no similar products
  const relatedProducts = similarProducts.length > 0 ? similarProducts : products.filter((p) => p.id !== product.id).slice(0, 4);

  // Generate generic thumbnails dynamically
  const thumbnails = [
    product.image,
    "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=200&auto=format&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-[#FCFBF9] relative pb-32 select-none animate-fade-in">
      
      {/* 1. TOP NAV OVERLAY */}
      <div className="max-w-[1040px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 bg-[#FCFBF9]/80 backdrop-blur-xl z-30 border-b border-[#E8E6E0]/30">
        <Link href="/" className="p-2.5 bg-white border border-[#E8E6E0] rounded-full hover:bg-[#FAF9F6] transition-all shadow-inset-subtle">
          <ChevronLeft className="w-4 h-4 text-[#141414]" strokeWidth={1.5} />
        </Link>
        <span className="text-[9px] font-bold tracking-widest text-[#2E5A27] uppercase flex items-center gap-1.5 bg-[#EBF2EB] border border-[#2E5A27]/20 px-3.5 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5 fill-[#2E5A27]/10" /> component detailing
        </span>
        <div className="flex items-center gap-2.5">
          <button className="p-2.5 bg-white border border-[#E8E6E0] rounded-full hover:bg-[#FAF9F6] transition-all shadow-inset-subtle">
            <Share2 className="w-4 h-4 text-[#141414]" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="max-w-[760px] mx-auto px-4 space-y-10 md:space-y-12 pt-6">
        
        {/* 2. APPLE-STYLE CORE SHOWCASE */}
        <section className="space-y-6">
          <div className="relative w-full aspect-square md:aspect-video rounded-[36px] bg-white border border-[#E8E6E0]/45 p-8 md:p-12 flex flex-col items-center justify-center shadow-premium overflow-hidden">
            <motion.img 
              key={activeThumb}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              src={activeThumb} 
              alt={product.name} 
              className="max-h-[70%] object-contain transition-all duration-300 drop-shadow-sm"
            />
            
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <span className="px-3.5 py-1 bg-[#2E5A27]/10 text-[#2E5A27] border border-[#2E5A27]/20 rounded-full text-[8px] font-bold tracking-widest uppercase">
                VERIFIED HARMONY
              </span>
              {product.discount && (
                <span className="px-3 py-1 bg-red-500 text-white rounded-full text-[8px] font-bold tracking-widest uppercase self-start">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            {/* Floating Thumbnails Row */}
            <div className="absolute bottom-6 flex justify-center gap-2 bg-white/70 backdrop-blur-md border border-[#E8E6E0]/40 p-2 rounded-2xl">
              {thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveThumb(thumb)}
                  className={cn(
                    "w-11 h-11 rounded-xl bg-white border p-1 flex items-center justify-center transition-all overflow-hidden shrink-0 active:scale-95",
                    activeThumb === thumb 
                      ? "border-[#2E5A27] ring-2 ring-[#2E5A27]/10" 
                      : "border-[#E8E6E0] hover:border-[#141414]/30"
                  )}
                >
                  <img src={thumb} className="max-h-full object-cover max-w-full rounded-md" alt="" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 3. EDITORIAL DETAILS */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 space-y-4">
            <div className="space-y-2">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#2E5A27]">{product.category}</span>
              <h1 className="text-2xl md:text-3xl font-serif text-[#141414] leading-tight">{product.name}</h1>
              
              <div className="flex items-center gap-2 pt-1 text-xs text-[#777672]">
                <div className="flex items-center text-[#D49E24]"><Star className="w-3.5 h-3.5 fill-current mr-0.5" /></div>
                <span className="font-bold text-[#141414]">{product.rating}</span>
                <span>·</span>
                <span>Curated from {product.reviews} creator logs</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-[9px] font-bold uppercase tracking-widest text-[#141414]">Visual & Acoustic Notes</h3>
              <p className="text-xs text-[#777672] leading-relaxed font-light">{product.description}</p>
            </div>
          </div>

          {/* Value Panel */}
          <div className="md:col-span-5 space-y-4 w-full">
            <div className="p-6 bg-white border border-[#E8E6E0]/45 rounded-3xl space-y-4 shadow-inset-subtle">
              <div className="space-y-1">
                <span className="text-[8px] uppercase font-bold text-[#8E8D88] tracking-widest block">Estimated Value</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-[#141414]">{formatPrice(product.price)}</span>
                  {product.mrp && (
                    <span className="text-xs text-[#8E8D88] line-through">{formatPrice(product.mrp)}</span>
                  )}
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-[#FAF9F6]">
                <div className="flex items-center justify-between text-[9px] font-bold text-[#1E6B7B]">
                  <span>AURA COMPATIBILITY</span>
                  <span>98% MATCH LEVEL</span>
                </div>
                <div className="w-full bg-[#E5F2F4] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#1E6B7B] h-full w-[98%] rounded-full"></div>
                </div>
                <p className="text-[9px] text-[#1E6B7B] leading-relaxed font-light">Optimized visually for Minimal Oak, warm studies, and deep matte black coding environments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SPECIFICATIONS TAB CONTROLLER */}
        <section className="space-y-6 pt-6 border-t border-[#E8E6E0]/60">
          <div className="flex border-b border-[#E8E6E0]/60 pb-2 gap-6">
            {[
              { id: "overview", name: "Curation Highlight" },
              { id: "specs", name: "Specs Log" },
              { id: "setups", name: `In Workspaces (${setupsUsingThis.length})` }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "pb-2 text-[10px] font-bold tracking-widest uppercase transition-colors relative",
                  activeTab === tab.id 
                    ? "text-[#2E5A27]" 
                    : "text-[#8E8D88] hover:text-[#141414]"
                )}
              >
                {tab.name}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2E5A27]" />
                )}
              </button>
            ))}
          </div>

          <div className="pt-2">
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                  <h3 className="font-serif text-lg text-[#141414]">Premium Maker Guarantee</h3>
                  <p className="text-xs text-[#777672] leading-relaxed font-light">
                    Every hardware component undergoes visual sizing inspections, acoustic dampening checks, and structural weight testing before listing in the curation database.
                  </p>
                  <div className="flex items-center gap-3 p-4 bg-[#FAF9F6] border border-[#E8E6E0]/70 rounded-2xl">
                    <ShieldCheck className="w-5 h-5 text-[#2E5A27] shrink-0" />
                    <span className="text-[10px] text-[#777672] font-medium leading-relaxed">Secure Redirection: Outbound clicks securely forward you to active merchant details on Amazon Store.</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#141414]">Aura Classifiers</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span key={tag} className="bg-white border border-[#E8E6E0] text-[#777672] text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="max-w-xl bg-white border border-[#E8E6E0]/45 rounded-3xl p-6">
                <table className="w-full text-xs">
                  <tbody>
                    {product.specs.map((spec, i) => {
                      const parts = spec.split(":");
                      const label = parts.length > 1 ? parts[0] : "Specs Highlight";
                      const value = parts.length > 1 ? parts.slice(1).join(":") : spec;
                      return (
                        <tr key={i} className="border-b border-[#FAF9F6] last:border-0">
                          <td className="py-3 font-bold text-[#8E8D88] w-[40%] uppercase tracking-widest text-[9px]">{label}</td>
                          <td className="py-3 text-[#141414] font-light">{value}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "setups" && (
              <div className="space-y-4">
                {setupsUsingThis.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {setupsUsingThis.map((setup) => (
                      <div key={setup.id} className="group bg-white border border-[#E8E6E0]/40 rounded-[24px] overflow-hidden hover:shadow-premium transition-shadow">
                        <div className="relative aspect-video">
                          <img src={setup.image} alt={setup.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4 flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-xs text-[#141414] group-hover:text-[#2E5A27] truncate max-w-[150px]">{setup.title}</h4>
                            <span className="text-[10px] text-[#8E8D88]">{setup.creator.name}</span>
                          </div>
                          <Link href={`/setup/${setup.slug}`} className="text-[10px] font-bold text-[#2E5A27] flex items-center gap-0.5">
                            Inspect <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-[#FAF9F6] rounded-3xl p-8 text-center text-xs text-[#8E8D88] border border-[#E8E6E0]/60">
                    🌿 This component hasn't been added to any workspace blueprints yet.
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

      </div>

      {/* 6. BOTTOM STICKY ACTION DOCK */}
      <div className="fixed bottom-0 left-0 right-0 lg:left-64 bg-white/80 backdrop-blur-xl border-t border-[#E8E6E0]/40 p-4 pb-safe flex items-center gap-4 z-[65]">
        <button 
          onClick={() => toggleProduct(product.id)}
          className="w-14 h-14 shrink-0 rounded-2xl border border-[#E8E6E0] flex items-center justify-center bg-white hover:bg-[#FAF9F6] transition-colors shadow-inset-subtle active:scale-95"
        >
          <Bookmark className={cn("w-6 h-6 transition-colors duration-300", saved ? "fill-red-500 text-red-500 border-none" : "text-[#141414]")} />
        </button>
        <a 
          href={product.affiliateLinks?.amazon || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 h-14 bg-[#141414] hover:bg-[#2E5A27] transition-all rounded-2xl flex flex-col items-center justify-center text-white relative shadow-premium group active:scale-98"
        >
          <span className="text-xs font-bold uppercase tracking-widest">Verify Affiliate Price</span>
          <span className="text-[8px] text-white/60 font-semibold uppercase tracking-widest">Redirecting securely to Amazon Store ⚡</span>
          <ArrowRight className="w-5 h-5 absolute right-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </a>
      </div>

    </div>
  );
}
