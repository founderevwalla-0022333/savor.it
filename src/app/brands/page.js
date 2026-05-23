"use client";

import Link from "next/link";
import { Sparkles, Grid, ArrowUpRight, Compass, ShieldCheck } from "lucide-react";

const BRANDS = [
  {
    name: "Herman Miller",
    specialty: "Premium Ergonomics",
    desc: "Renowned globally for the Aeron and Embody chairs. Setting the absolute gold standard in orthopedic physical health and seating design.",
    logo: "🪑",
    popularity: "9.8 / 10",
    setupsCount: 14,
    tags: ["Chairs", "Desks", "Ergonomics"]
  },
  {
    name: "Keychron",
    specialty: "Mechanical Keyboards",
    desc: "Crafting beautiful, tactile tactile keyboards that support macOS media shortcuts out of the box. The typing companion of modern coders.",
    logo: "⌨️",
    popularity: "9.5 / 10",
    setupsCount: 22,
    tags: ["Keyboards", "Wireless", "Hot-swap"]
  },
  {
    name: "Logitech",
    specialty: "Productivity Peripherals",
    desc: "The creator of the MX series. Contoured layout mouse grips, custom magnetic scrolling wheels, and multi-device connection triggers.",
    logo: "🖱️",
    popularity: "9.7 / 10",
    setupsCount: 18,
    tags: ["Mouse", "Keys", "Accessories"]
  },
  {
    name: "BenQ",
    specialty: "Asymmetric Eye-care Lighting",
    desc: "Pioneered monitor lighting bar setups that bounce illumination perfectly over typing paths while cutting screen reflections entirely.",
    logo: "💡",
    popularity: "9.6 / 10",
    setupsCount: 12,
    tags: ["Lightbar", "Monitors", "Eye-health"]
  },
  {
    name: "Elgato",
    specialty: "Creator Custom Decks",
    desc: "High-fidelity video interfaces, stream decks, macro keyboards, and smart studio rings that help creators run broadcast feeds smoothly.",
    logo: "🎬",
    popularity: "9.2 / 10",
    setupsCount: 8,
    tags: ["Streaming", "Lighting", "Acoustics"]
  },
  {
    name: "Sony",
    specialty: "Active Noise-Cancelling Audio",
    desc: "The undisputed lead in isolating ambient distractions. Heavy bass tones, spatial audio, and premium memory foam cups.",
    logo: "🔊",
    popularity: "9.4 / 10",
    setupsCount: 10,
    tags: ["Headphones", "Spatial-Audio", "Hi-Fi"]
  }
];

export default function BrandsPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Editorial Header */}
      <div className="px-6 lg:px-10 pt-10 pb-6 max-w-5xl mx-auto space-y-1 border-b border-[#EAEAEA]/60">
        <span className="text-[10px] font-bold tracking-widest text-[#2E7D32] uppercase flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 fill-[#2E7D32]/10" /> Curation Partners
        </span>
        <h1 className="text-3xl lg:text-4xl font-serif font-bold text-[#111111]">Curated Brands</h1>
        <p className="text-xs text-[#888888] max-w-sm">We only select design houses that adhere to pure aesthetics and ergonomics.</p>
      </div>

      {/* Brands List Grid */}
      <div className="px-6 lg:px-10 py-8 max-w-5xl mx-auto space-y-8">
        
        {/* Brand guarantee banner */}
        <div className="bg-[#FAF9F5] border border-[#ECE9DF] p-6 rounded-[28px] flex items-center gap-4">
          <ShieldCheck className="w-6 h-6 text-[#2E7D32] shrink-0" />
          <p className="text-xs text-[#666666] leading-relaxed">
            <span className="font-bold text-[#111111]">Affiliated Quality:</span> Every product recommended under these brand banners undergoes rigorous structural cable check, color calibration compliance, and tactile feedback verification before listing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BRANDS.map((b) => (
            <div 
              key={b.name} 
              className="bg-white border border-[#EAEAEA] rounded-[32px] p-8 flex flex-col justify-between space-y-6 hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#F8F9FA] border border-[#EAEAEA] flex items-center justify-center text-2xl shadow-xs">
                      {b.logo}
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-base text-[#111111]">{b.name}</h3>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#2E7D32]">{b.specialty}</span>
                    </div>
                  </div>
                  
                  <span className="text-[10px] font-bold text-[#888888] bg-[#F8F9FA] px-2.5 py-1 rounded-full">
                    POPULARITY: {b.popularity}
                  </span>
                </div>
                
                <p className="text-xs text-[#666666] leading-relaxed">{b.desc}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F5F5F5]">
                {b.tags.map((tag) => (
                  <span key={tag} className="text-[9px] font-bold text-[#888888] bg-[#F8F9FA] px-2.5 py-1 rounded-xl">
                    #{tag.toUpperCase()}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#111111]">{b.setupsCount} associated setups</span>
                <Link href={`/category/all`} className="text-xs font-bold text-[#2E7D32] flex items-center gap-1 hover:underline">
                  Browse Gear <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
