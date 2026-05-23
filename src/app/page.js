"use client";

import React, { useState, useRef } from 'react';
import CozyHeroSection from "@/components/CozyHeroSection";
import HomeExploreSections from "@/components/HomeExploreSections";
import HomepageContent from "@/components/HomepageContent";

// ==========================================
// MOCK DATA (Categories & Products)
// ==========================================
const COLLECTIONS = [
  { id: "c1", title: "Minimal Workspace", items: 24, img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&q=80" },
  { id: "c2", title: "Cozy Study Setup", items: 18, img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80" },
  { id: "c3", title: "Creator Starter Kit", items: 32, img: "https://images.unsplash.com/photo-1598550476474-87563907a212?w=400&q=80" },
  { id: "c4", title: "Best Under $50", items: 45, img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80" },
];

const CATEGORIES = [
  { id: "cat1", name: "Workspace", icon: "🖥️", subs: ["Desks", "Monitor Stands", "Desk Shelves", "Cable Organizers", "Laptop Stands", "Desk Pads"] },
  { id: "cat2", name: "Lighting", icon: "💡", subs: ["Monitor Light Bars", "Desk Lamps", "Ambient Lights", "Warm Lighting", "Smart Bulbs"] },
  { id: "cat3", name: "Audio", icon: "🎧", subs: ["Headphones", "Speakers", "Microphones", "Audio Interfaces", "Earbuds"] },
  { id: "cat4", name: "Keyboards", icon: "⌨️", subs: ["Mechanical", "Wireless", "Mice", "Wrist Rests", "Switches"] },
  { id: "cat5", name: "Creator Gear", icon: "🎥", subs: ["Webcams", "Cameras", "Tripods", "Mic Arms", "Ring Lights"] }
];

const PRODUCT = {
  brand: "NUPHY",
  title: "Halo75 V2 Wireless Mechanical Keyboard",
  rating: 4.8,
  reviews: "1.2k",
  price: "$129.00",
  description: "Elevate your cozy setup. Features ghostbar acoustic dampening, hot-swappable switches, and a solid aluminum frame designed for pure typing acoustics. Whether you're coding late into the night or gaming, the tactile feedback is unmatched.",
  specs: ["Bluetooth 5.0 / 2.4G", "Hot-swappable PCB", "RGB Backlight", "Mac & Windows support"],
  images: [
    { id: 0, color: "Obsidian Black", hex: "#27272a", glow: "rgba(39, 39, 42, 0.6)", url: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800" },
    { id: 1, color: "Ionic White", hex: "#f4f4f5", glow: "rgba(200, 200, 210, 0.8)", url: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800" },
    { id: 2, color: "Neon Cyber", hex: "#c026d3", glow: "rgba(192, 38, 211, 0.6)", url: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800" }
  ],
  similar: [
    { id: 101, title: "Keychron Q1 Pro", price: "$199", img: "https://images.unsplash.com/photo-1647412708301-1b29cebd1384?w=300" },
    { id: 102, title: "Logitech MX Mechanical", price: "$169", img: "https://images.unsplash.com/photo-1595007328906-8c4d2fb32252?w=300" },
    { id: 103, title: "Lofree Flow", price: "$159", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300" }
  ]
};

// ==========================================
// 1. ULTRA FROSTED NAVBAR (As requested)
// ==========================================
const UltraFrostedNavbar = ({ currentScreen, setCurrentScreen }) => {
  return (
    // z-[999] ensures ye sabse upar rahega aur fixed bottom par rahega
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md md:max-w-lg z-[999]">
      
      {/* PERFECT FROSTED GLASS EFFECT */}
      {/* bg-white/60 aur backdrop-blur-2xl ek ultra-premium blur denge */}
      <div className="flex items-center justify-between py-4 px-8 md:px-12 bg-white/60 backdrop-blur-2xl border border-white/40 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.1)] md:shadow-[0_12px_48px_rgba(0,0,0,0.12)]">
        
        {/* 1. HOME TAB */}
        <button 
          onClick={() => setCurrentScreen('home')} 
          className="flex flex-col items-center justify-center relative active:scale-95 transition-transform"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className={`w-6 h-6 transition-all duration-200 ${
              currentScreen === 'home' ? 'fill-black stroke-black' : 'fill-none stroke-zinc-800 stroke-[2]'
            }`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          {currentScreen === 'home' && (
            <span className="absolute -bottom-2 w-1 h-1 bg-black rounded-full" />
          )}
        </button>

        {/* 2. SEARCH TAB */}
        <button 
          onClick={() => {
            setCurrentScreen('home');
            setTimeout(() => {
              const el = document.getElementById('header-search-input');
              if (el) el.focus();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
          }} 
          className="flex flex-col items-center justify-center relative active:scale-95 transition-transform"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            className="w-6 h-6 stroke-[2.5] text-zinc-800 hover:text-black transition-colors"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>

        {/* 3. EXPLORE / COMPASS TAB */}
        <button 
          onClick={() => setCurrentScreen('discover')} 
          className="flex flex-col items-center justify-center relative active:scale-95 transition-transform"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            className={`w-6 h-6 transition-all duration-200 stroke-[2] ${
              currentScreen === 'discover' ? 'text-black scale-105' : 'text-zinc-800'
            }`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 8.25l-3.293 4.707a1 1 0 01-.657.414l-2.421.484.484-2.421a1 1 0 01.414-.657l4.707-3.293a1 1 0 011.165.165l.6-.6z" />
          </svg>
          {currentScreen === 'discover' && (
            <span className="absolute -bottom-2 w-1 h-1 bg-black rounded-full" />
          )}
        </button>

        {/* 4. CART / BAG TAB */}
        <button 
          onClick={() => setCurrentScreen('future')} 
          className="flex flex-col items-center justify-center relative active:scale-95 transition-transform"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className={`w-6 h-6 transition-all duration-200 ${
              currentScreen === 'future' ? 'fill-black stroke-black' : 'fill-none stroke-zinc-800 stroke-[2]'
            }`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
          </svg>
          {currentScreen === 'future' && (
            <span className="absolute -bottom-2 w-1 h-1 bg-black rounded-full" />
          )}
        </button>

        {/* 5. MENU / GRID TAB */}
        <button 
          onClick={() => setCurrentScreen('categories')} 
          className="flex flex-col items-center justify-center relative active:scale-95 transition-transform"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className={`w-6 h-6 transition-all duration-200 ${
              currentScreen === 'categories' ? 'fill-black stroke-black' : 'fill-none stroke-zinc-800 stroke-[2]'
            }`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.5A2.25 2.25 0 0110.75 6v2.5a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.5V6zm10 0A2.25 2.25 0 0116 3.75h2.5A2.25 2.25 0 0120.75 6v2.5a2.25 2.25 0 01-2.25 2.25H16a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.5A2.25 2.25 0 016 13.25h2.5a2.25 2.25 0 012.25 2.25v2.5a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25v-2.5zm10 0a2.25 2.25 0 012.25-2.25h2.5a2.25 2.25 0 012.25 2.25v2.5a2.25 2.25 0 01-2.25 2.25H16a2.25 2.25 0 01-2.25-2.25v-2.5z" />
          </svg>
          {currentScreen === 'categories' && (
            <span className="absolute -bottom-2 w-1 h-1 bg-black rounded-full" />
          )}
        </button>

      </div>
    </div>
  );
};

// ==========================================
// 2. HOME VIEW (Discovery Feed)
// ==========================================
const HomeView = ({ onProductClick, onCategoryCatalogClick }) => {
  return (
    <div className="w-full">
      <CozyHeroSection onExploreClick={onProductClick} />
      <HomeExploreSections 
        onProductClick={onProductClick} 
        onCategoryCatalogClick={onCategoryCatalogClick} 
      />
      <HomepageContent 
        onProductClick={onProductClick} 
        onCategoryCatalogClick={onCategoryCatalogClick} 
      />
    </div>
  );
};

// ==========================================
// 3. CATEGORIES / DISCOVER PAGE
// ==========================================
const DiscoverPage = ({ initialTab = 'Categories' }) => {
  const [activeMainTab, setActiveMainTab] = useState(initialTab);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  return (
    <div className="w-full pb-32 animate-fade-in select-none">
      
      {/* Top Header Navigation */}
      <div className="sticky top-0 z-40 bg-[#fafafa]/90 backdrop-blur-md pt-3 pb-3 px-4 md:px-8 border-b border-zinc-200/60 max-w-md md:max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-black tracking-tight text-zinc-900 mb-4 px-2">Discover</h1>
        
        {/* Navigation Pills */}
        <div className="flex space-x-2 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden px-2">
          {['Discover', 'Categories', 'Guides'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveMainTab(tab)}
              className={`whitespace-nowrap px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
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

      {/* Discover Curated Collections */}
      {activeMainTab === 'Discover' && (
        <div className="px-5 md:px-8 mt-6 max-w-md md:max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 animate-fade-in">
          {COLLECTIONS.map((col) => (
            <div key={col.id} className="relative group cursor-pointer active:scale-95 transition-transform">
              <div className="w-full aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-zinc-100 relative shadow-sm md:shadow-md border border-zinc-200/20 md:hover:shadow-lg md:transition-shadow md:duration-300">
                <img src={col.img} alt={col.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[9px] font-bold text-white/80 uppercase tracking-widest">{col.items} Items</span>
                  <h3 className="text-white font-black text-sm leading-tight mt-0.5">{col.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Split Categories View */}
      {activeMainTab === 'Categories' && (
        <div className="flex w-full max-w-md md:max-w-6xl mx-auto mt-4 h-[65vh] md:h-[70vh] animate-fade-in">
          
          {/* Left Panel */}
          <div className="w-1/3 md:w-1/4 bg-[#f5f5f5] rounded-r-3xl overflow-y-auto [&::-webkit-scrollbar]:hidden pb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className={`w-full flex flex-col items-center justify-center p-4 text-center transition-colors border-l-4 ${
                  activeCategory.id === cat.id 
                    ? 'border-zinc-900 bg-white shadow-sm rounded-r-2xl' 
                    : 'border-transparent text-zinc-500 hover:bg-zinc-200/50'
                }`}
              >
                <span className="text-2xl mb-1">{cat.icon}</span>
                <span className={`text-[10px] font-bold ${activeCategory.id === cat.id ? 'text-zinc-900' : 'text-zinc-500'}`}>
                  {cat.name}
                </span>
              </button>
            ))}
          </div>

          {/* Right Panel */}
          <div className="w-2/3 md:w-3/4 px-5 md:px-8 py-2 overflow-y-auto [&::-webkit-scrollbar]:hidden pb-10 bg-[#fafafa]">
            <h3 className="text-lg md:text-xl font-black text-zinc-900 mb-4">{activeCategory.name}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
              {activeCategory.subs.map((sub, idx) => (
                <button 
                  key={idx}
                  className="flex items-center justify-between w-full p-4 md:p-5 bg-white rounded-2xl border border-zinc-100/80 shadow-[0_2px_10px_rgba(0,0,0,0.015)] active:bg-zinc-50 md:hover:bg-zinc-50 md:hover:border-zinc-200 transition-colors group md:cursor-pointer"
                >
                  <span className="text-xs font-bold text-zinc-700 group-hover:text-black">{sub}</span>
                  <span className="text-zinc-300 group-hover:text-zinc-600">→</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Guides Placeholder */}
      {activeMainTab === 'Guides' && (
        <div className="flex flex-col items-center justify-center mt-28 px-6 text-center animate-fade-in">
          <span className="text-4xl mb-4">🚧</span>
          <h2 className="text-lg font-black text-zinc-900">Curating Guides...</h2>
          <p className="text-xs font-medium text-zinc-500 mt-2">Our editors are compiling the perfect setup manuals.</p>
        </div>
      )}

    </div>
  );
};

// ==========================================
// 4. SWIPEABLE PRODUCT DETAIL VIEW (FullScreen Overlay)
// ==========================================
const ProductDetailView = ({ onBack }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  // Track scroll to update active image variant automatically
  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const width = sliderRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / width);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < PRODUCT.images.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  // Smooth variant scrolling
  const scrollToImage = (index) => {
    setActiveIndex(index);
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({ left: width * index, behavior: 'smooth' });
    }
  };

  const activeImageData = PRODUCT.images[activeIndex] || PRODUCT.images[0];

  return (
    <div className="fixed inset-0 z-[999] bg-[#fafafa] overflow-y-auto animate-fade-in pb-32">
      
      {/* 1. TOP UTILITY BAR (Below main header) */}
      <div className="flex items-center px-4 md:px-8 py-4 sticky top-0 bg-[#fafafa]/90 backdrop-blur-md z-40 max-w-md md:max-w-6xl mx-auto">
        <button onClick={onBack} className="flex items-center text-sm font-bold text-zinc-600 hover:text-black transition-colors active:scale-95 duration-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Shop
        </button>
      </div>

      {/* 2. AMBIENT IMAGE CAROUSEL (Scrolls horizontally) */}
      <section className="relative w-full max-w-md md:max-w-6xl mx-auto mt-2 px-4 md:px-8">
        {/* The Ambilight Glow Background */}
        <div 
          className="absolute inset-8 top-12 blur-[60px] opacity-90 transition-colors duration-700 ease-in-out pointer-events-none rounded-full"
          style={{ backgroundColor: activeImageData.glow }}
        />
        
        {/* Image Slider */}
        <div 
          ref={sliderRef}
          onScroll={handleScroll}
          className="relative z-10 w-full aspect-square md:aspect-[16/9] lg:aspect-[2/1] flex overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden rounded-[2rem] md:rounded-[2.5rem] shadow-xl md:shadow-2xl shadow-black/5 bg-white border border-zinc-100"
        >
          {PRODUCT.images.map((img) => (
            <div key={img.id} className="min-w-full h-full snap-center flex items-center justify-center bg-white p-2">
              <img src={img.url} alt="Product" className="w-full h-full object-cover rounded-[1.5rem]" />
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center space-x-1.5 mt-4">
          {PRODUCT.images.map((_, i) => (
            <span key={i} className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-6 bg-zinc-800' : 'w-1.5 bg-zinc-300'}`} />
          ))}
        </div>
      </section>

      {/* 3. PRODUCT INFO & PRICING */}
      <section className="px-5 md:px-8 mt-6 max-w-md md:max-w-6xl mx-auto">
        <span className="text-[10px] font-black tracking-widest text-zinc-400 uppercase">{PRODUCT.brand}</span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-zinc-900 leading-tight mt-1">{PRODUCT.title}</h1>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center text-orange-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
            <span className="text-sm font-bold ml-1 text-zinc-800">{PRODUCT.rating} <span className="text-zinc-400 font-medium">({PRODUCT.reviews})</span></span>
          </div>
          <span className="text-2xl md:text-3xl font-black text-zinc-900">{PRODUCT.price}</span>
        </div>
      </section>

      {/* 4. COLOR VARIANTS */}
      <section className="px-5 md:px-8 mt-8 max-w-md md:max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-3">
          <h3 className="text-sm font-extrabold text-zinc-900">Color Variant</h3>
          <span className="text-xs font-bold text-zinc-500">{activeImageData.color}</span>
        </div>
        <div className="flex space-x-3">
          {PRODUCT.images.map((variant, idx) => (
            <button
              key={variant.id}
              onClick={() => scrollToImage(idx)}
              className={`w-12 h-12 rounded-full p-1 transition-all duration-300 ${activeIndex === idx ? 'border-2 border-zinc-900 scale-110' : 'border-2 border-transparent opacity-50 hover:opacity-100'}`}
            >
              <div className="w-full h-full rounded-full shadow-inner border border-black/10" style={{ backgroundColor: variant.hex }} />
            </button>
          ))}
        </div>
      </section>

      {/* 5. BIG INLINE CTA BUTTON */}
      <section className="px-5 md:px-8 mt-8 max-w-md md:max-w-6xl mx-auto">
        <button className="w-full bg-zinc-950 text-white rounded-[1.2rem] py-4 px-6 flex items-center justify-center space-x-2 active:scale-[0.98] transition-transform shadow-lg shadow-zinc-900/20">
          <span className="text-sm font-extrabold tracking-wide uppercase">Check Live Price</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </button>
      </section>

      {/* 6. DESCRIPTION & SPECS */}
      <section className="px-5 md:px-8 mt-10 max-w-md md:max-w-6xl mx-auto border-t border-zinc-200 pt-8">
        <h3 className="text-base md:text-lg font-extrabold text-zinc-900 mb-3">Product Overview</h3>
        <p className="text-sm md:text-base text-zinc-500 font-medium leading-relaxed">{PRODUCT.description}</p>
        
        <ul className="mt-5 space-y-2">
          {PRODUCT.specs.map((spec, i) => (
            <li key={i} className="flex items-center text-sm font-medium text-zinc-700">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 mr-3" />
              {spec}
            </li>
          ))}
        </ul>
      </section>

      {/* 7. SIMILAR PRODUCTS */}
      <section className="mt-12 max-w-md md:max-w-6xl mx-auto border-t border-zinc-200 pt-8">
        <div className="px-5 mb-4">
            <h3 className="text-base md:text-lg font-extrabold text-zinc-900 uppercase tracking-tight">Similar Products</h3>
        </div>
        
        <div className="flex md:grid md:grid-cols-3 space-x-4 md:space-x-0 md:gap-6 overflow-x-auto md:overflow-x-visible snap-x md:snap-none scroll-smooth [&::-webkit-scrollbar]:hidden px-5 md:px-8 pb-4">
          {PRODUCT.similar.map((item) => (
            <div key={item.id} className="min-w-[140px] md:min-w-0 snap-start cursor-pointer group active:scale-95 md:active:scale-100 md:hover:scale-[1.02] transition-transform md:transition-all md:duration-300">
              <div className="w-full h-32 md:h-44 bg-[#f0f0f0] rounded-[1.2rem] md:rounded-[1.5rem] p-2 md:p-4 flex items-center justify-center border border-zinc-200/50">
                <img src={item.img} className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl shadow-sm mix-blend-multiply" alt={item.title} />
              </div>
              <div className="mt-2">
                <h4 className="text-xs font-bold text-zinc-900 truncate">{item.title}</h4>
                <span className="text-xs font-black text-zinc-500 mt-0.5 block">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};


// 4.2. SLEEK CART/BAG VIEW
// ==========================================
const CartView = ({ onExploreClick }) => {
  return (
    <div className="w-full max-w-md md:max-w-3xl mx-auto px-5 md:px-8 pt-8 md:pt-12 pb-32 animate-fade-in select-none">
      <h1 className="text-2xl md:text-3xl font-black tracking-tight text-zinc-900 mb-6">Shopping Bag</h1>
      
      <div className="bg-white border border-zinc-100/80 rounded-[2.5rem] p-8 md:p-12 text-center shadow-[0_8px_30px_rgba(0,0,0,0.02)] mt-8">
        <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-zinc-100/50">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className="w-8 h-8 fill-none stroke-zinc-400 stroke-[1.8]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
          </svg>
        </div>
        
        <h3 className="text-base font-black text-zinc-800 mb-2">Your shopping bag is empty</h3>
        <p className="text-xs text-zinc-400 max-w-[200px] mx-auto leading-relaxed mb-8">
          Save products you love and discover the perfect aesthetic desk space gear.
        </p>
        
        <button 
          onClick={onExploreClick}
          className="w-full bg-zinc-950 text-white rounded-full py-4 text-xs font-black tracking-widest uppercase active:scale-98 transition-transform shadow-lg shadow-zinc-950/10"
        >
          Explore Curations
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 5. MAIN ROUTER (App)
// ==========================================
export default function App() {
  // Yeh state navbar aur pages ko control karegi
  const [currentScreen, setCurrentScreen] = useState('home');

  return (
    <div className="w-full min-h-screen bg-[#fafafa] font-sans text-zinc-900 overflow-x-hidden relative">
      
      {/* ❌ Yahan pehle <TopHeader /> likha tha, usko HATA DO ya comment kar do */}
      {/* <TopHeader /> */}

      {/* ✅ Aapka apna original header aur search bar yahan rehne do jaise tha (It is globally rendered in layout.js) */}

      {/* CONDITIONAL RENDERING: Jo screen select hogi, wahi page dikhega */}
      {currentScreen === 'home' && (
        <HomeView 
          onProductClick={() => setCurrentScreen('product')} 
          onCategoryCatalogClick={() => setCurrentScreen('discover')} 
        /> // Sahi wala Home component jisme hero section hai
      )}

      {currentScreen === 'discover' && (
        <DiscoverPage key="discover" initialTab="Discover" />
      )}

      {currentScreen === 'categories' && (
        <DiscoverPage key="categories" initialTab="Categories" />
      )}



      {currentScreen === 'future' && (
        <CartView onExploreClick={() => setCurrentScreen('home')} />
      )}

      {/* Product Detail Page Overrides Everything (z-[999]) when 'product' screen is active */}
      {currentScreen === 'product' && (
        <ProductDetailView onBack={() => setCurrentScreen('home')} />
      )}

      {/* Navbar ko state pass karni zaruri hai taaki active icon change ho sake */}
      {/* Dynamic hide active bottom bar during full-screen product details */}
      {currentScreen !== 'product' && (
        <UltraFrostedNavbar 
          currentScreen={currentScreen} 
          setCurrentScreen={setCurrentScreen} 
        />
      )}

    </div>
  );
}
