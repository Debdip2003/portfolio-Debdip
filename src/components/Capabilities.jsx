import React, { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Cpu,
  Layers,
  Sprout,
  Globe2,
  BarChart3,
  HeartHandshake,
} from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { fadeInUp, sectionContainerVariants } from "../utils/motionVariants";

export default function Capabilities({ onSelectCapability }) {
  const scrollRef = useRef(null);
  const capabilities = portfolioData.capabilities;

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
      case "Cpu":
        return <Cpu className="w-5 h-5" />;
      case "Layers":
        return <Layers className="w-5 h-5" />;
      case "Sprout":
        return <Sprout className="w-5 h-5" />;
      case "Globe2":
        return <Globe2 className="w-5 h-5" />;
      case "BarChart3":
        return <BarChart3 className="w-5 h-5" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section id="capabilities" className="py-24 border-b border-white/5 bg-[#050505] overflow-hidden relative">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeInUp}
        className="px-6 md:px-12 mb-12 flex justify-between items-end"
      >
        <div>
          <span className="text-xs text-orange-500 uppercase tracking-widest mb-2 block font-mono">
            Core Competencies
          </span>
          <h2 className="text-3xl md:text-5xl font-display text-white">Engineering Capabilities</h2>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll("left")}
            aria-label="Scroll capabilities left"
            className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/30 transition-all text-stone-400 hover:text-white cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll("right")}
            aria-label="Scroll capabilities right"
            className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/30 transition-all text-stone-400 hover:text-white cursor-pointer"
          >
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>

      {/* Snap Scroll Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={sectionContainerVariants}
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-12 hide-scrollbar cursor-grab active:cursor-grabbing"
      >
        {capabilities.map((cap) => (
          <motion.div
            key={cap.id}
            variants={fadeInUp}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            onClick={() => onSelectCapability && onSelectCapability(cap)}
            className="min-w-[85vw] sm:min-w-[380px] md:min-w-[420px] snap-center bg-stone-900/30 border border-white/5 p-8 flex flex-col justify-between group hover:border-white/20 hover:bg-stone-900/50 transition-all duration-300 cursor-pointer shrink-0 luxury-border-glow"
          >
            <div className="mb-8">
              <div
                className={`w-10 h-10 ${cap.iconBg} ${cap.iconColor} rounded-none flex items-center justify-center mb-6 border border-white/5`}
              >
                {getIcon(cap.icon)}
              </div>
              <h3 className="text-xl md:text-2xl font-display text-white mb-3 group-hover:text-orange-400 transition-colors">
                {cap.title}
              </h3>
              <p className="text-stone-400 text-sm font-light leading-relaxed mb-6">
                {cap.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {cap.tags?.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 bg-stone-950 border border-white/10 text-stone-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center text-xs font-mono text-stone-500 border-t border-white/5 pt-4">
              <span className="text-stone-300">{cap.metric}</span>
              <span className="group-hover:text-white group-hover:translate-x-1 transition-all flex items-center gap-1 text-stone-400">
                {cap.subtext} ⤨
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
