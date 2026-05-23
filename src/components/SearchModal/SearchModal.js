"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Search, X, Clock, Sparkles, Flame, Grid, ArrowRight } from "lucide-react";
import { setups, products, categories, formatPrice } from "@/data";
import { cn } from "@/lib/utils";

const TRENDING_SEARCHES = [
  "Gaming setup", "Minimal desk", "RGB lighting", "Standing desk",
  "Mechanical keyboard", "Coding workspace", "Ultrawide monitor",
  "Cozy study", "Creator studio", "Budget setup"
];

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("tsv_recentSearches");
      if (stored) setRecentSearches(JSON.parse(stored));
    } catch {}
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const saveSearch = useCallback((term) => {
    if (!term.trim()) return;
    const updated = [term, ...recentSearches.filter((s) => s !== term)].slice(0, 6);
    setRecentSearches(updated);
    localStorage.setItem("tsv_recentSearches", JSON.stringify(updated));
  }, [recentSearches]);

  const clearRecent = useCallback(() => {
    setRecentSearches([]);
    localStorage.removeItem("tsv_recentSearches");
  }, []);

  const filteredSetups = query.length >= 2
    ? setups.filter((s) =>
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
        s.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 4)
    : [];

  const filteredProducts = query.length >= 2
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 4)
    : [];

  const filteredCategories = query.length >= 2
    ? categories.filter((c) =>
        c.name.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 3)
    : [];

  const hasResults = filteredSetups.length > 0 || filteredProducts.length > 0 || filteredCategories.length > 0;

  const handleSelect = (term) => {
    saveSearch(term);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/40 backdrop-blur-xs p-0 md:p-6 lg:p-12 overflow-y-auto select-none"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div 
        className="w-full md:max-w-2xl bg-[#FCFBF9] md:rounded-[32px] md:border border-[#EAE8E2] shadow-2xl flex flex-col min-h-screen md:min-h-0 md:max-h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Box */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-[#EAE8E2] shrink-0 pt-12 md:pt-5">
          <Search className="w-4 h-4 text-[#8E8D88]" strokeWidth={1.5} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search blueprints, workspace elements..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-xs text-[#141414] focus:outline-none placeholder-[#8E8D88] font-bold tracking-wide font-satoshi"
          />
          {query && (
            <button 
              className="w-5 h-5 rounded-full bg-[#FAF9F6] border border-[#EAE8E2] flex items-center justify-center text-[10px] font-bold hover:bg-gray-100 transition-colors" 
              onClick={() => setQuery("")}
            >
              ✕
            </button>
          )}
          <button 
            className="hidden md:inline-flex px-2.5 py-1 bg-white border border-[#EAE8E2] rounded-lg text-[9px] font-bold text-[#8E8D88] tracking-widest uppercase font-satoshi" 
            onClick={onClose}
          >
            ESC
          </button>
          <button 
            className="md:hidden text-xs font-bold text-[#2E5A27] font-satoshi" 
            onClick={onClose}
          >
            Cancel
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar pb-24 md:pb-6 font-satoshi">
          
          {/* 1. NO QUERY STATE: Recent + Trending */}
          {query.length < 2 && (
            <>
              {recentSearches.length > 0 && (
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-[8px] font-bold uppercase tracking-widest text-[#8E8D88]">
                    <span>Recent Searches</span>
                    <button className="text-[#2E5A27] hover:underline normal-case tracking-wider font-bold" onClick={clearRecent}>Clear</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((s) => (
                      <button 
                        key={s} 
                        className="px-4 py-2 bg-white hover:bg-[#FAF9F6] border border-[#EAE8E2] rounded-xl text-xs font-bold text-[#777672] flex items-center gap-1.5 transition-colors shadow-inset-subtle"
                        onClick={() => { setQuery(s); saveSearch(s); }}
                      >
                        <Clock className="w-3.5 h-3.5 text-[#8E8D88]" strokeWidth={1.5} />
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-2.5">
                <span className="text-[8px] font-bold uppercase tracking-widest text-[#8E8D88] flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#2E5A27] fill-[#2E5A27]/5" strokeWidth={1.5} /> Trending Discoveries
                </span>
                <div className="flex flex-wrap gap-2">
                  {TRENDING_SEARCHES.map((s) => (
                    <button 
                      key={s} 
                      className="px-4 py-2 bg-[#FAF9F6] hover:bg-[#FAF5EE] border border-[#EAE8E2] rounded-xl text-xs font-bold text-[#141414] flex items-center gap-1.5 transition-colors"
                      onClick={() => { setQuery(s); saveSearch(s); }}
                    >
                      <Sparkles className="w-3 h-3 text-[#D49E24] fill-current" />
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5">
                <span className="text-[8px] font-bold uppercase tracking-widest text-[#8E8D88] flex items-center gap-1.5">
                  <Grid className="w-3.5 h-3.5 text-[#2E5A27]" strokeWidth={1.5} /> Browse Core Categories
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {categories.slice(0, 8).map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/category/${cat.slug}`}
                      className="flex items-center gap-3 p-3.5 bg-white hover:bg-[#FAF9F6] border border-[#EAE8E2]/60 rounded-2xl transition-all"
                      onClick={() => handleSelect(cat.name)}
                    >
                      <span className="text-lg">{cat.icon || "⚙️"}</span>
                      <span className="text-xs font-bold text-[#141414]">{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* 2. HAS QUERY - SHOW RESULTS */}
          {query.length >= 2 && hasResults && (
            <div className="space-y-6">
              {filteredSetups.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-[8px] font-bold uppercase tracking-widest text-[#8E8D88]">Matching Blueprints</h4>
                  <div className="space-y-2">
                    {filteredSetups.map((s) => (
                      <Link
                        key={s.id}
                        href={`/setup/${s.slug}`}
                        className="flex items-center gap-4 p-2 rounded-2xl hover:bg-[#FAF9F6] transition-colors group border border-transparent hover:border-[#EAE8E2]/60"
                        onClick={() => handleSelect(query)}
                      >
                        <div className="w-16 h-12 rounded-lg bg-[#FAF9F6] overflow-hidden border border-[#EAE8E2]/60">
                          <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="font-serif font-bold text-xs text-[#141414] truncate block group-hover:text-[#2E5A27] transition-colors heading-canela">{s.title}</span>
                          <span className="text-[9px] text-[#8E8D88] block truncate mt-0.5">{s.tags.slice(0, 3).join(" · ")}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#8E8D88] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {filteredProducts.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-[8px] font-bold uppercase tracking-widest text-[#8E8D88]">Curated Hardware Components</h4>
                  <div className="space-y-2">
                    {filteredProducts.map((p) => (
                      <Link
                        key={p.id}
                        href={`/product/${p.slug}`}
                        className="flex items-center gap-4 p-2 rounded-2xl hover:bg-[#FAF9F6] transition-colors group border border-transparent hover:border-[#EAE8E2]/60"
                        onClick={() => handleSelect(query)}
                      >
                        <div className="w-12 h-12 rounded-lg bg-[#FAF9F6] p-1.5 flex items-center justify-center border border-[#EAE8E2]/60">
                          <img src={p.image} alt={p.name} className="max-h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="font-satoshi font-bold text-xs text-[#141414] truncate block group-hover:text-[#2E5A27] transition-colors">{p.name}</span>
                          <span className="text-[9px] text-[#8E8D88] block mt-0.5">{formatPrice(p.price)} · ★ {p.rating}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#8E8D88] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 3. HAS QUERY & NO RESULTS */}
          {query.length >= 2 && !hasResults && (
            <div className="py-10 text-center space-y-1.5">
              <span className="text-2xl block">🌿</span>
              <h4 className="font-serif font-bold text-sm text-[#141414] heading-canela">No curation found for "{query}"</h4>
              <p className="text-[10px] text-[#8E8D88] max-w-xs mx-auto">Try inspecting different keyword coordinates or browse active categories.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
