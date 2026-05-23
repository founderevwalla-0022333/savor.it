"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SUGGESTIONS = ["Warm Oak Desks", "Minimalist Keyboards", "Acoustic Setup", "Japandi Style"];

export default function TopBar() {
  // Color cycling for Sparkle
  const [colorIndex, setColorIndex] = useState(0);
  const beepColors = ['text-red-500', 'text-green-500', 'text-orange-500'];

  // Suggestion rotating for Search Bar
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    // Sparkle dot cycle every 800ms
    const sparkleInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % beepColors.length);
    }, 800);

    // Suggestion cycle every 4500ms
    const searchInterval = setInterval(() => {
      setSuggestionIndex((prev) => (prev + 1) % SUGGESTIONS.length);
    }, 4500);

    return () => {
      clearInterval(sparkleInterval);
      clearInterval(searchInterval);
    };
  }, []);

  return (
    <>
      {/* Importing Google Fonts directly into the component */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Corinthia:wght@400;700&family=Lato:wght@400;700;900&display=swap');
          
          /* Custom Font Classes */
          .font-corinthia { 
            font-family: 'Corinthia', cursive; 
            font-weight: 700;
            -webkit-text-stroke: 1.5px #09090b; /* Premium inked bold stroke */
          }
          .font-lato { font-family: 'Lato', sans-serif; }
        `}
      </style>

      <header className="sticky top-0 z-40 bg-[#FCFBF9]/70 backdrop-blur-xl border-b border-[#E8E6E0]/30 w-full pt-4 pb-4 md:pt-5 md:pb-5 transition-all select-none">
        <div className="w-full max-w-[1040px] mx-auto px-4 md:px-8 flex flex-col gap-4 md:gap-5">
          
          {/* ROW 1: Logo & Actions */}
          <div className="flex items-center justify-between w-full">
            
            {/* LEFT: Savor.it Animated Logo (Using Corinthia Cursive Font) */}
            <Link href="/" className="flex items-center cursor-pointer select-none group">
              <span className="text-4xl sm:text-5xl text-zinc-950 font-corinthia font-bold leading-none mt-1">
                Savor.it
              </span>
            </Link>

            {/* RIGHT: UI Actions (Using Clean Lato Font for structure) */}
            <div className="flex items-center space-x-5">
              
              {/* Cart Icon (Instead of Heart) */}
              <Link href="/wishlist" className="flex items-center space-x-2 group active:scale-95 transition-transform">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 fill-none stroke-zinc-800 stroke-[2] group-hover:stroke-black transition-colors"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                </svg>
                <span className="text-xs font-bold text-zinc-800 tracking-wide font-lato hidden sm:block">
                  CART
                </span>
              </Link>

              {/* Menu / Grid Icon (Instead of Profile) */}
              <Link href="/profile" className="flex items-center space-x-2 group active:scale-95 transition-transform">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 fill-none stroke-zinc-800 stroke-[2] group-hover:stroke-black transition-colors"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.5A2.25 2.25 0 0110.75 6v2.5a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.5V6zm10 0A2.25 2.25 0 0116 3.75h2.5A2.25 2.25 0 0120.75 6v2.5a2.25 2.25 0 01-2.25 2.25H16a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.5A2.25 2.25 0 016 13.25h2.5a2.25 2.25 0 012.25 2.25v2.5a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25v-2.5zm10 0a2.25 2.25 0 012.25-2.25h2.5a2.25 2.25 0 012.25 2.25v2.5a2.25 2.25 0 01-2.25 2.25H16a2.25 2.25 0 01-2.25-2.25v-2.5z" />
                </svg>
                <span className="text-xs font-bold text-zinc-800 tracking-wide font-lato hidden sm:block">
                  MENU
                </span>
              </Link>
              
            </div>
          </div>

          {/* ROW 2: Search Bar */}
          <div className="w-full max-w-2xl mx-auto">
            <div 
              id="header-search-bar"
              className={`relative group flex items-center w-full h-11 md:h-12 bg-[#FAF9F6]/90 border rounded-full shadow-sm hover:bg-white transition-all duration-500 ${
                isFocused ? 'border-[#2E5A27] ring-2 ring-[#2E5A27]/20 bg-white' : 'border-[#E8E6E0] hover:border-[#141414]/20'
              }`}
            >
              <div className="pl-5 flex items-center shrink-0 pointer-events-none">
                <Search className={`h-4 w-4 md:h-5 md:w-5 transition-colors duration-300 ${isFocused ? 'text-[#2E5A27]' : 'text-[#888888] group-hover:text-[#141414]'}`} strokeWidth={1.5} />
              </div>
              
              <div className="relative flex-1 h-full ml-3 flex items-center">
                {/* Rotating Suggestion Overlay (visible only when not focused and value is empty) */}
                {!isFocused && searchValue === "" && (
                  <div className="absolute inset-0 flex items-center pointer-events-none">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={suggestionIndex}
                        initial={{ y: 8, opacity: 0 }}
                        animate={{ y: 0, opacity: 0.65 }}
                        exit={{ y: -8, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="text-sm md:text-[15px] text-[#141414] font-medium tracking-wide font-satoshi"
                      >
                        Search "{SUGGESTIONS[suggestionIndex]}"
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}

                {/* Real Input Element */}
                <input
                  id="header-search-input"
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="w-full h-full bg-transparent text-sm md:text-[15px] text-[#141414] font-medium tracking-wide font-satoshi outline-none"
                />
              </div>

              <div className="pr-2 flex items-center shrink-0">
                <div className="px-2.5 py-1 rounded-full bg-[#F0EFEA] flex items-center justify-center border border-[#E8E6E0]/50 group-hover:bg-[#E3E1D9] transition-colors">
                  <span className="text-[10px] md:text-xs font-bold text-[#666666] tracking-wider font-satoshi">⌘K</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>
    </>
  );
}
