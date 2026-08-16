import React, { useRef } from "react";
import { ArrowLeft, ArrowRight, Maximize2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Interiors({ onSelectInterior }) {
  const scrollRef = useRef(null);
  const interiors = portfolioData.interiors;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="interiors" className="py-24 bg-[#050505] border-b border-white/5 relative">
      {/* Header */}
      <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
        <div>
          <span className="text-xs text-orange-500 uppercase tracking-widest mb-2 block font-mono">
            Inner Sanctums
          </span>
          <h2 className="text-3xl md:text-5xl font-display text-white">Interior Design</h2>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-stone-500 uppercase tracking-widest self-center hidden sm:inline-block font-mono mr-2">
            Explore Spaces
          </span>
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll interiors left"
            className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/30 text-stone-400 hover:text-white transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll interiors right"
            className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/30 text-stone-400 hover:text-white transition-all cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Snap Scroll Carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 md:px-12 pb-8 hide-scrollbar cursor-grab active:cursor-grabbing"
      >
        {interiors.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectInterior(item)}
            className="min-w-[85vw] sm:min-w-[65vw] md:min-w-[45vw] lg:min-w-[40vw] snap-center group relative aspect-[16/10] overflow-hidden bg-stone-900 border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer shrink-0"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />

            {/* Top Right Zoom Icon */}
            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur p-2 border border-white/10 text-stone-200">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>

            {/* Bottom Label Badge */}
            <div className="absolute bottom-4 left-4 z-10 flex flex-col items-start gap-1">
              <span className="px-3 py-1.5 bg-black/70 backdrop-blur text-white text-[11px] font-mono uppercase tracking-wider border border-white/10">
                {item.title}
              </span>
              <span className="text-[10px] text-stone-400 bg-black/50 backdrop-blur px-2 py-0.5 border border-white/5 font-mono hidden sm:inline-block">
                {item.location}
              </span>
            </div>

            {/* Hover Shadow Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
