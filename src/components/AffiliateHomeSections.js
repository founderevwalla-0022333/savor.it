import React from 'react';

const AffiliateHomeSections = ({ onProductClick, onCategoryCatalogClick }) => {
  return (
    <div className="w-full mt-10 space-y-12 animate-fade-in select-none">
      
      {/* 1. FRESH DROPS */}
      <section className="px-4 max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4 pl-1 pr-2">
          {/* UPDATED HEADING FONT STYLE: font-black, tracking-tighter, uppercase */}
          <h2 className="text-lg font-black tracking-tighter text-zinc-900 uppercase font-sans">Fresh Drops</h2>
          <span onClick={onCategoryCatalogClick} className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider cursor-pointer">View All →</span>
        </div>
        <div className="flex space-x-3 overflow-x-auto snap-x scroll-smooth [&::-webkit-scrollbar]:hidden pl-1 pr-4 pb-2">
          {/* Item 1 */}
          <div onClick={onProductClick} className="min-w-[120px] snap-start group cursor-pointer active:scale-95 transition-transform">
            <div className="w-full aspect-square bg-[#f5f5f5] rounded-[1.2rem] relative p-2 flex items-center justify-center">
              <span className="absolute top-2 left-2 bg-zinc-900 text-white text-[8px] font-black tracking-wider uppercase px-2 py-0.5 rounded-sm z-10">New</span>
              <img src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=200" className="w-20 h-20 object-cover mix-blend-multiply drop-shadow-sm" alt="Keyboard" />
            </div>
            <div className="mt-2 px-1">
              <h4 className="text-[11px] font-extrabold text-zinc-900 truncate">NuPhy Air75 V2</h4>
              <span className="text-[11px] font-black text-zinc-500 mt-0.5 block">Check Price ↗</span>
            </div>
          </div>
          {/* Item 2 */}
          <div onClick={onProductClick} className="min-w-[120px] snap-start group cursor-pointer active:scale-95 transition-transform">
            <div className="w-full aspect-square bg-[#f5f5f5] rounded-[1.2rem] relative p-2 flex items-center justify-center">
              <span className="absolute top-2 left-2 bg-zinc-900 text-white text-[8px] font-black tracking-wider uppercase px-2 py-0.5 rounded-sm z-10">Trending</span>
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200" className="w-20 h-20 object-cover mix-blend-multiply drop-shadow-sm" alt="Audio" />
            </div>
            <div className="mt-2 px-1">
              <h4 className="text-[11px] font-extrabold text-zinc-900 truncate">Audio-Technica</h4>
              <span className="text-[11px] font-black text-zinc-500 mt-0.5 block">Check Price ↗</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SETUP OF THE WEEK */}
      <section className="px-4 max-w-md mx-auto">
        <div className="mb-4 pl-1">
          <h2 className="text-xl font-black tracking-tighter text-zinc-900 uppercase font-sans">Setup of the Week</h2>
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">Curated Inspiration</p>
        </div>
        <div onClick={onCategoryCatalogClick} className="w-full aspect-[4/3] bg-zinc-100 rounded-[2rem] overflow-hidden relative shadow-sm border border-zinc-200/50 cursor-pointer active:opacity-95 transition-opacity">
          <img src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800" alt="Setup" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-black text-lg tracking-tight">The "Deep Focus" Desk</h3>
            <p className="text-white/80 text-xs font-medium mt-1">Clean lines, warm wood, and pure productivity.</p>
          </div>
        </div>
        {/* Inline Products (Affiliate Links Trigger) */}
        <div className="flex space-x-3 overflow-x-auto snap-x scroll-smooth [&::-webkit-scrollbar]:hidden mt-3 pl-1 pr-4 pb-2">
          <div onClick={onProductClick} className="min-w-[180px] snap-start flex items-center p-2 bg-white rounded-[1.2rem] border border-zinc-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] cursor-pointer active:scale-95 transition-transform">
            <img src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=100" className="w-10 h-10 rounded-lg object-cover" alt="Monitor" />
            <div className="ml-2">
              <h4 className="text-[10px] font-extrabold text-zinc-900 line-clamp-1">Ultrawide Display</h4>
              <span className="text-[9px] font-bold text-zinc-400 flex items-center mt-0.5">View on Amazon <span className="ml-1">↗</span></span>
            </div>
          </div>
          <div onClick={onProductClick} className="min-w-[180px] snap-start flex items-center p-2 bg-white rounded-[1.2rem] border border-zinc-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] cursor-pointer active:scale-95 transition-transform">
            <img src="https://images.unsplash.com/photo-1595225476474-87563907a212?w=100" className="w-10 h-10 rounded-lg object-cover" alt="Keyboard" />
            <div className="ml-2">
              <h4 className="text-[10px] font-extrabold text-zinc-900 line-clamp-1">Mechanical Board</h4>
              <span className="text-[9px] font-bold text-zinc-400 flex items-center mt-0.5">View on Amazon <span className="ml-1">↗</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AESTHETIC UNDER $50 */}
      <section className="px-4 max-w-md mx-auto">
        <div className="flex justify-between items-end mb-4 pl-1 pr-2 border-b border-zinc-100 pb-2">
          <div>
            <h2 className="text-xl font-black tracking-tighter text-zinc-900 uppercase font-sans">Aesthetic Under $50</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div onClick={onProductClick} className="bg-[#fafafa] p-3 rounded-[1.5rem] border border-zinc-100 flex flex-col items-center text-center cursor-pointer active:scale-95 transition-transform">
            <img src="https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=200" className="w-16 h-16 object-cover rounded-full shadow-sm mb-3" alt="Light" />
            <h4 className="text-[11px] font-extrabold text-zinc-900">Warm Desk Bulb</h4>
          </div>
          <div onClick={onProductClick} className="bg-[#fafafa] p-3 rounded-[1.5rem] border border-zinc-100 flex flex-col items-center text-center cursor-pointer active:scale-95 transition-transform">
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=200" className="w-16 h-16 object-cover rounded-full shadow-sm mb-3" alt="Mat" />
            <h4 className="text-[11px] font-extrabold text-zinc-900">Leather Pad</h4>
          </div>
        </div>
      </section>

      {/* 4. CURATOR TRUST BADGES (Replaced Shipping/Returns with Affiliate/Curation Trust) */}
      <section className="px-6 max-w-md mx-auto mt-12 mb-8">
        <div className="flex items-center justify-between border-t border-zinc-200/60 pt-8">
          <div className="flex flex-col items-center text-center">
            <span className="text-xl mb-1.5">🌟</span>
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Handpicked Gear</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-xl mb-1.5">🔗</span>
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Trusted Retailers</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-xl mb-1.5">💡</span>
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Aesthetic Approved</span>
          </div>
        </div>
      </section>

      {/* 5. AFFILIATE-OPTIMIZED PREMIUM FOOTER */}
      <footer className="w-full bg-[#0a0a0a] mt-8 pt-12 pb-32 relative overflow-hidden rounded-t-[2.5rem]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-white/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="max-w-md mx-auto relative z-10 flex flex-col items-center text-center px-8">
          <span className="text-3xl font-black tracking-tighter text-white uppercase font-sans mb-2">
            Savor.it<span className="text-zinc-500 text-2xl">✦</span>
          </span>
          <p className="text-[11px] text-zinc-400 font-medium max-w-[220px]">
            The ultimate directory for aesthetic desk setups, curated for creators and professionals.
          </p>

          <div className="w-full mt-8 relative">
            <input 
              type="email" 
              placeholder="Join our aesthetic newsletter" 
              className="w-full bg-zinc-900/50 border border-zinc-800 text-white text-sm rounded-full py-3 pl-5 pr-12 outline-none focus:border-zinc-500 transition-colors placeholder:text-zinc-600"
            />
            <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-white text-black w-8 rounded-full flex items-center justify-center active:scale-90 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" /></svg>
            </button>
          </div>

          <div className="flex space-x-5 mt-10 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">About Us</a>
            <a href="#" className="hover:text-white transition-colors">Submit Setup</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>

          <div className="w-12 h-[1px] bg-zinc-800 mt-8 mb-6" />
          
          {/* AFFILIATE DISCLOSURE (Crucial for trust & legal compliance) */}
          <p className="text-[9px] text-zinc-600 font-medium max-w-[260px] leading-relaxed mb-4">
            Savor.it is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you.
          </p>
          <p className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">© 2026 Savor.it.</p>
        </div>
      </footer>

    </div>
  );
};

export default AffiliateHomeSections;
