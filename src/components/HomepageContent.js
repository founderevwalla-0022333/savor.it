import React from 'react';

const HomepageContent = ({ onProductClick, onCategoryCatalogClick }) => {
  return (
    <div className="w-full max-w-md md:max-w-6xl mx-auto pt-8 md:pt-12 select-none">
      
      {/* 1. FRESH DROPS SECTION */}
      <section className="px-4 md:px-8 mb-10 md:mb-14">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-[1.1rem] md:text-xl font-medium tracking-wide text-zinc-900 uppercase">Fresh Drops</h2>
          <span onClick={onCategoryCatalogClick} className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest cursor-pointer">View All →</span>
        </div>

        <div className="flex md:grid md:grid-cols-2 md:gap-6 space-x-4 md:space-x-0 overflow-x-auto md:overflow-x-visible scroll-smooth [&::-webkit-scrollbar]:hidden pb-2">
          {/* Item 1 */}
          <div onClick={onProductClick} className="flex-shrink-0 w-[140px] md:w-full cursor-pointer active:scale-95 md:active:scale-100 md:hover:scale-[1.01] transition-transform md:transition-all md:duration-300">
            <div className="w-full h-[140px] md:h-[200px] rounded-3xl overflow-hidden relative bg-zinc-100 mb-2">
              <span className="absolute top-0 left-0 bg-[#1a1a1a] text-white text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-br-xl z-10">
                NEW
              </span>
              <img src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=300" className="w-full h-full object-cover" alt="NuPhy Air75" />
            </div>
            <h3 className="text-xs font-medium text-zinc-800">NuPhy Air75 V2</h3>
            <p className="text-[11px] text-zinc-400 mt-0.5">Check Price ↗</p>
          </div>

          {/* Item 2 */}
          <div onClick={onProductClick} className="flex-shrink-0 w-[140px] md:w-full cursor-pointer active:scale-95 md:active:scale-100 md:hover:scale-[1.01] transition-transform md:transition-all md:duration-300">
            <div className="w-full h-[140px] md:h-[200px] rounded-3xl overflow-hidden relative bg-zinc-100 mb-2">
              <span className="absolute top-0 left-0 bg-[#1a1a1a] text-white text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-br-xl z-10">
                TRENDING
              </span>
              <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300" className="w-full h-full object-cover" alt="Audio-Technica" />
            </div>
            <h3 className="text-xs font-medium text-zinc-800">Audio-Technica</h3>
            <p className="text-[11px] text-zinc-400 mt-0.5">Check Price ↗</p>
          </div>
        </div>
      </section>

      {/* 2. SETUP OF THE WEEK SECTION (Premium Bento Grid Setup) */}
      <section className="px-4 md:px-8 mb-10 md:mb-14">
        <div className="mb-4">
          <h2 className="text-[1.1rem] md:text-xl font-medium tracking-wide text-zinc-900 uppercase">
            Setup of the Week
          </h2>
          <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">
            Curated Inspiration
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          
          {/* LARGE PRIMARY BOX: Immersive Photo Banner (2-column span) */}
          <div onClick={onCategoryCatalogClick} className="col-span-2 relative bg-zinc-950 rounded-[2rem] overflow-hidden group cursor-pointer active:scale-[0.98] md:active:scale-100 md:hover:scale-[1.01] transition-all duration-500 shadow-sm md:shadow-lg md:hover:shadow-xl">
            {/* Main Photo (Immersive, full bleed) */}
            <img 
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&q=80" 
              alt="Deep Focus workspace setup" 
              className="w-full h-[220px] md:h-[300px] lg:h-[340px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Elegant Aesthetic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            
            <div className="absolute bottom-5 left-5 right-5 text-left">
              <h3 className="text-white text-xl md:text-2xl font-serif font-medium mb-1 truncate">
                The "Deep Focus" Desk
              </h3>
              <p className="text-zinc-300 text-xs md:text-sm truncate max-w-[90%] font-light">
                Clean lines, warm wood, and pure productivity.
              </p>
            </div>

            {/* Clean 'Details →' button interaction block */}
            <div className="absolute top-5 right-5 p-2 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>

          {/* SMALL LINKED BOX 1: Primary Item (Keyboard) */}
          <div onClick={onProductClick} className="relative bg-zinc-50/70 border border-zinc-100/80 rounded-[1.8rem] p-4 flex flex-row items-center md:flex-col md:items-start md:justify-between md:p-6 space-x-3 md:space-x-0 cursor-pointer group active:scale-[0.98] md:active:scale-100 md:hover:scale-[1.03] md:hover:shadow-md transition-all duration-300">
            {/* Item image in rounded frame */}
            <div className="w-12 h-12 md:w-24 md:h-24 rounded-xl md:rounded-2xl bg-zinc-100 overflow-hidden flex-shrink-0 shadow-inner md:mb-4 md:mx-auto md:w-full md:aspect-square">
              <img src="https://images.unsplash.com/photo-1595225476474-87563907a212?w=200&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Keyboard" />
            </div>
            
            {/* Item details and clean link */}
            <div className="md:w-full">
              <h4 className="text-[11px] md:text-xs font-semibold text-zinc-800 truncate">
                Mechanical Board V2
              </h4>
              <span className="text-[10px] md:text-xs text-zinc-400 mt-0.5 block flex items-center space-x-0.5 md:group-hover:text-black transition-colors">
                <span>View on Amazon</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-2.5 h-2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </div>
          </div>

          {/* SMALL LINKED BOX 2: Secondary Item (Monitor) */}
          <div onClick={onProductClick} className="relative bg-zinc-50/70 border border-zinc-100/80 rounded-[1.8rem] p-4 flex flex-row items-center md:flex-col md:items-start md:justify-between md:p-6 space-x-3 md:space-x-0 cursor-pointer group active:scale-[0.98] md:active:scale-100 md:hover:scale-[1.03] md:hover:shadow-md transition-all duration-300">
            {/* Item image in rounded frame */}
            <div className="w-12 h-12 md:w-24 md:h-24 rounded-xl md:rounded-2xl bg-zinc-100 overflow-hidden flex-shrink-0 shadow-inner md:mb-4 md:mx-auto md:w-full md:aspect-square">
              <img src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=200&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Ultrawide" />
            </div>
            
            {/* Item details and clean link */}
            <div className="md:w-full">
              <h4 className="text-[11px] md:text-xs font-semibold text-zinc-800 truncate">
                Ultrawide Display
              </h4>
              <span className="text-[10px] md:text-xs text-zinc-400 mt-0.5 block flex items-center space-x-0.5 md:group-hover:text-black transition-colors">
                <span>View on Amazon</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-2.5 h-2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. AESTHETIC UNDER $50 SECTION */}
      <section className="px-4 md:px-8 mb-10 md:mb-14">
        <h2 className="text-[1.1rem] font-medium tracking-wide text-zinc-900 uppercase mb-4">Aesthetic Under $50</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Card 1 */}
          <div onClick={onProductClick} className="bg-white border border-zinc-100 rounded-[2rem] p-5 md:p-8 flex flex-col items-center justify-center shadow-[0_2px_15px_rgba(0,0,0,0.03)] cursor-pointer active:scale-95 md:active:scale-100 md:hover:scale-[1.03] md:hover:shadow-lg transition-transform md:transition-all md:duration-300">
            <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=150" className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover mb-4 shadow-sm" alt="Bulb" />
            <h4 className="text-[11px] font-medium text-zinc-800">Warm Desk Bulb</h4>
          </div>
          
          {/* Card 2 */}
          <div onClick={onProductClick} className="bg-white border border-zinc-100 rounded-[2rem] p-5 md:p-8 flex flex-col items-center justify-center shadow-[0_2px_15px_rgba(0,0,0,0.03)] cursor-pointer active:scale-95 md:active:scale-100 md:hover:scale-[1.03] md:hover:shadow-lg transition-transform md:transition-all md:duration-300">
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=150" className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover mb-4 shadow-sm" alt="Pad" />
            <h4 className="text-[11px] font-medium text-zinc-800">Leather Pad</h4>
          </div>
        </div>
      </section>

      {/* 4. TRUST BADGES */}
      <section className="px-6 md:px-8 py-6 md:py-10 border-t border-zinc-100 mb-4">
        <div className="flex justify-between md:justify-center md:gap-16 lg:gap-24 items-center text-center">
          <div className="flex flex-col items-center">
            <span className="text-xl mb-2">🌟</span>
            <span className="text-[8px] text-zinc-400 uppercase font-semibold tracking-widest">Handpicked Gear</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl mb-2">🔗</span>
            <span className="text-[8px] text-zinc-400 uppercase font-semibold tracking-widest">Trusted Retailers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl mb-2">💡</span>
            <span className="text-[8px] text-zinc-400 uppercase font-semibold tracking-widest">Aesthetic Approved</span>
          </div>
        </div>
      </section>

      {/* 5. DARK FOOTER */}
      <footer className="bg-[#0a0a0a] rounded-t-[2.5rem] md:rounded-t-[3rem] px-6 md:px-12 pt-10 md:pt-16 pb-36 md:pb-20 text-center w-full">
        <h2 className="text-2xl md:text-4xl font-normal text-white tracking-wide mb-3 md:mb-4 flex items-center justify-center">
          SAVOR.IT <span className="text-zinc-500 ml-1 text-xl">✦</span>
        </h2>
        <p className="text-[11px] md:text-sm text-zinc-400 max-w-[250px] md:max-w-[400px] mx-auto leading-relaxed mb-8 md:mb-10">
          The ultimate directory for aesthetic desk setups, curated for creators and professionals.
        </p>

        {/* Newsletter Input */}
        <div className="relative max-w-[300px] md:max-w-[480px] mx-auto">
          <input 
            type="text" 
            placeholder="Join our aesthetic newsletter" 
            className="w-full bg-[#141414] border border-zinc-800 rounded-full py-3.5 pl-5 pr-12 text-[11px] text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
          />
          <button className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square bg-white text-black rounded-full flex items-center justify-center active:scale-95 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </footer>

    </div>
  );
};

export default HomepageContent;
