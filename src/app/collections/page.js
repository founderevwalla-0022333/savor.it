"use client";

import Link from "next/link";
import { Sparkles, Grid, Eye, Heart, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { setups } from "@/data";

const COLLECTIONS = [
  {
    id: "warm-minimal",
    slug: "warm-minimal-workspace",
    title: "Warm Minimal Workspace",
    desc: "A soothing blend of raw oak wood desks, 3000K warm backlighting, and organic felt deskmats engineered to minimize cognitive visual clutter.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    count: 18,
    tagline: "Atmospheric & Serene",
    color: "bg-[#1C1612]"
  },
  {
    id: "dark-coding",
    slug: "dark-coding-setup",
    title: "Dark Coding Setup",
    desc: "Engineered for pure software engineering productivity. Zero daylight glare, high-contrast mechanical switches, and twin ultra-wide screens.",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=800&auto=format&fit=crop",
    count: 20,
    tagline: "High Productivity",
    color: "bg-[#0A0D14]"
  },
  {
    id: "cozy-creator",
    slug: "cozy-creator-setup",
    title: "Cozy Creator Setup",
    desc: "A warm and inviting space merging mechanical dials, studio microphones, active sound-absorbing pads, and plants for creators.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop",
    count: 15,
    tagline: "Warm Acoustics",
    color: "bg-[#2A231C]"
  },
  {
    id: "student-essentials",
    slug: "student-essentials",
    title: "Student Essentials Desk",
    desc: "Budget-friendly smart lighting, ergonomic laptop stands, clean wire hubs, and customizable pins to keep studying fresh and organized.",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop",
    count: 10,
    tagline: "Smart Budget",
    color: "bg-[#181A1B]"
  }
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Editorial Header */}
      <div className="px-6 lg:px-10 pt-10 pb-6 max-w-5xl mx-auto space-y-1 border-b border-[#EAEAEA]/60">
        <span className="text-[10px] font-bold tracking-widest text-[#2E7D32] uppercase flex items-center gap-1.5">
          <Grid className="w-3.5 h-3.5 fill-[#2E7D32]/10" /> Digital Magazine
        </span>
        <h1 className="text-3xl lg:text-4xl font-serif font-bold text-[#111111]">Lifestyle Collections</h1>
        <p className="text-xs text-[#888888] max-w-sm">Hand-assembled setup stories, ambient specs, and curated parts list lists.</p>
      </div>

      <div className="px-6 lg:px-10 py-8 max-w-5xl mx-auto space-y-12">
        {/* Cinematic Magazine Cards */}
        <div className="space-y-8">
          {COLLECTIONS.map((c, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={c.id} 
                className={cn(
                  "bg-white border border-[#EAEAEA] rounded-3xl md:rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-xs group transition-all hover:shadow-soft",
                  isEven ? "" : "md:flex-row-reverse"
                )}
              >
                {/* Visual Banner (50%) */}
                <div className="w-full md:w-1/2 aspect-video md:aspect-auto min-h-[300px] relative overflow-hidden bg-[#0A0D14]">
                  <img 
                    src={c.image} 
                    alt={c.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-103 opacity-75" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-xs px-4 py-1.5 rounded-full text-[10px] font-bold text-[#111111]">
                    {c.count} CURATED SETUPS
                  </div>
                </div>

                {/* Editorial text (50%) */}
                <div className="w-full md:w-1/2 p-6 lg:p-12 flex flex-col justify-center space-y-4">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#2E7D32]">{c.tagline}</span>
                  <h2 className="text-2xl font-serif font-bold text-[#111111] leading-tight">{c.title}</h2>
                  <p className="text-xs text-[#666666] leading-relaxed">{c.desc}</p>
                  
                  <div className="pt-4 border-t border-[#F5F5F5] flex items-center">
                    <Link 
                      href={`/collections/${c.slug}`}
                      className="bg-[#111111] text-white py-3 px-6 rounded-full text-[11px] font-bold tracking-wide flex items-center gap-1.5 hover:bg-[#333333] transition-colors"
                    >
                      Read Setup Story <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
