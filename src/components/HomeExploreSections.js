import React from 'react';

const HomeExploreSections = ({ onProductClick, onCategoryCatalogClick }) => {
  return (
    // Clean space-y-10 wrapper without redundant pb-32 since HomepageContent follows
    <div className="w-full max-w-md md:max-w-6xl mx-auto px-4 md:px-8 mt-8 md:mt-12 space-y-10 md:space-y-14 select-none">
      
      {/* 1. SHOP BY CATEGORY (Upgraded CarDekho Style) */}
      <section>
        <div className="flex items-center justify-between mb-4 pl-1 pr-2">
          <h2 className="text-base md:text-xl font-extrabold tracking-tight text-zinc-900 uppercase">
            Shop By Category
          </h2>
          <button 
            onClick={onCategoryCatalogClick}
            className="text-[10px] font-black text-[#2E5A27] bg-[#2E5A27]/5 hover:bg-[#2E5A27]/10 px-3 py-1.5 rounded-full border border-[#2E5A27]/20 transition-all active:scale-95 uppercase tracking-wider"
          >
            Full Catalog →
          </button>
        </div>
        
        {/* 2x2 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          
          {/* Card 1: Keyboards */}
          <div onClick={() => onCategoryCatalogClick ? onCategoryCatalogClick() : onProductClick()} className="relative bg-gradient-to-br from-[#fdfbf7] to-[#f4ebe1] rounded-[1.8rem] p-4 md:p-6 h-40 md:h-52 overflow-hidden shadow-sm md:shadow-md border border-[#eaddcf]/50 group cursor-pointer block active:scale-[0.98] md:hover:scale-[1.02] transition-transform md:transition-all md:duration-300">
            <div className="relative z-10">
              <h3 className="font-black text-zinc-800 text-sm tracking-tight">Keyboards</h3>
              <p className="text-[10px] font-medium text-zinc-500 mt-0.5">Mechanical & Custom</p>
            </div>
            {/* Popping Image from bottom */}
            <img 
              src="https://images.unsplash.com/photo-1595225476474-87563907a212?w=200&q=80" 
              alt="Keyboards" 
              className="absolute -bottom-4 -right-4 w-32 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Card 2: Audio Gear */}
          <div onClick={onCategoryCatalogClick} className="relative bg-gradient-to-br from-[#f4f6f8] to-[#e2e8f0] rounded-[1.8rem] p-4 md:p-6 h-40 md:h-52 overflow-hidden shadow-sm md:shadow-md border border-slate-200/50 group cursor-pointer block active:scale-[0.98] md:hover:scale-[1.02] transition-transform md:transition-all md:duration-300">
            <div className="relative z-10">
              <h3 className="font-black text-zinc-800 text-sm tracking-tight">Audio Gear</h3>
              <p className="text-[10px] font-medium text-zinc-500 mt-0.5">Studio & Wireless</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80" 
              alt="Audio" 
              className="absolute -bottom-2 -right-4 w-28 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Card 3: Desk Mats */}
          <div onClick={onCategoryCatalogClick} className="relative bg-gradient-to-br from-[#f8fcf8] to-[#e6f4ea] rounded-[1.8rem] p-4 md:p-6 h-40 md:h-52 overflow-hidden shadow-sm md:shadow-md border border-emerald-100 group cursor-pointer block active:scale-[0.98] md:hover:scale-[1.02] transition-transform md:transition-all md:duration-300">
            <div className="relative z-10">
              <h3 className="font-black text-zinc-800 text-sm tracking-tight">Desk Mats</h3>
              <p className="text-[10px] font-medium text-zinc-500 mt-0.5">Premium Felt & Leather</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=200&q=80" 
              alt="Desk Mats" 
              className="absolute -bottom-2 -right-4 w-28 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Card 4: Lighting */}
          <div onClick={onCategoryCatalogClick} className="relative bg-gradient-to-br from-[#faf5ff] to-[#f3e8ff] rounded-[1.8rem] p-4 md:p-6 h-40 md:h-52 overflow-hidden shadow-sm md:shadow-md border border-purple-100 group cursor-pointer block active:scale-[0.98] md:hover:scale-[1.02] transition-transform md:transition-all md:duration-300">
            <div className="relative z-10">
              <h3 className="font-black text-zinc-800 text-sm tracking-tight">Lighting</h3>
              <p className="text-[10px] font-medium text-zinc-500 mt-0.5">RGB & Screenbars</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=200&q=80" 
              alt="Lighting" 
              className="absolute -bottom-2 -right-2 w-24 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>

        </div>
      </section>

      {/* 2. AMAZON BEST SELLERS (Horizontal Slider) */}
      <section>
        <div className="flex items-center justify-between mb-4 pl-1 pr-2">
          <h2 className="text-base md:text-xl font-extrabold tracking-tight text-zinc-900 uppercase">
            Amazon Best Sellers
          </h2>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider cursor-pointer">
            See All →
          </span>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex md:grid md:grid-cols-3 space-x-4 md:space-x-0 md:gap-6 overflow-x-auto md:overflow-x-visible snap-x md:snap-none scroll-smooth [&::-webkit-scrollbar]:hidden pl-1 md:pl-0 pr-4 md:pr-0 pb-4">
          
          {/* Product 1 */}
          <div onClick={onProductClick} className="min-w-[140px] md:min-w-0 snap-start cursor-pointer group active:scale-95 md:active:scale-100 md:hover:scale-[1.02] transition-transform md:transition-all md:duration-300">
            <div className="w-full h-36 md:h-48 bg-[#f7f7f7] rounded-[1.5rem] md:rounded-[2rem] relative p-3 md:p-5 flex items-center justify-center transition-colors group-hover:bg-[#f0f0f0] md:shadow-sm">
              <span className="absolute top-3 left-3 bg-orange-500 text-white text-[8px] font-black tracking-wider uppercase px-2 py-0.5 rounded-sm z-10">
                #1 Bestseller
              </span>
              {/* Product Image without background looks best here */}
              <img src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=200&q=80" className="w-24 h-24 md:w-32 md:h-32 object-cover mix-blend-multiply drop-shadow-md rounded-lg" alt="Monitor" />
            </div>
            <div className="mt-3 px-1">
              <h4 className="text-xs md:text-sm font-bold text-zinc-900 truncate">Apple Studio Display</h4>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xs font-black text-black">$1,599</span>
                <span className="text-[9px] text-zinc-400 line-through font-medium">$1,699</span>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div onClick={onProductClick} className="min-w-[140px] md:min-w-0 snap-start cursor-pointer group active:scale-95 md:active:scale-100 md:hover:scale-[1.02] transition-transform md:transition-all md:duration-300">
            <div className="w-full h-36 md:h-48 bg-[#f7f7f7] rounded-[1.5rem] md:rounded-[2rem] relative p-3 md:p-5 flex items-center justify-center transition-colors group-hover:bg-[#f0f0f0] md:shadow-sm">
              <span className="absolute top-3 left-3 bg-black text-white text-[8px] font-black tracking-wider uppercase px-2 py-0.5 rounded-sm z-10">
                Trending
              </span>
              <img src="https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=200&q=80" className="w-24 h-24 md:w-32 md:h-32 object-cover mix-blend-multiply drop-shadow-md rounded-lg" alt="Mouse" />
            </div>
            <div className="mt-3 px-1">
              <h4 className="text-xs md:text-sm font-bold text-zinc-900 truncate">Logitech MX Master 3S</h4>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xs font-black text-black">$99</span>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div onClick={onProductClick} className="min-w-[140px] md:min-w-0 snap-start cursor-pointer group active:scale-95 md:active:scale-100 md:hover:scale-[1.02] transition-transform md:transition-all md:duration-300">
            <div className="w-full h-36 md:h-48 bg-[#f7f7f7] rounded-[1.5rem] md:rounded-[2rem] relative p-3 md:p-5 flex items-center justify-center transition-colors group-hover:bg-[#f0f0f0] md:shadow-sm">
              <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=200&q=80" className="w-24 h-24 md:w-32 md:h-32 object-cover mix-blend-multiply drop-shadow-md rounded-lg" alt="Headphones" />
            </div>
            <div className="mt-3 px-1">
              <h4 className="text-xs md:text-sm font-bold text-zinc-900 truncate">Sony WH-1000XM5</h4>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xs font-black text-black">$348</span>
                <span className="text-[9px] text-zinc-400 line-through font-medium">$399</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomeExploreSections;
