"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, Share2, Heart, Eye, ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";
import { setups, products, formatPrice, getProductsForSetup } from "@/data";
import { useWishlist } from "@/context/WishlistContext";

const COLLECTIONS_DATA = {
  "warm-minimal-workspace": {
    title: "Warm Minimal Workspace",
    tagline: "Atmospheric & Serene • Vol. 12",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    story: [
      "The goal of a Warm Minimalist workspace is to reduce visual complexity while adding tactile warmth. Where standard monochrome minimalism can feel cold and institutional, introducing raw timber, warm-spectrum lighting, and natural wool felt creates a space that feels deeply human, comfortable, and tranquil.",
      "In this design philosophy, every single item must justify its existence on your desk. Cables are routed completely out of sight along the structural rails of the desk. Desk accessories are limited to a single felt mat and a smart ambient lightbar. This lightbar projects light downward in an asymmetric pattern, illuminating your workspace without creating glares on your screen, reducing eye strain during late-night projects."
    ],
    vibeDesc: "A comforting blend of 3000K ambient illumination, soft leather pads, natural oak desks, and matte black peripherals.",
    matchingStyle: "Cozy",
    setupIds: [1, 5, 6]
  },
  "dark-coding-setup": {
    title: "Dark Coding Setup",
    tagline: "High Productivity • Vol. 13",
    heroImage: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1200&auto=format&fit=crop",
    story: [
      "Software development requires long stretches of deep cognitive focus. Our Dark Coding collection is tailored for high visual contrast and zero environmental distractions. By matching dark slate backdrops with subtle cyan/purple backlighting, your eyes are naturally drawn straight to the dual ultra-wide display panels.",
      "The hardware selection centers around heavy-duty typing productivity. High-end mechanical keyboards with custom brown switches provide crisp, satisfying feedback without overwhelming acoustic noise. Combined with an ergonomic vertical/contour productivity mouse, developers can work for hours in total comfort, maintaining peak shipping velocities."
    ],
    vibeDesc: "Highly optimized low-glare visual focus, satisfying mechanical feedback, and contoured productivity peripherals.",
    matchingStyle: "Minimal",
    setupIds: [2, 7, 8]
  },
  "cozy-creator-setup": {
    title: "Cozy Creator Setup",
    tagline: "Warm Acoustics • Vol. 14",
    heroImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop",
    story: [
      "For musicians, streamers, and content creators, the workspace is a digital factory. This collection brings together crisp acoustics and rich hardware dials in an organic, cozy aesthetic. Sound-absorbing felt tiles on the walls are contrasted with thriving green plants, helping you relax while recording high-fidelity streams.",
      "Control gear lies at the heart of this workspace. Programmable macro keys let creators toggle video streams, balance audio outputs, and switch lighting levels instantly with one-touch physical feedback. With hi-fi wireless noise-cancelling headphones and an active condenser microphone, your auditory environment is completely locked in."
    ],
    vibeDesc: "Sleek streaming dials, sound-absorbing felt textures, active condenser mic fixtures, and warm wooden speaker casing.",
    matchingStyle: "Cozy",
    setupIds: [3, 4]
  },
  "student-essentials": {
    title: "Student Essentials Desk",
    tagline: "Smart Budget • Vol. 15",
    heroImage: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200&auto=format&fit=crop",
    story: [
      "Academic productivity requires keeping your workspace versatile, fresh, and budget-friendly. This collection focus on maximum utility with a low barrier to entry. Flexible laptop stands raise your screen to eye level to prevent neck strain, while clean silicone wire mounts keep charging ports easily accessible.",
      "Lighting plays a key role here. By utilizing adjustable color temp monitor lightbars, students can switch between crisp 5000K daylight for active study and writing, and soft 2700K warm lighting for evening reading and wind-down. It's about building a multipurpose zone that easily adapts."
    ],
    vibeDesc: "High utility-to-cost ratios, ergonomic height elevation, and smart dual-color lightbars.",
    matchingStyle: "Study",
    setupIds: [3, 5]
  }
};

