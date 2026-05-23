import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 4 Different Slides Data (Fully Customisable)
const SLIDES_DATA = [
  {
    id: 1,
    title: "Cozy Creator Setup",
    subtitle: "Warm lighting and focus-driven essentials.",
    img: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=800",
    thumbs: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=100",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=100",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100"
    ]
  },
  {
    id: 2,
    title: "Nike Indy Net",
    subtitle: "Women's Light-Support Padded Sports Bra.",
    img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800",
    thumbs: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=100",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=100"
    ]
  },
  {
    id: 3,
    title: "Minimal Desk Gear",
    subtitle: "Sleek mechanical keyboards and clean mats.",
    img: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=800",
    thumbs: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=100",
      "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=100",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=100"
    ]
  },
  {
    id: 4,
    title: "Pro Audio Studio",
    subtitle: "High-fidelity studio monitors and headphones.",
    img: "https://images.unsplash.com/photo-1484755560693-a4074577af3a?q=80&w=800",
    thumbs: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=100",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=100",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=100"
    ]
  }
];

const CozyHeroSection = ({ onExploreClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  // Swipe logic for mobile/desktop drag
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold && currentIndex < SLIDES_DATA.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };
 
  return (
    <div className="w-full max-w-md md:max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-10 select-none overflow-hidden">
      {/* Squeezed Main Card Container */}
      <div className="relative w-full bg-[#0a0a0a] rounded-[2rem] md:rounded-[2.5rem] overflow-visible h-[240px] md:h-[380px] lg:h-[420px] flex flex-col justify-center shadow-xl md:shadow-2xl border border-zinc-900/50">
        
        {/* Swippable Content Area */}
        <motion.div 
          className="absolute inset-0 rounded-[2rem] overflow-hidden cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative w-full h-full flex items-center"
            >
              {/* Right Side Image (Nike Style Squeezed Layout) */}
              <div className="absolute right-0 top-0 bottom-0 w-[55%] md:w-[50%] h-full pointer-events-none">
                <img 
                  src={SLIDES_DATA[currentIndex].img} 
                  alt="Banner Asset" 
                  className="w-full h-full object-cover object-center rounded-r-[2rem]"
                />
                {/* Perfect fade mask from text to image */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
              </div>
 
              {/* Left Side Content */}
              <div className="relative z-10 w-[60%] md:w-[50%] pl-6 md:pl-12 lg:pl-16 pr-2 flex flex-col justify-center space-y-3 md:space-y-5">
                <div className="space-y-1">
                  <h1 className="text-xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase font-sans text-white break-words">
                    {SLIDES_DATA[currentIndex].title}
                  </h1>
                  <p className="text-zinc-400 text-[11px] md:text-sm lg:text-base font-medium leading-tight md:leading-relaxed line-clamp-2 max-w-[150px] md:max-w-[320px]">
                    {SLIDES_DATA[currentIndex].subtitle}
                  </p>
                </div>
                
                {/* Compact Thumbnail Row */}
                <div className="flex items-center space-x-2 md:space-x-3 pt-0.5 md:pt-2">
                  {SLIDES_DATA[currentIndex].thumbs.map((thumb, idx) => (
                    <img 
                      key={idx}
                      src={thumb} 
                      alt="Asset item" 
                      className="w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl object-cover border border-zinc-800 shadow-md" 
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
 
        {/* Floating Tiny Details/Explore Button */}
        <button 
          onClick={onExploreClick}
          className="absolute -bottom-4 md:-bottom-5 left-6 md:left-12 z-20 flex items-center space-x-2 bg-black text-white px-5 md:px-8 py-2.5 md:py-3.5 rounded-full border-[2.5px] border-white shadow-lg md:shadow-xl active:scale-95 md:hover:scale-105 transition-transform duration-150 md:duration-300 font-black tracking-wider text-[11px] md:text-sm md:cursor-pointer"
        >
          <span>DETAILS</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-3 w-3 stroke-[3]" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7m0 0l-7 7m7-7H6" />
          </svg>
        </button>
      </div>

      {/* 4 Active Slider Dots */}
      <div className="flex justify-center items-center space-x-1.5 md:space-x-2 mt-8 md:mt-10">
        {SLIDES_DATA.map((_, index) => (
          <span 
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 cursor-pointer rounded-full ${
              index === currentIndex ? 'w-5 h-2 bg-zinc-950' : 'w-2 h-2 bg-zinc-300 opacity-60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CozyHeroSection;
