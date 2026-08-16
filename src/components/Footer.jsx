import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { fadeInUp, sectionContainerVariants } from "../utils/motionVariants";

export default function Footer({ onOpenEnquiry }) {
  const currentYear = new Date().getFullYear();
  const { profile } = portfolioData;

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
    <footer className="bg-stone-950 pt-28 md:pt-36 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
        {/* Top Split CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionContainerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 md:mb-28"
        >
          <motion.div variants={fadeInUp}>
            <span className="text-xs uppercase font-mono tracking-widest text-orange-500 block mb-4">
              Open For Opportunities
            </span>
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display text-stone-100 tracking-tighter mb-4 leading-[0.85]">
              Build <br />
              <span className="text-stone-700">Remarkable.</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col justify-end items-start lg:items-end space-y-4">
            <motion.button
              whileHover={{ x: 6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenEnquiry("Project / Role Inquiry")}
              className="group inline-flex items-center gap-4 text-2xl sm:text-3xl md:text-4xl text-white font-light hover:text-orange-400 transition-colors text-left cursor-pointer"
            >
              <span>Start a Conversation</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </motion.button>
            <a
              href={`mailto:${profile.email}`}
              className="text-stone-400 hover:text-stone-200 text-sm md:text-base font-mono transition-colors"
            >
              {profile.email}
            </a>
            <p className="text-xs text-stone-600 font-mono">
              Kolkata, India • Open for Global Remote & Relocation
            </p>
          </motion.div>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12 text-sm"
        >
          {/* Sitemap */}
          <div className="flex flex-col gap-3">
            <span className="text-xs text-stone-500 uppercase tracking-widest font-mono">Navigation</span>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-stone-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleSmoothScroll(e, "#portfolio")}
              className="text-stone-400 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={(e) => handleSmoothScroll(e, "#experience")}
              className="text-stone-400 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#open-source"
              onClick={(e) => handleSmoothScroll(e, "#open-source")}
              className="text-stone-400 hover:text-white transition-colors"
            >
              Open Source
            </a>
            <a
              href="#github-activity"
              onClick={(e) => handleSmoothScroll(e, "#github-activity")}
              className="text-stone-400 hover:text-white transition-colors"
            >
              GitHub Live
            </a>
            <a
              href="#capabilities"
              onClick={(e) => handleSmoothScroll(e, "#capabilities")}
              className="text-stone-400 hover:text-white transition-colors"
            >
              Capabilities
            </a>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-3">
            <span className="text-xs text-stone-500 uppercase tracking-widest font-mono">Connect</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-stone-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <FaGithub className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-stone-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <FaLinkedinIn className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-stone-400 hover:text-white transition-colors"
            >
              Direct Email
            </a>
          </div>

          {/* Engineering Standards */}
          <div className="flex flex-col gap-3">
            <span className="text-xs text-stone-500 uppercase tracking-widest font-mono">Engineering</span>
            <span className="text-xs text-stone-400 font-mono">WCAG 2.1 AA Compliant</span>
            <span className="text-xs text-stone-400 font-mono">Sub-100ms Perceived Latency</span>
            <span className="text-xs text-stone-400 font-mono">Zero-Leak Memory Mgmt</span>
            <span className="text-xs text-stone-400 font-mono">Type-Safe Clean Code</span>
          </div>

          {/* Copyright & Entity */}
          <div className="flex flex-col gap-3 justify-between">
            <div>
              <span className="text-xs text-stone-500 uppercase tracking-widest font-mono block mb-2">
                Debdip Bhattacharya
              </span>
              <p className="text-xs text-stone-500 font-mono leading-relaxed">
                Frontend Engineer & UI/UX Specialist
                <br />
                Kolkata, West Bengal, India
              </p>
            </div>
            <div className="pt-4">
              <span className="text-xs text-stone-600 uppercase tracking-widest font-mono">
                © {currentYear} Debdip Bhattacharya.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
