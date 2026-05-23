"use client";

import Link from "next/link";
import { Sparkles, Grid, Eye, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const GUIDES = [
  {
    slug: "10-desk-accessories",
    title: "10 Desk Accessories That Improve Productivity",
    desc: "Adding functionality to your desktop shouldn't mean adding visual clutter. Discover how to balance smart cable hubs, physical mechanical switches, sound insulation felt, and warm candles.",
    category: "Workspace Upgrades",
    readTime: "4 min read",
    date: "May 18, 2026",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop",
    author: "Ethan Lugun"
  },
  {
    slug: "how-to-build-minimal",
    title: "How to Build the Perfect Minimal Workspace",
    desc: "A deep physical guide into desktop geometrical setups. Cable routing channels, custom timber treatments, matching mechanical switch acoustic dampeners, and wall backing options.",
    category: "Guides",
    readTime: "6 min read",
    date: "May 15, 2026",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=600&auto=format&fit=crop",
    author: "Ethan Lugun"
  },
  {
    slug: "workspace-lighting-guide",
    title: "Best Ambient and Screen Lighting for Eye Health",
    desc: "Asymmetric screen bar projectors project warm illumination right on your keyboard layout path without creating bouncing reflections over display glass. Here is why screenbars are essential.",
    category: "Lighting Upgrades",
    readTime: "5 min read",
    date: "May 10, 2026",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=600&auto=format&fit=crop",
    author: "Elena Petrova"
  }
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen pb-32">
      {/* Editorial Header */}
      <div className="px-6 lg:px-10 pt-10 pb-6 max-w-5xl mx-auto space-y-1 border-b border-[#EAEAEA]/60">
        <span className="text-[10px] font-bold tracking-widest text-[#2E7D32] uppercase flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 fill-[#2E7D32]/10" /> Weekly Reading
        </span>
        <h1 className="text-3xl lg:text-4xl font-serif font-bold text-[#111111]">Savor.it Editorial Guides</h1>
        <p className="text-xs text-[#888888] max-w-sm">Deep physical inspection guides on cable routing, mechanical acoustics, and lighting geometry.</p>
      </div>

      <div className="px-6 lg:px-10 py-8 max-w-5xl mx-auto space-y-12">
        {/* Featured Big Card (First guide) */}
        <div className="bg-white border border-[#EAEAEA] rounded-3xl md:rounded-[40px] overflow-hidden flex flex-col md:flex-row group shadow-xs hover:shadow-soft transition-all">
          <div className="w-full md:w-1/2 aspect-video md:aspect-auto min-h-[300px] relative overflow-hidden bg-[#FAF9F5]">
            <img src={GUIDES[0].image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-102" />
          </div>
          <div className="w-full md:w-1/2 p-6 lg:p-12 flex flex-col justify-center space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 text-[9px] font-bold uppercase tracking-wider text-[#2E7D32]">
              <span>FEATURED ARTICLE • {GUIDES[0].category}</span>
              <span className="text-[#888888]">{GUIDES[0].readTime}</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#111111] leading-tight group-hover:text-[#2E7D32] transition-colors">
              {GUIDES[0].title}
            </h2>
            <p className="text-xs text-[#666666] leading-relaxed">{GUIDES[0].desc}</p>
            <div className="pt-4 border-t border-[#F5F5F5] flex flex-wrap items-center justify-between gap-3">
              <span className="text-[10px] font-bold text-[#888888]">By {GUIDES[0].author} · {GUIDES[0].date}</span>
              <Link 
                href={`/guides/${GUIDES[0].slug}`}
                className="bg-[#111111] text-white py-2.5 px-5 rounded-full text-[10px] font-bold flex items-center gap-1 hover:bg-[#333333] transition-colors shadow-xs shrink-0"
              >
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Small grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GUIDES.slice(1).map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group bg-white border border-[#EAEAEA] rounded-3xl md:rounded-[36px] overflow-hidden block hover:shadow-soft transition-all">
              <div className="aspect-[16/10] overflow-hidden bg-[#FAF9F5] border-b border-[#EAEAEA]">
                <img src={guide.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102" />
              </div>
              <div className="p-6 md:p-8 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[9px] font-bold uppercase tracking-wider text-[#2E7D32]">
                  <span>{guide.category}</span>
                  <span className="text-[#888888]">{guide.readTime}</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-[#111111] leading-snug group-hover:text-[#2E7D32] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-xs text-[#666666] leading-relaxed line-clamp-2">{guide.desc}</p>
                <div className="pt-4 border-t border-[#F5F5F5] flex flex-wrap items-center justify-between gap-2 text-[10px] font-bold text-[#888888]">
                  <span>By {guide.author}</span>
                  <span>{guide.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
