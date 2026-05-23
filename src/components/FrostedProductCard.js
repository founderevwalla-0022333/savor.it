import React from 'react';

const FrostedProductCard = ({ title = "Nike Stride", subtitle = "Pro Running Wear", price = "$89", img = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" }) => {
  return (
    <div className="relative w-full max-w-[200px] bg-zinc-50 rounded-[2rem] overflow-hidden p-2 shadow-sm border border-zinc-200/60 transition-transform hover:scale-[1.02]">
      {/* Product Image Area */}
      <div className="relative w-full h-[220px] rounded-[1.8rem] overflow-hidden bg-zinc-100">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover"
        />

        {/* Floating Heart Icon */}
        <button className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md text-zinc-800 active:scale-90 transition-transform">
          ❤️
        </button>

        {/* BOTTOM FROSTED OVERLAY PANEL (Where details live) */}
        <div className="absolute bottom-2 left-2 right-2 p-3 bg-white/30 backdrop-blur-lg border border-white/20 rounded-[1.4rem] shadow-sm flex flex-col space-y-1">
          <span className="text-xs font-black tracking-tight text-zinc-900 uppercase line-clamp-1">
            {title}
          </span>
          <p className="text-[10px] text-zinc-700 font-medium leading-tight line-clamp-1">
            {subtitle}
          </p>
          
          {/* Squeezed Details Trigger */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs font-black text-black">{price}</span>
            <button className="text-[9px] font-extrabold tracking-wider bg-black text-white px-2.5 py-1 rounded-full flex items-center space-x-0.5">
              <span>DETAILS</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrostedProductCard;
