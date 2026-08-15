import React from "react";
import { X, MapPin, GraduationCap, Heart } from "lucide-react";


const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-xl ios-glass rounded-[32px] p-6 sm:p-8 border border-white/15 shadow-2xl tiffany-glow overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/60 hover:text-white transition-all"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#81D8D0] to-blue-600 p-[2px]">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <span className="text-xl font-bold text-white">DB</span>
            </div>

          </div>
          <div>
            <h3 className="text-2xl font-medium text-white tracking-tight">
              Debdip Bhattacharya
            </h3>
            <div className="flex items-center gap-2 text-white/50 text-xs mt-1">
              <MapPin className="w-3.5 h-3.5 text-[#81D8D0]" />
              <span>Kolkata, India</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-sm text-white/70 font-light leading-relaxed mb-6">
          <p>
            I am a Frontend Developer and UI/UX Designer driven by craft, aesthetics, and high-performance web architecture. I specialize in turning complex design challenges into intuitive, responsive, and delightful user experiences.
          </p>
          <p>
            With extensive experience across React, Next.js, Tailwind CSS, TypeScript, and modern animation libraries, I bridge the gap between creative visual design and robust software engineering.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-1.5 text-[#81D8D0] font-mono mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <p className="text-white/60 font-light">B.Tech in Computer Science & Engineering</p>
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-1.5 text-[#81D8D0] font-mono mb-1">
              <Heart className="w-4 h-4" />
              <span>Passions</span>
            </div>
            <p className="text-white/60 font-light">Interactive WebGL, UI Motion, Clean Architecture</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
