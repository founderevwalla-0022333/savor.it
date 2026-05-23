"use client";

import { use, useState, useMemo } from "react";
import Link from "next/link";
import { Sparkles, SlidersHorizontal, ChevronRight, Grid, Heart, Eye, ArrowUpRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { setups, setupStyles, budgetRanges, categories, formatPrice } from "@/data";
import { useWishlist } from "@/context/WishlistContext";

export default function CategoryDetailPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const { isSetupSaved, toggleSetup } = useWishlist();

  // State
  const [activeStyle, setActiveStyle] = useState("All");
  const [activeBudget, setActiveBudget] = useState(null);
  const [sortBy, setSortBy] = useState("trending");
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Find Category Name
  const categoryName = slug === "all"
    ? "All Workspace Setups"
    : categories.find((c) => c.slug === slug || c.key === slug)?.name || slug.replace(/-/g, " ");

  // Filter Logic
  const filteredSetups = useMemo(() => {
    let result = [...setups];

    // Filter by category or slug tags
    if (slug !== "all") {
      result = result.filter(
        (s) =>
          s.category === slug ||
          s.style.toLowerCase() === slug.toLowerCase() ||
          s.tags.some((t) => t.toLowerCase() === slug.replace(/-/g, " ").toLowerCase())
      );
    }

    // Filter by visual style
    if (activeStyle !== "All") {
      result = result.filter(
        (s) =>
          s.style === activeStyle ||
          s.tags.some((t) => t.toLowerCase() === activeStyle.toLowerCase())
      );
    }

    // Filter by budget
    if (activeBudget !== null) {
      const range = budgetRanges[activeBudget];
      result = result.filter(
        (s) => s.estimatedCost >= range.min && s.estimatedCost < range.max
      );
    }

    // Sort options
    if (sortBy === "newest") {
      result.reverse();
    } else if (sortBy === "budget-low") {
      result.sort((a, b) => a.estimatedCost - b.estimatedCost);
    } else if (sortBy === "budget-high") {
      result.sort((a, b) => b.estimatedCost - a.estimatedCost);
    }

    return result;
  }, [slug, activeStyle, activeBudget, sortBy]);

  // Fallback
  const displaySetups = filteredSetups.length > 0 ? filteredSetups : setups.filter(s => s.category === "minimal");

  return (
    <div className="min-h-screen pb-32 bg-[#FCFBF9] animate-fade-in select-none">
      
      {/* 1. BREADCRUMBS & HEADER */}
      <div className="px-4 md:px-8 pt-10 pb-6 max-w-[1040px] mx-auto space-y-4 border-b border-[#E8E6E0]/60">
        <nav className="flex items-center gap-2 text-[9px] font-bold text-[#8E8D88] uppercase tracking-widest">
          <Link href="/" className="hover:text-[#141414] transition-colors">Home</Link>
          <ChevronRight className="w-2.5 h-2.5" />
          <span className="hover:text-[#141414] transition-colors">Categories</span>
          <ChevronRight className="w-2.5 h-2.5" />
          <span className="text-[#141414]">{categoryName}</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pt-2">
          <div className="space-y-1">
            <h1 className="text-3xl md:text-5xl font-serif text-[#141414] leading-tight capitalize">{categoryName}</h1>
            <p className="text-xs text-[#777672] font-light">Discovering {displaySetups.length} verified organic blueprints.</p>
          </div>

          {/* Filtering Trigger Bar */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsFilterDrawerOpen(true)}
              className="flex items-center gap-1.5 px-4.5 py-2.5 bg-white border border-[#E8E6E0] rounded-full text-xs font-bold text-[#141414] hover:bg-[#FAF9F6] transition-all shadow-inset-subtle"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#8E8D88]" /> Filters
              {(activeStyle !== "All" || activeBudget !== null) && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E5A27]"></span>
              )}
            </button>

            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4.5 py-2.5 bg-white border border-[#E8E6E0] rounded-full text-xs font-bold text-[#141414] focus:outline-none focus:ring-1 focus:ring-[#2E5A27]/20 shadow-inset-subtle cursor-pointer"
            >
              <option value="trending">Sort: Trending</option>
              <option value="newest">Sort: Newest</option>
              <option value="budget-low">Budget: Low to High</option>
              <option value="budget-high">Budget: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. DYNAMIC WORKSPACE GRID */}
      <div className="px-4 md:px-8 py-8 max-w-[1040px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displaySetups.map((setup) => {
            const saved = isSetupSaved(setup.id);
            return (
              <div key={setup.id} className="group bg-[#FAF9F6] rounded-[32px] border border-[#E8E6E0]/60 overflow-hidden hover:shadow-premium transition-all duration-500">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF9F6]">
                  <img src={setup.image} alt={setup.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102" />
                  <button 
                    onClick={() => toggleSetup(setup.id)}
                    className="absolute top-4 right-4 w-9.5 h-9.5 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white text-red-500 shadow-sm transition-all active:scale-90"
                  >
                    <Heart className={cn("w-4 h-4 transition-colors duration-300", saved ? "fill-red-500 text-red-500" : "text-[#141414]")} strokeWidth={1.5} />
                  </button>
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1 rounded-full text-[8px] font-bold text-[#141414] uppercase tracking-widest shadow-xs">
                    {setup.style}
                  </div>
                </div>
                <div className="p-5.5 space-y-3.5">
                  <div className="flex items-center gap-2">
                    <img src={setup.creator.avatar} alt="" className="w-5.5 h-5.5 rounded-full object-cover border border-[#E8E6E0]" />
                    <span className="text-[10px] font-bold text-[#8E8D88] uppercase tracking-wider">{setup.creator.name}</span>
                  </div>
                  <Link href={`/setup/${setup.slug}`} className="block">
                    <h3 className="font-serif font-semibold text-base text-[#141414] group-hover:text-[#2E5A27] transition-colors leading-tight">{setup.title}</h3>
                  </Link>
                  <div className="flex items-center justify-between text-xs text-[#777672] pt-3 border-t border-[#E8E6E0]/60">
                    <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {setup.views} views</span>
                    <span className="font-bold text-[#141414]">{formatPrice(setup.estimatedCost)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. PREMIUM FLOATING FILTER DRAWER (RIGHT SIDE SLIDE OVER) */}
      {isFilterDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Overlay blur */}
          <div 
            onClick={() => setIsFilterDrawerOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-[#FCFBF9] shadow-2xl flex flex-col justify-between p-8 relative border-l border-[#E8E6E0]/70 animate-fade-in">
              
              {/* Drawer Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-serif text-[#141414] flex items-center gap-2">
                    <SlidersHorizontal className="w-5 h-5 text-[#2E5A27]" /> Filter workspaces
                  </h3>
                  <button 
                    onClick={() => setIsFilterDrawerOpen(false)}
                    className="p-2 -mr-2 bg-[#FAF9F6] border border-[#E8E6E0] rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-4 h-4 text-[#777672]" strokeWidth={1.5} />
                  </button>
                </div>
                <p className="text-xs text-[#777672] font-light leading-relaxed">Filter blueprints dynamically. Matches are visually updated instantly.</p>
              </div>

              {/* Drawer Scrollable Body */}
              <div className="flex-1 overflow-y-auto py-8 space-y-8 pr-1 -mr-2 no-scrollbar">
                
                {/* Visual Style Selection */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#141414]">Aesthetic Vibe</h4>
                  <div className="flex flex-wrap gap-2">
                    {["All", ...setupStyles].map((style) => (
                      <button
                        key={style}
                        onClick={() => setActiveStyle(style)}
                        className={cn(
                          "px-4.5 py-2 rounded-full border text-xs font-bold transition-all shadow-inset-subtle",
                          activeStyle === style 
                            ? "bg-[#2E5A27]/5 text-[#2E5A27] border-[#2E5A27]/30 shadow-xs" 
                            : "bg-white text-[#777672] border-[#E8E6E0] hover:border-[#141414]/30"
                        )}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Bracket Filters */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#141414]">Estimated Cost Bracket</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {budgetRanges.map((range, idx) => (
                      <button
                        key={range.label}
                        onClick={() => setActiveBudget(activeBudget === idx ? null : idx)}
                        className={cn(
                          "p-3 rounded-2xl border text-xs font-bold text-left flex items-center gap-2 transition-all shadow-inset-subtle",
                          activeBudget === idx 
                            ? "bg-[#2E5A27]/5 text-[#2E5A27] border-[#2E5A27]/30 shadow-xs" 
                            : "bg-white text-[#777672] border-[#E8E6E0] hover:border-[#141414]/30"
                        )}
                      >
                        <span className="text-sm">{range.icon}</span>
                        <span className="truncate">{range.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Drawer Footer actions */}
              <div className="pt-4 border-t border-[#E8E6E0]/60 space-y-3">
                <button 
                  onClick={() => setIsFilterDrawerOpen(false)}
                  className="w-full bg-[#141414] hover:bg-[#2E5A27] transition-colors py-3.5 rounded-full text-[10px] tracking-wider uppercase font-bold text-white shadow-premium active:scale-95"
                >
                  Reveal Results ({displaySetups.length})
                </button>
                
                <button 
                  onClick={() => {
                    setActiveStyle("All");
                    setActiveBudget(null);
                  }}
                  className="w-full py-2.5 rounded-full text-xs font-bold text-[#8E8D88] hover:text-[#141414] transition-colors"
                >
                  Clear All Filters
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
