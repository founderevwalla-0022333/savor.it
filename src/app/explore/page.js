"use client";

import React, { useState } from 'react';

// ==========================================
// MOCK DATA (From your strict guidelines)
// ==========================================
const COLLECTIONS = [
  { id: "c1", title: "Minimal Workspace", items: 24, img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&q=80" },
  { id: "c2", title: "Cozy Study Setup", items: 18, img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80" },
  { id: "c3", title: "Creator Starter Kit", items: 32, img: "https://images.unsplash.com/photo-1598550476474-87563907a212?w=400&q=80" },
  { id: "c4", title: "Best Under $50", items: 45, img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80" },
];

const CATEGORIES = [
  {
    id: "cat1",
    name: "Workspace",
    icon: "🖥️",
    subs: ["Desks", "Monitor Stands", "Desk Shelves", "Cable Organizers", "Laptop Stands", "Desk Pads"]
  },
  {
    id: "cat2",
    name: "Lighting",
    icon: "💡",
    subs: ["Monitor Light Bars", "Desk Lamps", "Ambient Lights", "Warm Lighting", "Smart Bulbs"]
  },
  {
    id: "cat3",
    name: "Audio",
    icon: "🎧",
    subs: ["Headphones", "Speakers", "Microphones", "Audio Interfaces", "Earbuds"]
  },
  {
    id: "cat4",
    name: "Keyboards & Mice",
    icon: "⌨️",
    subs: ["Mechanical Keyboards", "Wireless Keyboards", "Mice", "Wrist Rests", "Switches"]
  },
  {
    id: "cat5",
    name: "Creator Gear",
    icon: "🎥",
    subs: ["Webcams", "Cameras", "Tripods", "Mic Arms", "Ring Lights"]
  },
  {
    id: "cat6",
    name: "Productivity",
    icon: "⏱️",
    subs: ["Timers", "Planners", "Focus Tools", "Desk Organizers", "Productivity Gadgets"]
  },
  {
    id: "cat7",
    name: "Minimal Living",
    icon: "🪴",
    subs: ["Storage", "Organizers", "Clean Desk Items", "Aesthetic Decor", "Calming Products"]
  },
  {
    id: "cat8",
    name: "Tech Essentials",
    icon: "🔌",
    subs: ["Chargers", "Power Banks", "Hubs", "Cables", "SSDs", "Adapters"]
  }
];

// ==========================================
// DISCOVER / CATALOG PAGE COMPONENT
// ==========================================
export default function ExplorePage() {
  const [activeMainTab, setActiveMainTab] = useState('Discover');
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  return (
    <div className="w-full min-h-screen bg-[#fafafa] pb-32 select-none animate-fade-in">
      
      {/* 1. TOP HEADER & MAIN NAVIGATION */}
      <div className="sticky top-0 z-50 bg-[#fafafa]/90 backdrop-blur-md pt-5 pb-3 px-4 border-b border-zinc-200/60 max-w-md mx-auto">
        <h1 className="text-2xl font-black tracking-tight text-zinc-900 mb-4 px-2">Discover</h1>
        
        {/* Pills Navigation (As per your structure) */}
        <div className="flex space-x-2 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden px-2">
          {['Discover', 'Collections', 'Categories', 'Guides', 'Brands'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveMainTab(tab)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeMainTab === tab 
                  ? 'bg-zinc-950 text-white shadow-md' 
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* =========================================
          VIEW 1: DISCOVER / COLLECTIONS HOME
          ========================================= */}
      {(activeMainTab === 'Discover' || activeMainTab === 'Collections') && (
        <div className="px-5 mt-6 max-w-md mx-auto space-y-8 animate-fade-in">
          
          {/* Curated Collections Grid */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-extrabold text-zinc-900 uppercase tracking-tight">Featured Collections</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {COLLECTIONS.map((col) => (
                <div key={col.id} className="relative group cursor-pointer active:scale-95 transition-transform">
                  <div className="w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-zinc-100 relative shadow-sm border border-zinc-200/20">
                    <img src={col.img} alt={col.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[9px] font-bold text-white/80 uppercase tracking-widest">{col.items} Items</span>
                      <h3 className="text-white font-black text-sm leading-tight mt-0.5">{col.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Emotional Banner (Promoting Calming Products) */}
          <section>
            <div className="w-full h-32 rounded-[1.8rem] bg-gradient-to-r from-[#d9e2e8] to-[#e8e4e1] relative overflow-hidden flex items-center px-6 cursor-pointer border border-zinc-200/30 shadow-sm active:scale-[0.99] transition-transform">
              <div className="relative z-10 w-2/3">
                <h3 className="text-lg font-black text-zinc-800 leading-tight">Elevate Your<br/>Everyday Carry</h3>
                <button className="mt-2 text-[10px] font-bold bg-white text-black px-3 py-1.5 rounded-full shadow-sm active:scale-95 transition-transform">Explore EDC →</button>
              </div>
              <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=300" className="absolute -right-4 -bottom-4 w-40 opacity-80" alt="EDC" />
            </div>
          </section>
        </div>
      )}

      {/* =========================================
          VIEW 2: CATEGORIES (Vertical Split View)
          ========================================= */}
      {activeMainTab === 'Categories' && (
        <div className="flex w-full max-w-md mx-auto mt-4 animate-fade-in h-[70vh]">
          
          {/* Left Side: Parent Categories Menu */}
          <div className="w-1/3 bg-[#f5f5f5] rounded-tr-3xl rounded-br-3xl overflow-y-auto [&::-webkit-scrollbar]:hidden pb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className={`w-full flex flex-col items-center justify-center p-4 text-center transition-colors border-l-4 ${
                  activeCategory.id === cat.id 
                    ? 'border-zinc-900 bg-white shadow-sm rounded-l-none rounded-r-2xl' 
                    : 'border-transparent text-zinc-500 hover:bg-zinc-200/50'
                }`}
              >
                <span className="text-xl mb-1">{cat.icon}</span>
                <span className={`text-[10px] font-bold ${activeCategory.id === cat.id ? 'text-zinc-900' : 'text-zinc-500'}`}>
                  {cat.name}
                </span>
              </button>
            ))}
          </div>

          {/* Right Side: Sub-categories Content */}
          <div className="w-2/3 px-5 py-4 overflow-y-auto [&::-webkit-scrollbar]:hidden pb-10 bg-[#fafafa]">
            <h3 className="text-lg font-black text-zinc-900 mb-4">{activeCategory.name}</h3>
            
            <div className="grid grid-cols-1 gap-2">
              {activeCategory.subs.map((sub, index) => (
                <button 
                  key={index}
                  className="flex items-center justify-between w-full p-4 bg-white rounded-2xl border border-zinc-100/80 shadow-[0_2px_10px_rgba(0,0,0,0.015)] active:bg-zinc-50 transition-colors group"
                >
                  <span className="text-xs font-bold text-zinc-700 group-hover:text-black">{sub}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-zinc-300 group-hover:text-zinc-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              ))}
            </div>
            
            {/* Promo block at bottom of subcategories */}
            <div className="mt-6 w-full h-24 bg-zinc-950 rounded-2xl p-4 flex flex-col justify-center relative overflow-hidden">
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Top Rated</span>
              <span className="text-sm font-black text-white mt-0.5">Best of {activeCategory.name}</span>
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
            </div>
          </div>

        </div>
      )}

      {/* Placeholders for Guides and Brands */}
      {(activeMainTab === 'Guides' || activeMainTab === 'Brands') && (
        <div className="flex flex-col items-center justify-center mt-32 px-6 text-center animate-fade-in">
          <span className="text-4xl mb-4">🚧</span>
          <h2 className="text-lg font-black text-zinc-900">Curating the best for you.</h2>
          <p className="text-xs font-medium text-zinc-500 mt-2">The {activeMainTab} section is currently being hand-picked by our editors.</p>
        </div>
      )}

    </div>
  );
}