export default function CollectionDetailPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const { isSetupSaved, toggleSetup } = useWishlist();

  // Load collection metadata or fallback
  const collection = COLLECTIONS_DATA[slug] || COLLECTIONS_DATA["warm-minimal-workspace"];

  // Filter associated setups
  const associatedSetups = setups.filter((s) => collection.setupIds.includes(s.id));

  // Extract unique products inside these setups
  const productIds = Array.from(new Set(associatedSetups.flatMap((s) => s.productIds)));
  const collectionProducts = products.filter((p) => productIds.includes(p.id));

  return (
    <div className="min-h-screen pb-20">
      
      {/* 1. STICKY TOP NAVIGATION BAR */}
      <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between bg-[#F8F9FA]/80 backdrop-blur-md sticky top-0 z-30 border-b border-[#EAEAEA]/20">
        <Link href="/collections" className="p-2 bg-white/60 border border-[#EAEAEA] rounded-full hover:bg-white transition-all">
          <ChevronLeft className="w-5 h-5 text-[#111111]" />
        </Link>
        
        <div className="flex items-center gap-3">
          <button className="p-2 bg-white/60 border border-[#EAEAEA] rounded-full hover:bg-white transition-all">
            <Share2 className="w-5 h-5 text-[#111111]" />
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-12">
        
        {/* 2. GIANT PARALLAX CINEMATIC HERO */}
        <section className="relative h-[480px] rounded-[40px] overflow-hidden bg-[#0A0D14] border border-[#EAEAEA]/40 shadow-xs">
          <img 
            src={collection.heroImage} 
            alt={collection.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-75 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent"></div>
          
          <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end space-y-3">
            <span className="text-[10px] tracking-widest uppercase font-bold text-[#A2E2A6]">{collection.tagline}</span>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">{collection.title}</h1>
            <p className="text-white/70 text-xs max-w-lg leading-relaxed">{collection.vibeDesc}</p>
          </div>
        </section>

        {/* 3. THE SETUP STORY (EDITORIAL COLUMNS) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4">
          <div className="md:col-span-4 space-y-4 bg-[#FAF9F5] border border-[#ECE9DF] p-6 rounded-3xl">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[#2E7D32]">Visual Mood</span>
            <h3 className="text-lg font-serif font-semibold text-[#111111]">Design Highlights</h3>
            <p className="text-xs text-[#666666] leading-relaxed">{collection.vibeDesc}</p>
            <div className="flex items-center gap-2 text-[10px] font-bold text-[#2E7D32] pt-2 border-t border-[#ECEAE2]">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
              <span>Aura Match: {collection.matchingStyle} setups</span>
            </div>
          </div>

          <div className="md:col-span-8 space-y-6">
            <h2 className="font-serif font-semibold text-xl text-[#111111]">The Setup Story</h2>
            {collection.story.map((para, i) => (
              <p key={i} className="text-xs lg:text-sm text-[#666666] leading-relaxed">{para}</p>
            ))}
          </div>
        </section>

        {/* 4. PRODUCTS LIST INSIDE THIS SETUP */}
        <section className="space-y-6 pt-6 border-t border-[#F0F0F0]">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888]">Setup Composition</span>
            <h3 className="text-xl font-serif font-semibold text-[#111111]">Products in these Setups</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {collectionProducts.map((p) => (
              <div 
                key={p.id} 
                className="group bg-white border border-[#EAEAEA] p-4 rounded-[28px] flex items-center gap-4 transition-all hover:shadow-soft"
              >
                <div className="w-20 h-20 bg-[#F9FAF9] rounded-2xl flex items-center justify-center p-2 shrink-0 border border-[#F0F0F0] overflow-hidden">
                  <img src={p.image} alt={p.name} className="max-h-full object-contain group-hover:scale-102 transition-transform" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] uppercase tracking-wider text-[#888888] font-bold block">{p.category}</span>
                  <Link href={`/product/${p.slug}`} className="block">
                    <h4 className="font-semibold text-xs text-[#111111] group-hover:text-[#2E7D32] transition-colors truncate mt-0.5">{p.name}</h4>
                  </Link>
                  <p className="text-[10px] text-[#666666] truncate mt-1">{p.specs[0]}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs font-bold text-[#111111]">{formatPrice(p.price)}</span>
                    <a 
                      href={p.affiliateLinks?.amazon || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[10px] font-bold text-[#2E7D32] hover:underline"
                    >
                      Amazon store ⚡
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. ASSOCIATED CREATOR SETUPS */}
        <section className="space-y-6 pt-6 border-t border-[#F0F0F0]">
          <h3 className="text-sm font-bold text-[#111111] uppercase tracking-wider">Associated Creator Layouts</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {associatedSetups.map((setup) => {
              const saved = isSetupSaved(setup.id);
              return (
                <div key={setup.id} className="group bg-white border border-[#EAEAEA] rounded-3xl overflow-hidden hover:shadow-soft transition-all duration-300">
                  <div className="relative aspect-[4/3] bg-[#F5F5F5] overflow-hidden">
                    <img src={setup.image} alt={setup.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" />
                    <button 
                      onClick={() => toggleSetup(setup.id)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#111111]"
                    >
                      <Heart className={cn("w-4 h-4", saved ? "fill-red-500 text-red-500" : "")} />
                    </button>
                  </div>
                  <div className="p-5 space-y-2">
                    <div className="flex items-center gap-2">
                      <img src={setup.creator.avatar} alt="" className="w-4 h-4 rounded-full object-cover" />
                      <span className="text-[9px] font-bold text-[#888888]">{setup.creator.name}</span>
                    </div>
                    <Link href={`/setup/${setup.slug}`} className="block">
                      <h4 className="font-serif font-bold text-xs text-[#111111] group-hover:text-[#2E7D32] transition-colors line-clamp-1">{setup.title}</h4>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
