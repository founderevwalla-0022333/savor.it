"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Compass,
  Grid,
  Layers,
  Award,
  BookOpen,
  Bookmark,
  User,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", href: "/", icon: Home },
  { name: "Explore", href: "/explore", icon: Compass },
  { name: "Collections", href: "/collections", icon: Grid },
  { name: "Categories", href: "/categories", icon: Layers },
  { name: "Brands", href: "/brands", icon: Award },
  { name: "Guides", href: "/guides", icon: BookOpen },
];

const SECONDARY_NAV_ITEMS = [
  { name: "Saved", href: "/saved", icon: Bookmark },
  { name: "Profile", href: "/profile", icon: User },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#FCFBF9] border-r border-[#EAE8E2] hidden lg:flex flex-col z-50 select-none">
      <div className="p-8">
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="font-serif font-semibold text-xl tracking-tight text-[#141414] transition-colors group-hover:text-[#2E5A27] duration-300 heading-canela">Savor.it</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#2E5A27] opacity-80 group-hover:scale-125 transition-transform duration-300"></span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto no-scrollbar font-satoshi">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300",
                isActive 
                  ? "bg-white text-[#141414] shadow-premium border border-[#EAE8E2]/60" 
                  : "text-[#777672] hover:bg-[#FAF9F6] hover:text-[#141414]"
              )}
            >
              <Icon className={cn("w-[18px] h-[18px]", isActive ? "text-[#2E5A27]" : "text-[#8E8D88]")} strokeWidth={isActive ? 1.85 : 1.4} />
              {item.name}
            </Link>
          );
        })}

        <div className="my-5 border-t border-[#EAE8E2] mx-4 opacity-60"></div>

        {SECONDARY_NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300",
                isActive 
                  ? "bg-white text-[#141414] shadow-premium border border-[#EAE8E2]/60" 
                  : "text-[#777672] hover:bg-[#FAF9F6] hover:text-[#141414]"
              )}
            >
              <Icon className={cn("w-[18px] h-[18px]", isActive ? "text-[#2E5A27]" : "text-[#8E8D88]")} strokeWidth={isActive ? 1.85 : 1.4} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Campaign box redesigned strictly in Satoshi & soft warm surface */}
      <div className="p-6 mt-auto font-satoshi">
        <div className="bg-[#FAF9F6] border border-[#EAE8E2] p-5 rounded-2xl relative overflow-hidden shadow-inset-subtle">
          <h4 className="font-serif text-sm font-semibold text-[#141414] mb-1.5 relative z-10 heading-canela">Create your<br/>dream setup</h4>
          <p className="text-[10px] text-[#777672] leading-relaxed mb-3.5 relative z-10 font-light">Answer a few workspace questions and our editors will design the perfect setup aura for you.</p>
          <button className="flex items-center gap-1 bg-[#141414] hover:bg-[#2E5A27] text-white px-4 py-2 rounded-lg text-[9px] font-bold tracking-widest uppercase transition-all duration-300 relative z-10 shadow-sm active:scale-95">
            Get Started <ArrowRight className="w-3 h-3" />
          </button>
          
          <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#2E5A27]/5 to-transparent rounded-full blur-lg"></div>
        </div>
      </div>
    </aside>
  );
}
