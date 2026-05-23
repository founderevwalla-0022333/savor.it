"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Mock Product Data with 'glowColor' for the Ambient Effect
const PRODUCT_DATA = {
  brand: "NuPhy",
  title: "Halo75 V2 Wireless Mechanical Keyboard",
  rating: 4.8,
  reviews: "1.2k",
  price: "$129.00",
  description: "Elevate your cozy setup. Features ghostbar acoustic dampening, hot-swappable switches, and a solid aluminum frame designed for pure typing acoustics.",
  variants: [
    {
      id: "matte-black",
      colorName: "Obsidian Black",
      hex: "#27272a", // Dark Zinc
      glowColor: "rgba(39, 39, 42, 0.7)", // Ambient shadow color
      img: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80" // Dark keyboard
    },
    {
      id: "ionic-white",
      colorName: "Ionic White",
      hex: "#f4f4f5", // Light Silver/White
      glowColor: "rgba(200, 200, 210, 0.8)", // Soft white glow
      img: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800&q=80" // White keyboard
    },
    {
      id: "cyber-purple",
      colorName: "Neon Cyber",
      hex: "#c026d3", // Fuchsia/Purple
      glowColor: "rgba(192, 38, 211, 0.6)", // Neon purple glow
      img: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800&q=80" // RGB/Purple setup
    }
  ]
};

export default function ProductDetailPage() {
  // Set default variant to the first one (Obsidian Black)
  const [activeVariant, setActiveVariant] = useState(PRODUCT_DATA.variants[0]);

  return (
    <div className="w-full min-h-screen bg-[#fafafa] select-none pb-32 animate-fade-in">
      
      {/* 1. TOP NAVBAR (Back & Share) */}
      <header className="flex items-center justify-between px-6 py-5 sticky top-0 z-50 bg-[#fafafa]/80 backdrop-blur-md max-w-md mx-auto">
        <Link href="/" className="p-2 bg-white rounded-full shadow-sm border border-zinc-200 active:scale-95 transition-transform block">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-zinc-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Link>
        <button className="p-2 bg-white rounded-full shadow-sm border border-zinc-200 active:scale-95 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-zinc-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
          </svg>
        </button>
      </header>

      <div className="max-w-md mx-auto">
        {/* 2. THE AMBIENT IMAGE GALLERY */}
        <section className="relative w-full px-4 mt-2">
          {/* The Magic "YouTube Style" Ambient Glow Background */}
          <div 
            className="absolute top-4 left-8 right-8 bottom-4 blur-[60px] opacity-80 rounded-full transition-all duration-1000 ease-in-out"
            style={{ backgroundColor: activeVariant.glowColor }}
          />
          
          {/* Main Product Image */}
          <div className="relative z-10 w-full aspect-square rounded-[2.5rem] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex items-center justify-center p-4">
            <img 
              src={activeVariant.img} 
              alt={activeVariant.colorName}
              key={activeVariant.id} // Forces re-render animation if needed
              className="w-full h-full object-cover rounded-[1.8rem] animate-fade-in transition-all duration-500"
            />
          </div>
        </section>

        {/* 3. PRODUCT INFO SECTION */}
        <section className="px-6 mt-8 space-y-4">
          {/* Brand & Title */}
          <div>
            <span className="text-[11px] font-black tracking-widest text-zinc-400 uppercase">
              {PRODUCT_DATA.brand}
            </span>
            <h1 className="text-2xl font-black tracking-tight text-zinc-900 leading-tight mt-1">
              {PRODUCT_DATA.title}
            </h1>
          </div>

          {/* Ratings */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center text-orange-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
              <span className="text-sm font-bold ml-1 text-zinc-800">{PRODUCT_DATA.rating}</span>
            </div>
            <span className="text-sm text-zinc-400 font-medium">({PRODUCT_DATA.reviews} reviews)</span>
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-500 font-medium leading-relaxed">
            {PRODUCT_DATA.description}
          </p>
        </section>

        {/* 4. COLOR VARIANTS SELECTOR */}
        <section className="px-6 mt-8 space-y-3">
          <div className="flex justify-between items-end">
            <h3 className="text-sm font-extrabold text-zinc-900">Color Variant</h3>
            <span className="text-xs font-bold text-zinc-500">{activeVariant.colorName}</span>
          </div>
          
          <div className="flex space-x-3">
            {PRODUCT_DATA.variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setActiveVariant(variant)}
                className={`w-12 h-12 rounded-full p-1 transition-all duration-300 ${
                  activeVariant.id === variant.id ? 'border-2 border-zinc-900 scale-110' : 'border-2 border-transparent scale-100 opacity-60 hover:opacity-100'
                }`}
              >
                <div 
                  className="w-full h-full rounded-full shadow-inner"
                  style={{ backgroundColor: variant.hex }}
                />
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* 5. STICKY BOTTOM "CHECK PRICE" CTA (Frosted) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/60 backdrop-blur-xl border-t border-zinc-200/50 z-50">
        <div className="max-w-md mx-auto flex items-center justify-between gap-4">
          
          {/* Mock Display Price */}
          <div className="flex flex-col pl-2">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Est. Price</span>
            <span className="text-xl font-black text-zinc-900 leading-none mt-1">{PRODUCT_DATA.price}</span>
          </div>

          {/* Action Button */}
          <button className="flex-1 bg-zinc-950 text-white rounded-full py-4 px-6 flex items-center justify-center space-x-2 shadow-[0_8px_20px_rgba(0,0,0,0.2)] active:scale-95 transition-all">
            <span className="text-sm font-extrabold tracking-wide uppercase">Check Live Price</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
}
