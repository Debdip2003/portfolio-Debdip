import React from "react";
import { X, MapPin, GraduationCap, Heart } from "lucide-react";

const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--bg-modal-backdrop)] backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl ios-glass rounded-[32px] p-6 sm:p-8 border border-theme-border-hover shadow-2xl tiffany-glow overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-theme-pill hover:bg-theme-pill-hover text-theme-muted hover:text-theme-text transition-all"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[var(--accent-primary)] to-[var(--accent-blue)] p-[2px] shadow-lg shadow-[var(--accent-glow)] shrink-0">
            <div className="w-full h-full rounded-full bg-theme-bg flex items-center justify-center">
              <span className="text-xl font-bold text-theme-text tracking-wider">DB</span>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-theme-text tracking-tight">
              Debdip Bhattacharya
            </h3>
            <div className="flex items-center gap-2 text-theme-muted text-xs mt-1">
              <MapPin className="w-3.5 h-3.5 text-theme-accent" />
              <span>Kolkata, India</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-sm text-theme-secondary-text font-light leading-relaxed mb-6">
          <p>
            I am a Frontend Developer and UI/UX Designer driven by craft, aesthetics, and high-performance web architecture. I specialize in turning complex design challenges into intuitive, responsive, and delightful user experiences.
          </p>
          <p>
            With extensive experience across React, Next.js, Tailwind CSS, TypeScript, and modern animation libraries, I bridge the gap between creative visual design and robust software engineering.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-theme-border text-xs">
          <div className="p-3.5 rounded-2xl bg-theme-pill border border-theme-border">
            <div className="flex items-center gap-1.5 text-theme-accent font-mono mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <p className="text-theme-muted font-light">B.Tech in Computer Science & Engineering</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-theme-pill border border-theme-border">
            <div className="flex items-center gap-1.5 text-theme-accent font-mono mb-1">
              <Heart className="w-4 h-4" />
              <span>Passions</span>
            </div>
            <p className="text-theme-muted font-light">Interactive WebGL, UI Motion, Clean Architecture</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
