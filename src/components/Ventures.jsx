import React, { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Globe2,
  Sprout,
  Layers,
  HeartHandshake,
  Cpu,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Ventures({ onSelectVenture }) {
  const scrollRef = useRef(null);
  const ventures = portfolioData.ventures;

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

  const getIcon = (iconName) => {
    switch (iconName) {
      case "BarChart3":
        return <BarChart3 className="w-5 h-5" />;
      case "Globe2":
        return <Globe2 className="w-5 h-5" />;
      case "Sprout":
        return <Sprout className="w-5 h-5" />;
      case "Layers":
        return <Layers className="w-5 h-5" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5" />;
      case "Cpu":
        return <Cpu className="w-5 h-5" />;
      default:
        return <BarChart3 className="w-5 h-5" />;
    }
  };

  return (
    <section id="ventures" className="py-24 border-b border-white/5 bg-[#050505] overflow-hidden relative">
      {/* Section Header */}
      <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
        <div>
          <span className="text-xs text-orange-500 uppercase tracking-widest mb-2 block font-mono">
            Ventures
          </span>
          <h2 className="text-3xl md:text-5xl font-display text-white">Strategic Growth</h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll ventures left"
            className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/30 transition-all text-stone-400 hover:text-white cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll ventures right"
            className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/30 transition-all text-stone-400 hover:text-white cursor-pointer"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Snap Scroll Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-12 hide-scrollbar cursor-grab active:cursor-grabbing"
      >
        {ventures.map((venture) => (
          <div
            key={venture.id}
            onClick={() => onSelectVenture(venture)}
            className="min-w-[85vw] sm:min-w-[380px] md:min-w-[420px] snap-center bg-stone-900/30 border border-white/5 p-8 flex flex-col justify-between group hover:border-white/20 hover:bg-stone-900/50 transition-all duration-300 cursor-pointer shrink-0 luxury-border-glow"
          >
            <div className="mb-12">
              <div
                className={`w-10 h-10 ${venture.iconBg} ${venture.iconColor} rounded-none flex items-center justify-center mb-6 border border-white/5`}
              >
                {getIcon(venture.icon)}
              </div>
              <h3 className="text-xl md:text-2xl font-display text-white mb-3 group-hover:text-orange-400 transition-colors">
                {venture.title}
              </h3>
              <p className="text-stone-400 text-sm font-light leading-relaxed">
                {venture.description}
              </p>
            </div>

            <div className="flex justify-between items-center text-xs font-mono text-stone-500 border-t border-white/5 pt-4">
              <span className="text-stone-300">{venture.metric}</span>
              <span className="group-hover:text-white group-hover:translate-x-1 transition-all flex items-center gap-1 text-stone-400">
                Details ⤨
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
