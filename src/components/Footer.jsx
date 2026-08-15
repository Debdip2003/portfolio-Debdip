import React from "react";
import { ArrowUp } from "lucide-react";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full max-w-7xl px-4 md:px-8 py-12 border-t border-white/5 mt-10 z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
      <div>
        <p className="text-[11px] text-white/30 uppercase tracking-widest font-mono">
          Designed with Precision
        </p>
        <p className="text-xs text-white/50 mt-1">
          © {new Date().getFullYear()} Debdip Bhattacharya. All rights reserved.
        </p>
      </div>

      <div className="flex items-center gap-6">
        <a
          href="https://github.com/Debdip2003"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white/40 hover:text-[#81D8D0] transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white/40 hover:text-[#81D8D0] transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:dbhattacharya1912@gmail.com"
          className="text-xs text-white/40 hover:text-[#81D8D0] transition-colors"
        >
          Email
        </a>

        <button
          onClick={scrollToTop}
          className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/60 hover:text-white transition-all ml-2"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
