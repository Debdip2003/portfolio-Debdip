import React, { useRef } from "react";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { fadeInUp, transitions } from "../utils/motionVariants";

export default function Hero({ onOpenEnquiry }) {
  const { profile } = portfolioData;
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToPortfolio = (e) => {
    e?.preventDefault();
    const el = document.getElementById("portfolio");
    if (el) {
      const yOffset = -40;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 border-b border-white/5 overflow-hidden"
    >
      {/* Dynamic Breathing Ambient Glows */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-stone-800/20 rounded-full blur-[140px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 left-0 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-orange-900/15 rounded-full blur-[160px] pointer-events-none -z-10"
      />

      {/* Subtle Matrix Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      {/* Main Title Center with Scroll Parallax */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="max-w-screen-2xl w-full mx-auto relative z-10 my-auto py-12 flex flex-col justify-center"
      >
        <div className="space-y-8 md:space-y-10">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-4 text-xs font-medium text-stone-500 uppercase tracking-[0.3em]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.9)]" />
            </span>
            <span>{profile.availability}</span>
          </motion.div>

          {/* Monumental Hero Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-stone-100 leading-[0.9] tracking-tight"
          >
            Fluid <br />
            <span className="text-stone-700">Interfaces</span>, Modern <br />
            <span className="italic font-serif text-stone-100">Engineering</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-stone-400 text-base sm:text-lg md:text-xl font-light tracking-wide max-w-xl leading-relaxed"
          >
            I am <strong className="text-stone-200 font-medium">{profile.name}</strong> — Frontend engineer and UI/UX
            specialist crafting robust web architecture, client-side AI, and pixel-precise interactive systems.
          </motion.p>

          {/* Direct Social / Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-stone-900/60 hover:bg-stone-800 border border-white/10 text-stone-300 hover:text-white text-xs font-mono flex items-center gap-2 transition-all group"
            >
              <FaGithub className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-stone-500 group-hover:text-stone-300" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-stone-900/60 hover:bg-stone-800 border border-white/10 text-stone-300 hover:text-white text-xs font-mono flex items-center gap-2 transition-all group"
            >
              <FaLinkedinIn className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-stone-500 group-hover:text-stone-300" />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onOpenEnquiry("Direct Collaboration")}
              className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="max-w-screen-2xl w-full mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 relative z-10 border-t border-white/5 pt-8"
      >
        <div className="space-y-1 max-w-sm">
          <span className="text-[10px] uppercase font-mono tracking-widest text-orange-500 block">Location & Focus</span>
          <p className="text-sm text-stone-400 leading-relaxed font-light">
            Based in {profile.location} • Building globally distributed frontend applications.
          </p>
        </div>

        <div className="flex items-center gap-8 self-end sm:self-auto">
          <div className="hidden lg:flex items-center gap-6 text-xs font-mono text-stone-500">
            <div>
              <span className="text-stone-300 block font-display text-sm">25+</span>
              <span>Projects</span>
            </div>
            <div className="w-[1px] h-6 bg-stone-800" />
            <div>
              <span className="text-stone-300 block font-display text-sm">3+ Yrs</span>
              <span>Experience</span>
            </div>
            <div className="w-[1px] h-6 bg-stone-800" />
            <div>
              <span className="text-stone-300 block font-display text-sm">100%</span>
              <span>Craft & Quality</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.15, y: 2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToPortfolio}
            aria-label="Scroll down to portfolio"
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:border-white/40 transition-colors animate-bounce cursor-pointer group"
          >
            <ArrowDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </motion.button>
        </div>
      </motion.div>
    </header>
  );
}
