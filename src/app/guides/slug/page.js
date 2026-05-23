"use client";

import { use } from "react";
import Link from "next/link";
import { ChevronLeft, Share2, Heart, Clock, Calendar, User, ArrowLeftRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const GUIDES_CONTENT = {
  "10-desk-accessories": {
    title: "10 Desk Accessories That Improve Productivity",
    category: "Workspace Upgrades",
    readTime: "4 min read",
    date: "May 18, 2026",
    author: "Ethan Lugun",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200&auto=format&fit=crop",
    paragraphs: [
      "Building an inspiring, productive workspace isn't about loading your desk with expensive hardware. In fact, visual clutter is one of the leading contributors to passive cognitive fatigue. The key is balance: finding accessories that offer tangible utility while respecting geometric space.",
      "Here are our top 3 verified accessory upgrades that pay immediate focus dividends:",
      "1. Asymmetric Monitor Lightbars: Unlike traditional lamps, monitor lightbars clamp to the top of your display, projecting light downwards in a sharp, angled wedge. This completely isolates screen reflection glares while illuminating your keyboard path and writing materials with soft, daylight-temperature glow.",
      "2. Natural Felt Deskmats: A felt mat does more than protect your desk surface. It acts as a physical anchor for your keyboard and mouse, defining a designated work zone. Acoustically, felt dampens the harsh frequencies of mechanical keys, leading to a much calmer, quieter typing environment.",
      "3. Weighted Silicone Wire Organizers: Keep USB-C and charging ports from slipping behind your timber. A heavy slate or metal organizer rests near your desk edge, keeping connection cables within arm's reach without introducing unsightly tangles."
    ]
  },
  "how-to-build-minimal": {
    title: "How to Build the Perfect Minimal Workspace",
    category: "Workspace Curation",
    readTime: "6 min read",
    date: "May 15, 2026",
    author: "Ethan Lugun",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop",
    paragraphs: [
      "True minimalism is not the absence of things; it is the absolute presence of utility. When designing a workspace from scratch, the physical structure of your desk dictates your cable management capabilities. Look for oak or walnut tops fitted with bottom wire trays and pre-routed power grommets.",
      "Cable management is 90% of the minimal look. Use heavy-duty double-sided mounting tape to anchor power strips completely beneath your desk frame. Group monitor wires, keyboard connections, and power inputs inside woven mesh sleeves, running them cleanly down the back legs of the desk out of sight.",
      "Select a cohesive, natural color palette. Natural warm timber wood desks pair beautifully with charcoal gray wool deskmats, matte black peripherals, and subtle green plant accents. Avoid high-gloss plastics that reflect environmental light, opting for anodized aluminum or matte-texture alloys."
    ]
  },
  "workspace-lighting-guide": {
    title: "Best Ambient and Screen Lighting for Eye Health",
    category: "Lighting Upgrades",
    readTime: "5 min read",
    date: "May 10, 2026",
    author: "Elena Petrova",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=1200&auto=format&fit=crop",
    paragraphs: [
      "Working in a dark room with a bright screen causes severe eye muscle fatigue, as your pupils constantly adjust to extreme contrast levels. Conversely, harsh overhead fluorescent tubes create screen reflections and wash out monitor colors. The solution lies in indirect ambient illumination.",
      "To resolve screen glare completely, rely on asymmetric optical lightbars. By utilizing specialized reflectors, these bars project a clean sheet of light down and forward, clipping off completely before hitting your display glass. It creates high-contrast writing illumination without creating display reflections.",
      "Furthermore, backlighting your screen (also known as bias lighting) with a soft warm LED strip creates a transition zone of ambient light behind your monitor frame. Set this bias light to roughly 3000K warm yellow to promote visual relaxation and minimize headaches during evening workflows."
    ]
  }
};

export default function GuideDetailPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  // Load guide data or fallback
  const guide = GUIDES_CONTENT[slug] || GUIDES_CONTENT["10-desk-accessories"];

  return (
    <div className="min-h-screen bg-white pb-20">
      
      {/* 1. TOP STICKY BAR */}
      <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-30 border-b border-[#EAEAEA]/25">
        <Link href="/guides" className="p-2 bg-[#F8F9FA] border border-[#EAEAEA] rounded-full hover:bg-gray-100 transition-all">
          <ChevronLeft className="w-5 h-5 text-[#111111]" />
        </Link>
        <div className="flex items-center gap-3">
          <button className="p-2 bg-[#F8F9FA] border border-[#EAEAEA] rounded-full hover:bg-gray-100 transition-all">
            <Share2 className="w-5 h-5 text-[#111111]" />
          </button>
        </div>
      </div>

      {/* 2. ARTICLE LAYOUT */}
      <article className="max-w-3xl mx-auto px-6 space-y-8 pt-4">
        
        {/* Meta Info */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold text-[#2E7D32] bg-[#2E7D32]/5 border border-[#2E7D32]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            {guide.category}
          </span>
          <h1 className="text-3xl lg:text-5xl font-serif font-bold text-[#111111] leading-tight">
            {guide.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#888888] pt-2">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> By {guide.author}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {guide.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {guide.readTime}</span>
          </div>
        </div>

        {/* Hero banner */}
        <div className="rounded-[36px] overflow-hidden bg-[#FAF9F5] border border-[#EAEAEA]/50 relative shadow-xs">
          <div className="aspect-video w-full">
            <img src={guide.image} alt={guide.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Dynamic editorial text */}
        <div className="space-y-6 pt-2">
          {guide.paragraphs.map((para, i) => (
            <p 
              key={i} 
              className={cn(
                "text-xs lg:text-sm text-[#444444] leading-relaxed",
                para.startsWith("1.") || para.startsWith("2.") || para.startsWith("3.")
                  ? "bg-[#FAF9F5] border border-[#ECE9DF] p-5 rounded-2xl font-medium text-[#111111] leading-relaxed my-4"
                  : ""
              )}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Article footer / Signoff */}
        <div className="pt-8 border-t border-[#F0F0F0] text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1C1612] to-[#4A3E3D] flex items-center justify-center text-white font-bold mx-auto">
            S
          </div>
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-sm text-[#111111]">Savor.it Editorial Curation</h4>
            <p className="text-[10px] text-[#888888] max-w-sm mx-auto leading-relaxed">Verified setup designs, mechanical peripherals, and custom desk lighting recommendations assembled directly for Savor.it readers.</p>
          </div>
        </div>

      </article>

    </div>
  );
}
