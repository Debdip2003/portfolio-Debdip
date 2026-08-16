import React, { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";

export default function Navigation({ onOpenMenu, onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const { profile } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white px-6 md:px-12 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "py-4 bg-black/40 backdrop-blur-sm" : "py-6"
      }`}
    >
      <a href="#" className="font-display text-xl md:text-2xl tracking-tight font-semibold flex items-center gap-2">
        <span>{profile.shortName}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 hidden sm:inline-block shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
      </a>

      <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase">
        <a href="#portfolio" className="hover:opacity-50 transition-opacity">
          Projects
        </a>
        <a href="#experience" className="hover:opacity-50 transition-opacity">
          Experience
        </a>
        <a href="#open-source" className="hover:opacity-50 transition-opacity">
          Open Source
        </a>
        <a href="#github-activity" className="hover:opacity-50 transition-opacity">
          GitHub
        </a>
        <a href="#capabilities" className="hover:opacity-50 transition-opacity">
          Capabilities
        </a>
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={() => onOpenEnquiry("Project / Role Collaboration")}
          className="hidden lg:inline-block text-xs uppercase tracking-widest text-stone-300 hover:text-white border-b border-stone-500 pb-0.5 hover:border-white transition-all"
        >
          Contact
        </button>

        <button
          onClick={onOpenMenu}
          aria-label="Open Navigation Menu"
          className="flex items-center gap-3 group focus:outline-none cursor-pointer"
        >
          <span className="text-xs uppercase tracking-widest group-hover:opacity-50 transition-opacity">Menu</span>
          <div className="space-y-1">
            <span className="block w-5 h-[1px] bg-white group-hover:w-6 transition-all duration-300"></span>
            <span className="block w-3 h-[1px] bg-white group-hover:w-5 transition-all duration-300 ml-auto"></span>
          </div>
        </button>
      </div>
    </nav>
  );
}
