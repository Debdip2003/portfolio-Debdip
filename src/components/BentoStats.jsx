import React from "react";
import { ArrowRight, GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { fadeInUp, sectionContainerVariants, scaleUp } from "../utils/motionVariants";

export default function BentoStats({ onOpenInsight, onOpenAbout }) {
  const { stats, insightArticle, profile } = portfolioData;

  return (
    <section id="stats" className="py-24 bg-[#050505] px-6 md:px-12 border-b border-white/5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={sectionContainerVariants}
        className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {/* Large Focus Block (About Debdip) */}
        <motion.div
          variants={scaleUp}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          onClick={onOpenAbout}
          className="col-span-1 md:col-span-2 row-span-2 relative min-h-[380px] bg-stone-900 overflow-hidden group border border-white/5 cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
            alt="Engineering Workspace"
          />
          <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/50 to-transparent">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase font-mono text-orange-500 tracking-widest block">
                The Engineer
              </span>
              <span className="text-stone-600">•</span>
              <span className="text-xs font-mono text-stone-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-orange-500" /> {profile.location}
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-display text-white mb-2">{profile.name}</h3>
            <p className="text-stone-300 text-sm font-light max-w-md leading-relaxed mb-4">
              Frontend Developer & UI/UX Designer driven by craft, aesthetics, and high-performance web architecture.
              Specialized in React, Next.js, WebAssembly, and modern motion libraries.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-orange-400 group-hover:text-orange-300 transition-colors">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{profile.education}</span>
            </div>
          </div>
        </motion.div>

        {/* Stat Block 1 */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="bg-stone-900/30 border border-white/5 p-8 flex flex-col justify-center items-center text-center hover:bg-stone-900/60 hover:border-white/15 transition-all"
        >
          <span className="text-4xl md:text-5xl text-white font-light font-display mb-2">{stats.projectsShipped}</span>
          <span className="text-xs uppercase tracking-widest text-stone-500 font-mono">Projects Shipped</span>
        </motion.div>

        {/* Stat Block 2 */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="bg-stone-900/30 border border-white/5 p-8 flex flex-col justify-center items-center text-center hover:bg-stone-900/60 hover:border-white/15 transition-all"
        >
          <span className="text-4xl md:text-5xl text-white font-light font-display mb-2">{stats.yearsActive}</span>
          <span className="text-xs uppercase tracking-widest text-stone-500 font-mono">Years Active</span>
        </motion.div>

        {/* Wide Text Block: Latest Engineering Insight */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          onClick={onOpenInsight}
          className="col-span-1 md:col-span-2 bg-[#0a0a0a] border border-white/5 p-8 flex items-center justify-between group cursor-pointer hover:border-white/20 hover:bg-stone-900/50 transition-all"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-orange-500 uppercase tracking-widest font-mono">Technical Paper</span>
              <span className="text-stone-700">•</span>
              <span className="text-[10px] font-mono text-stone-500">5 Min Read</span>
            </div>
            <h4 className="text-base sm:text-lg text-white font-light group-hover:text-orange-300 transition-colors">
              {insightArticle.title}
            </h4>
          </div>
          <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all shrink-0 ml-4">
            <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
