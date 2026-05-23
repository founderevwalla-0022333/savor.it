import React from 'react';

const HomeExtendedSections = ({ onProductClick, onCategoryCatalogClick }) => {
  return (
    <div className="w-full mt-10 space-y-12 animate-fade-in select-none">
      
      {/* 1. FRESH DROPS (New Arrivals) */}
      <section className="px-4 max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4 pl-1 pr-2">
          <h2 className="text-lg font-black tracking-tight text-zinc-900 font-serif uppercase">Fresh Drops</h2>
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
              <h4 className="text-[11px] font-bold text-zinc-900 truncate">NuPhy Air75 V2</h4>
              <span className="text-[11px] font-black text-black mt-0.5 block">$119</span>
            </div>
          </div>
          {/* Item 2 */}
          <div onClick={onProductClick} className="min-w-[120px] snap-start group cursor-pointer active:scale-95 transition-transform">
            <div className="w-full aspect-square bg-[#f5f5f5] rounded-[1.2rem] relative p-2 flex items-center justify-center">
              <span className="absolute top-2 left-2 bg-zinc-900 text-white text-[8px] font-black tracking-wider uppercase px-2 py-0.5 rounded-sm z-10">New</span>
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200" className="w-20 h-20 object-cover mix-blend-multiply drop-shadow-sm" alt="Audio" />
            </div>
            <div className="mt-2 px-1">
              <h4 className="text-[11px] font-bold text-zinc-900 truncate">Audio-Technica</h4>
              <span className="text-[11px] font-black text-black mt-0.5 block">$149</span>
            </div>
          </div>
          {/* Item 3 */}
          <div onClick={onProductClick} className="min-w-[120px] snap-start group cursor-pointer active:scale-95 transition-transform">
            <div className="w-full aspect-square bg-[#f5f5f5] rounded-[1.2rem] relative p-2 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=200" className="w-20 h-20 object-cover mix-blend-multiply drop-shadow-sm" alt="Mat" />
            </div>
            <div className="mt-2 px-1">
              <h4 className="text-[11px] font-bold text-zinc-900 truncate">Premium Felt Mat</h4>
              <span className="text-[11px] font-black text-black mt-0.5 block">$35</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SETUP OF THE WEEK (Shop The Look) */}
      <section className="px-4 max-w-md mx-auto">
        <div className="mb-4 pl-1">
          <h2 className="text-lg font-black tracking-tight text-zinc-900 font-serif leading-tight uppercase">Setup of the Week</h2>
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">Curated Inspiration</p>
        </div>
        <div onClick={onCategoryCatalogClick} className="w-full aspect-[4/3] bg-zinc-100 rounded-[2rem] overflow-hidden relative shadow-sm border border-zinc-200/50 cursor-pointer active:opacity-95 transition-opacity">
          <img src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800" alt="Setup" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-black text-lg">The "Deep Focus" Desk</h3>
            <p className="text-white/80 text-xs font-medium mt-1">Clean lines, warm wood, and pure productivity.</p>
          </div>
        </div>
        {/* Inline Products */}
        <div className="flex space-x-3 overflow-x-auto snap-x scroll-smooth [&::-webkit-scrollbar]:hidden mt-3 pl-1 pr-4 pb-2">
          <div onClick={onProductClick} className="min-w-[180px] snap-start flex items-center p-2 bg-white rounded-[1.2rem] border border-zinc-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] cursor-pointer active:scale-95 transition-transform">
            <img src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=100" className="w-10 h-10 rounded-lg object-cover" alt="Monitor" />
            <div className="ml-2">
              <h4 className="text-[10px] font-bold text-zinc-900 line-clamp-1">Ultrawide Display</h4>
              <span className="text-[10px] font-black text-black block">$499</span>
            </div>
          </div>
          <div onClick={onProductClick} className="min-w-[180px] snap-start flex items-center p-2 bg-white rounded-[1.2rem] border border-zinc-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] cursor-pointer active:scale-95 transition-transform">
            <img src="https://images.unsplash.com/photo-1595225476474-87563907a212?w=100" className="w-10 h-10 rounded-lg object-cover" alt="Keyboard" />
            <div className="ml-2">
              <h4 className="text-[10px] font-bold text-zinc-900 line-clamp-1">Mechanical Board</h4>
              <span className="text-[10px] font-black text-black block">$129</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AESTHETIC UNDER $50 (Impulse Buy) */}
      <section className="px-4 max-w-md mx-auto">
        <div className="flex justify-between items-end mb-4 pl-1 pr-2 border-b border-zinc-100 pb-2">
          <div>
            <h2 className="text-lg font-black tracking-tight text-zinc-900 font-serif uppercase">Aesthetic Under $50</h2>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">Desk upgrades</p>
          </div>
          <span onClick={onCategoryCatalogClick} className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider cursor-pointer mb-0.5">See All →</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div onClick={onProductClick} className="bg-[#fafafa] p-3 rounded-[1.5rem] border border-zinc-100 flex flex-col items-center text-center cursor-pointer active:scale-95 transition-transform">
            <img src="https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=200" className="w-16 h-16 object-cover rounded-full shadow-sm mb-3" alt="Light" />
            <h4 className="text-[11px] font-bold text-zinc-900">Warm Desk Bulb</h4>
            <span className="text-[11px] font-black text-zinc-500 mt-1">$24.00</span>
          </div>
          <div onClick={onProductClick} className="bg-[#fafafa] p-3 rounded-[1.5rem] border border-zinc-100 flex flex-col items-center text-center cursor-pointer active:scale-95 transition-transform">
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=200" className="w-16 h-16 object-cover rounded-full shadow-sm mb-3" alt="Mat" />
            <h4 className="text-[11px] font-bold text-zinc-900">Leather Pad</h4>
            <span className="text-[11px] font-black text-zinc-500 mt-1">$39.00</span>
          </div>
        </div>
      </section>

      {/* 4. SHOP BY VIBE (Moodboards) */}
      <section className="px-4 max-w-md mx-auto">
        <h2 className="text-lg font-black tracking-tight text-zinc-900 font-serif uppercase mb-4 pl-1">Browse by Vibe</h2>
        <div className="space-y-3">
          <div onClick={onCategoryCatalogClick} className="w-full h-28 rounded-[1.8rem] relative overflow-hidden group cursor-pointer active:opacity-95 transition-opacity">
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800" className="w-full h-full object-cover" alt="Cozy Warm" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h3 className="text-white font-black text-xl tracking-wide uppercase">Cozy & Warm</h3>
              <p className="text-white/80 text-[9px] font-bold tracking-widest mt-1 uppercase">Wood • Felt • Amber Light</p>
            </div>
          </div>
          <div onClick={onCategoryCatalogClick} className="w-full h-28 rounded-[1.8rem] relative overflow-hidden group cursor-pointer active:opacity-95 transition-opacity">
            <img src="https://images.unsplash.com/photo-1625842268584-8f3296236761?q=80&w=800" className="w-full h-full object-cover" alt="Neon Cyber" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h3 className="text-white font-black text-xl tracking-wide uppercase">Midnight Tech</h3>
              <p className="text-white/80 text-[9px] font-bold tracking-widest mt-1 uppercase">RGB • Matte Black</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SPOTTED ON DESKS (UGC / Social Proof) */}
      <section className="px-4 max-w-md mx-auto mt-12">
        <div className="flex flex-col items-center text-center mb-5">
          <span className="text-2xl mb-1">📸</span>
          <h2 className="text-lg font-black tracking-tight text-zinc-900 font-serif uppercase">Spotted on Desks</h2>
          <p className="text-[10px] font-medium text-zinc-500 mt-1 max-w-[200px]">Join the community. Tag @savorit to be featured.</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=300" className="w-full aspect-square object-cover rounded-[1.2rem]" alt="UGC 1" />
          <img src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300" className="w-full aspect-square object-cover rounded-[1.2rem]" alt="UGC 2" />
        </div>
      </section>

      {/* 6. MINIMAL TRUST BADGES */}
      <section className="px-6 max-w-md mx-auto mt-12 mb-8">
        <div className="flex items-center justify-between border-t border-zinc-200/60 pt-8">
          <div className="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-zinc-800 mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Free Shipping</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-zinc-800 mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Secure Checkout</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-zinc-800 mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Curated Quality</span>
          </div>
        </div>
      </section>

      {/* 7. PREMIUM FOOTER (Sleek Dark Mode) */}
      {/* pb-32 Ensures the sticky bottom navigation doesn't hide the footer text */}
      <footer className="w-full bg-[#0a0a0a] mt-8 pt-12 pb-32 relative overflow-hidden rounded-t-[2.5rem]">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-white/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="max-w-md mx-auto relative z-10 flex flex-col items-center text-center px-8">
          <span className="text-3xl font-black tracking-tighter text-white font-serif italic mb-2">
            Savor.it<span className="text-zinc-500 text-2xl">✦</span>
          </span>
          <p className="text-[11px] text-zinc-400 font-medium max-w-[220px]">
            Curating the best minimalist gear for your dream workspace.
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
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">Returns</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>

          <div className="w-12 h-[1px] bg-zinc-800 mt-8 mb-6" />
          <p className="text-[10px] text-zinc-600 font-medium">© 2026 Savor.it. Crafted for creators.</p>
        </div>
      </footer>

    </div>
  );
};

export default HomeExtendedSections;
