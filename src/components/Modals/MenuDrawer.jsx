import React, { useEffect, useState } from "react";
import { X, ArrowUpRight, Clock, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { backdropVariants } from "../../utils/motionVariants";

export default function MenuDrawer({ isOpen, onClose, onOpenEnquiry }) {
  const [times, setTimes] = useState({
    nyc: "",
    london: "",
    kolkata: "",
    tokyo: "",
  });

  const { profile } = portfolioData;

  useEffect(() => {
    const updateTimes = () => {
      const options = { hour: "2-digit", minute: "2-digit", hour12: false };
      setTimes({
        nyc: new Date().toLocaleTimeString("en-US", { ...options, timeZone: "America/New_York" }),
        london: new Date().toLocaleTimeString("en-GB", { ...options, timeZone: "Europe/London" }),
        kolkata: new Date().toLocaleTimeString("en-IN", { ...options, timeZone: "Asia/Kolkata" }),
        tokyo: new Date().toLocaleTimeString("ja-JP", { ...options, timeZone: "Asia/Tokyo" }),
      });
    };
    updateTimes();
    const interval = setInterval(updateTimes, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navLinks = [
    { label: "Projects", href: "#portfolio", count: "05 Shipped" },
    { label: "Experience", href: "#experience", count: "3+ Roles" },
    { label: "Open Source", href: "#open-source", count: "DoxDock AI & WASM" },
    { label: "GitHub Stream", href: "#github-activity", count: "Live PRs" },
    { label: "Capabilities", href: "#capabilities", count: "Engineering Core" },
  ];

  const handleLinkClick = (href) => {
    onClose();
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => {
        const yOffset = -40;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 150);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[110] bg-[#050505]/98 backdrop-blur-2xl flex flex-col justify-between p-6 md:p-16 text-stone-200"
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center border-b border-white/10 pb-8">
        <div className="flex items-center gap-4">
          <span className="font-display text-2xl tracking-tight text-white font-semibold">{profile.shortName}</span>
          <span className="text-xs text-orange-500 font-mono tracking-widest hidden sm:inline-block">
            FRONTEND ENGINEER & UI SPECIALIST
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          aria-label="Close navigation menu"
          className="flex items-center gap-3 px-4 py-2 border border-white/20 hover:border-white text-stone-300 hover:text-white transition-all text-xs uppercase tracking-widest group cursor-pointer"
        >
          <span>Close</span>
          <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
        </motion.button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto py-12">
        {/* Navigation Links */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-4 md:space-y-6">
          {navLinks.map((link, idx) => (
            <motion.a
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="group flex items-baseline justify-between border-b border-white/5 pb-4 hover:border-orange-500/50 transition-colors"
            >
              <div className="flex items-baseline gap-4 md:gap-6">
                <span className="text-xs font-mono text-stone-600 group-hover:text-orange-500 transition-colors">
                  0{idx + 1}
                </span>
                <span className="text-3xl md:text-6xl font-display text-stone-300 group-hover:text-white group-hover:translate-x-3 transition-all duration-300">
                  {link.label}
                </span>
              </div>
              <span className="text-xs font-mono text-stone-600 group-hover:text-stone-300 transition-colors hidden sm:inline-block">
                {link.count}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Global Clocks & Quick Connect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:border-l lg:border-white/10 lg:pl-12"
        >
          {/* Time Clocks */}
          <div>
            <span className="text-xs uppercase font-mono text-orange-500 tracking-widest block mb-4 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" /> Synchronized Timezones
            </span>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-stone-900/40 border border-white/5">
                <span className="text-stone-500 font-mono block">Kolkata (IST)</span>
                <span className="text-lg font-mono text-orange-400">{times.kolkata || "20:30"}</span>
              </div>
              <div className="p-3 bg-stone-900/40 border border-white/5">
                <span className="text-stone-500 font-mono block">London (GMT)</span>
                <span className="text-lg font-mono text-stone-100">{times.london || "15:30"}</span>
              </div>
              <div className="p-3 bg-stone-900/40 border border-white/5">
                <span className="text-stone-500 font-mono block">New York (EST)</span>
                <span className="text-lg font-mono text-stone-100">{times.nyc || "10:30"}</span>
              </div>
              <div className="p-3 bg-stone-900/40 border border-white/5">
                <span className="text-stone-500 font-mono block">Tokyo (JST)</span>
                <span className="text-lg font-mono text-stone-100">{times.tokyo || "23:30"}</span>
              </div>
            </div>
          </div>

          {/* Direct Collaboration Card */}
          <div className="p-6 bg-stone-900/60 border border-white/10 space-y-4">
            <span className="text-xs uppercase font-mono text-stone-400 tracking-widest block">
              Available For Opportunities
            </span>
            <p className="text-stone-300 text-xs leading-relaxed">
              Open to high-impact Frontend Developer roles, full-stack engineering contracts, and creative UI/UX collaborations.
            </p>

            <div className="flex gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-stone-950 hover:bg-stone-800 border border-white/10 text-stone-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-stone-950 hover:bg-stone-800 border border-white/10 text-stone-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onClose();
                  onOpenEnquiry("Direct Collaboration");
                }}
                className="flex-1 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-[0_0_15px_rgba(249,115,22,0.3)]"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500 font-mono">
        <div>{profile.name} • Frontend Engineer • {profile.location}</div>
        <div>All rights reserved © {new Date().getFullYear()}</div>
      </div>
    </motion.div>
  );
}
