"use client";

import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#FCFBF9] px-6 select-none animate-fade-in">
      
      {/* Premium Coming Soon Glass Container */}
      <div className="w-full max-w-md bg-white/40 backdrop-blur-xl border border-[#E8E6E0]/60 p-8 rounded-[2.5rem] shadow-[0_12px_35px_rgba(0,0,0,0.06)] text-center space-y-6">
        
        {/* Animated Glow Sparkle Icon */}
        <div className="w-16 h-16 mx-auto rounded-full bg-[#2E5A27]/5 border border-[#2E5A27]/15 flex items-center justify-center text-[#2E5A27] animate-pulse">
          <Sparkles className="w-6 h-6" strokeWidth={1.5} />
        </div>

        <div className="space-y-2">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#2E5A27] font-bold">
            Curator Spaces
          </p>
          <h1 className="text-3xl font-serif text-[#141414] heading-canela">
            Profile Portal
          </h1>
          <p className="text-sm text-[#777672] font-satoshi font-medium leading-relaxed max-w-xs mx-auto">
            Your personalized editorial setup portfolio and dynamic atmosphere vault is currently being crafted.
          </p>
        </div>

        {/* Coming Soon Premium Tag */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#FAF9F6] border border-[#E8E6E0] text-[10px] font-bold text-[#141414] tracking-widest uppercase">
          Coming Soon
        </div>

        <div className="pt-4 border-t border-[#E8E6E0]/40">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-bold text-[#2E5A27] hover:text-[#1A3B14] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Discovery
          </Link>
        </div>

      </div>
    </div>
  );
}
