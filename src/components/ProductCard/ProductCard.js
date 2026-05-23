"use client";

import Link from "next/link";
import { Heart, Star, ArrowRight } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { formatPrice } from "@/data";
import { cn } from "@/lib/utils";

export default function ProductCard({ product, variant = "default" }) {
  const { isProductSaved, toggleProduct } = useWishlist();
  const saved = isProductSaved(product.id);

  // Layout classes depending on variant
  const isTrending = variant === "trending";

  return (
    <div 
      className={cn(
        "group relative flex flex-col justify-between bg-white border border-[#EAE8E2]/50 rounded-[20px] p-2.5 hover:shadow-premium transition-all duration-500 select-none",
        isTrending ? "w-[200px] md:w-[220px] shrink-0" : "w-full"
      )}
    >
      {/* 1. IMAGE CANVAS WRAPPER */}
      <Link 
        href={`/product/${product.slug}`} 
        className="relative rounded-[16px] bg-[#FAF9F6] flex items-center justify-center p-4 md:p-6 overflow-hidden transition-colors group-hover:bg-[#FAF5EE] aspect-square"
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-h-[82%] max-w-[85%] object-contain group-hover:scale-[1.03] transition-transform duration-500 drop-shadow-xs" 
          loading="lazy" 
        />
        
        {product.discount && (
          <span className="absolute top-2.5 left-2.5 bg-[#2E5A27] text-white px-2 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-widest shadow-sm">
            {product.discount}% OFF
          </span>
        )}

        {/* Floating Heart Button */}
        <button
          className="absolute top-2.5 right-2.5 w-7 h-7 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white shadow-[0_2px_6px_rgba(20,20,20,0.03)] transition-all duration-300 active:scale-90 z-10"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleProduct(product.id);
          }}
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            className={cn(
              "w-3.5 h-3.5 transition-colors duration-300", 
              saved ? "fill-red-500 text-red-500" : "text-[#777672]"
            )} 
            strokeWidth={1.5}
          />
        </button>
      </Link>

      {/* 2. TEXT METADATA SECTION */}
      <div className="space-y-1 px-1 pt-3 pb-0.5">
        <div className="flex items-center justify-between">
          <span className="font-satoshi text-[8px] uppercase tracking-widest text-[#8E8D88] font-bold block">
            {product.category}
          </span>
          <span className="font-satoshi text-[8px] font-bold text-[#D49E24] flex items-center gap-0.5">
            <Star className="w-2 h-2 fill-current" />
            {product.rating}
          </span>
        </div>
        
        <Link href={`/product/${product.slug}`} className="block">
          <h4 className="font-satoshi font-bold text-[11px] md:text-xs text-[#141414] group-hover:text-[#2E5A27] transition-colors line-clamp-1 mt-0.5 leading-snug">
            {product.name}
          </h4>
        </Link>
        
        <div className="flex items-center justify-between pt-2 border-t border-[#FAF9F6] mt-2">
          <span className="font-satoshi text-[11px] font-bold text-[#141414]">
            {formatPrice(product.price)}
          </span>
          <span className="font-satoshi text-[9px] font-bold text-[#2E5A27] uppercase tracking-widest hover:underline flex items-center gap-0.5 cursor-pointer">
            Specs <ArrowRight className="w-2.5 h-2.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

/* Product row variant for setups detail page specs listing */
export function ProductRow({ product }) {
  const { isProductSaved, toggleProduct } = useWishlist();
  const saved = isProductSaved(product.id);

  return (
    <div className="group bg-white border border-[#EAE8E2]/45 p-4 rounded-[24px] flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:shadow-premium select-none">
      <Link href={`/product/${product.slug}`} className="flex items-center gap-4 flex-1">
        <div className="w-16 h-16 bg-[#FAF9F6] rounded-xl flex items-center justify-center p-2 border border-[#EAE8E2]/30 shrink-0 overflow-hidden">
          <img src={product.image} alt={product.name} className="max-h-full object-contain" loading="lazy" />
        </div>
        <div className="min-w-0">
          <span className="font-satoshi text-[8px] uppercase tracking-widest text-[#8E8D88] font-bold block">
            {product.category}
          </span>
          <h4 className="font-satoshi font-bold text-xs text-[#141414] group-hover:text-[#2E5A27] transition-colors truncate mt-0.5">
            {product.name}
          </h4>
          <p className="font-satoshi text-[10px] text-[#777672] font-light truncate mt-0.5">
            {product.specs?.[0] || "Verified high-quality companion"}
          </p>
        </div>
      </Link>

      <div className="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-[#FAF9F6]">
        <div className="text-left md:text-right shrink-0">
          <span className="font-satoshi text-xs font-bold text-[#141414] block">
            {formatPrice(product.price)}
          </span>
          <span className="font-satoshi text-[9px] text-[#2E5A27] font-bold">Amazon Verified ⚡</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Wishlist toggle */}
          <button 
            onClick={() => toggleProduct(product.id)}
            className="w-9 h-9 rounded-full border border-[#EAE8E2] flex items-center justify-center text-red-500 hover:bg-[#FAF9F5] transition-colors"
          >
            <Heart className={cn("w-4 h-4 transition-colors duration-300", saved ? "fill-red-500 text-red-500" : "text-[#777672]")} strokeWidth={1.5} />
          </button>
          
          <a 
            href={product.affiliateLinks?.amazon || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#141414] text-white py-2.5 px-4.5 rounded-full text-[9px] tracking-wider uppercase font-bold flex items-center gap-1 hover:bg-[#2E5A27] transition-all shadow-sm font-satoshi"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}
