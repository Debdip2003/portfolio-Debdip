import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Navigation({ onOpenMenu, onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const { profile } = portfolioData;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const yOffset = -40;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Scroll Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 z-[100] origin-left shadow-[0_0_10px_rgba(249,115,22,0.8)]"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white px-6 md:px-12 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "py-4 bg-black/40 backdrop-blur-sm" : "py-6"
        }`}
      >
        <a
          href="#"
          className="font-display text-xl md:text-2xl tracking-tight font-semibold flex items-center gap-2 group"
        >
          <span className="group-hover:tracking-wider transition-all duration-300">{profile.shortName}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 hidden sm:inline-block shadow-[0_0_8px_rgba(249,115,22,0.8)] animate-pulse" />
        </a>

        <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase">
          <a
            href="#portfolio"
            onClick={(e) => handleSmoothScroll(e, "#portfolio")}
            className="hover:text-orange-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={(e) => handleSmoothScroll(e, "#experience")}
            className="hover:text-orange-400 transition-colors"
          >
            Experience
          </a>
          <a
            href="#open-source"
            onClick={(e) => handleSmoothScroll(e, "#open-source")}
            className="hover:text-orange-400 transition-colors"
          >
            Open Source
          </a>
          <a
            href="#github-activity"
            onClick={(e) => handleSmoothScroll(e, "#github-activity")}
            className="hover:text-orange-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="#capabilities"
            onClick={(e) => handleSmoothScroll(e, "#capabilities")}
            className="hover:text-orange-400 transition-colors"
          >
            Capabilities
          </a>
        </div>

        <div className="flex items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onOpenEnquiry("Project / Role Collaboration")}
            className="hidden lg:inline-block text-xs uppercase tracking-widest text-stone-300 hover:text-white border-b border-stone-500 pb-0.5 hover:border-white transition-all cursor-pointer"
          >
            Contact
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenMenu}
            aria-label="Open Navigation Menu"
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
          >
            <span className="text-xs uppercase tracking-widest group-hover:opacity-50 transition-opacity">Menu</span>
            <div className="space-y-1">
              <span className="block w-5 h-[1px] bg-white group-hover:w-6 transition-all duration-300"></span>
              <span className="block w-3 h-[1px] bg-white group-hover:w-5 transition-all duration-300 ml-auto"></span>
            </div>
          </motion.button>
        </div>
      </motion.nav>
    </>
  );
}
