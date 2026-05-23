"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  const getActiveTab = () => {
    if (pathname === "/") return "home";
    if (pathname.includes("/category") || pathname.includes("/explore")) return "explore";
    if (pathname === "/profile") return "menu";
    return "home";
  };

  const activeTab = getActiveTab();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-50 lg:hidden">
      {/* Premium Glassmorphism Container */}
      <div className="flex items-center justify-between py-4 px-8 bg-white/40 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_12px_35px_rgba(0,0,0,0.12)]">
        
        {/* 1. HOME TAB */}
        <Link 
          href="/" 
          className="flex flex-col items-center justify-center relative"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className={`w-6 h-6 transition-all duration-200 ${
              activeTab === 'home' ? 'fill-black stroke-black' : 'fill-none stroke-zinc-800 stroke-[2]'
            }`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          {activeTab === 'home' && (
            <span className="absolute -bottom-2 w-1 h-1 bg-black rounded-full animate-fade-in" />
          )}
        </Link>

        {/* 2. SEARCH TAB */}
        <button 
          onClick={() => {
            // Scroll smoothly to top to show search bar
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Find and highlight/focus search bar after scroll
            setTimeout(() => {
              const searchInput = document.getElementById("header-search-input");
              if (searchInput) {
                searchInput.focus();
              }
              
              const searchBar = document.getElementById("header-search-bar");
              if (searchBar) {
                // Add highlight scale and focus rings
                searchBar.classList.add("ring-2", "ring-[#2E5A27]", "scale-[1.03]", "shadow-lg");
                setTimeout(() => {
                  searchBar.classList.remove("ring-2", "ring-[#2E5A27]", "scale-[1.03]", "shadow-lg");
                }, 1500);
              }
            }, 350);
          }}
          className="flex flex-col items-center justify-center relative cursor-pointer active:scale-95 transition-transform"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            className={`w-6 h-6 transition-all duration-200 stroke-[2.5] text-zinc-800 hover:text-black`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>

        {/* 3. EXPLORE / COMPASS TAB */}
        <Link 
          href="/category/all" 
          className="flex flex-col items-center justify-center relative"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            className={`w-6 h-6 transition-all duration-200 stroke-[2] ${
              activeTab === 'explore' ? 'text-black scale-105' : 'text-zinc-800'
            }`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 8.25l-3.293 4.707a1 1 0 01-.657.414l-2.421.484.484-2.421a1 1 0 01.414-.657l4.707-3.293a1 1 0 011.165.165l.6-.6z" />
          </svg>
          {activeTab === 'explore' && (
            <span className="absolute -bottom-2 w-1 h-1 bg-black rounded-full animate-fade-in" />
          )}
        </Link>

        {/* 5. MENU / GRID TAB (Replaced Profile) */}
        <Link 
          href="/profile" 
          className="flex flex-col items-center justify-center relative"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className={`w-6 h-6 transition-all duration-200 ${
              activeTab === 'menu' ? 'fill-black stroke-black' : 'fill-none stroke-zinc-800 stroke-[2]'
            }`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.5A2.25 2.25 0 0110.75 6v2.5a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.5V6zm10 0A2.25 2.25 0 0116 3.75h2.5A2.25 2.25 0 0120.75 6v2.5a2.25 2.25 0 01-2.25 2.25H16a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.5A2.25 2.25 0 016 13.25h2.5a2.25 2.25 0 012.25 2.25v2.5a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25v-2.5zm10 0a2.25 2.25 0 012.25-2.25h2.5a2.25 2.25 0 012.25 2.25v2.5a2.25 2.25 0 01-2.25 2.25H16a2.25 2.25 0 01-2.25-2.25v-2.5z" />
          </svg>
          {activeTab === 'menu' && (
            <span className="absolute -bottom-2 w-1 h-1 bg-black rounded-full animate-fade-in" />
          )}
        </Link>

      </div>
    </div>
  );
}
