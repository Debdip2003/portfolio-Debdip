import React from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Layers,
  Moon,
  Sun,
  Code2,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaDribbble } from "react-icons/fa6";
import { SiFigma, SiNextdotjs } from "react-icons/si";


const HeroSection = ({ isAmbientOn, setIsAmbientOn, onProfileClick }) => {
  const scrollToWork = (e) => {
    e.preventDefault();
    const el = document.getElementById("work");
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main
      id="hero"
      className="w-full max-w-7xl px-4 md:px-8 z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center min-h-screen pt-28 pb-12"
    >
      {/* Left Column: Title & Intro */}
      <div className="md:col-span-7 flex flex-col justify-center gap-6 md:gap-8 order-2 md:order-1">
        {/* Availability Badge */}
        <div className="flex items-center gap-3 opacity-0 animate-fade-in animate-delay-100">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#81D8D0] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#81D8D0]"></span>
          </span>
          <span className="text-xs font-medium tracking-wide text-[#81D8D0] uppercase">
            Available for new projects
          </span>
        </div>

        {/* Main Heading */}
        <div className="opacity-0 animate-fade-in animate-delay-200">
          <h1 className="text-5xl sm:text-6xl md:text-[80px] leading-[0.95] tracking-tight font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">
            Debdip
            <br />
            Bhattacharya
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/50 max-w-md font-light tracking-wide leading-relaxed">
            Crafting fluid interfaces with precision and motion. Frontend engineer & UI/UX specialist designing for the future.
          </p>
        </div>

        {/* Action Area */}
        <div className="flex flex-wrap items-center gap-6 opacity-0 animate-fade-in animate-delay-300">
          <a
            href="#work"
            onClick={scrollToWork}
            className="group flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-full font-medium text-sm hover:scale-[1.03] active:scale-95 transition-all duration-200 shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          >
            <span>View Portfolio</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Debdip2003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#81D8D0] hover:scale-110 transition-all p-1"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#81D8D0] hover:scale-110 transition-all p-1"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#81D8D0] hover:scale-110 transition-all p-1"
              aria-label="Twitter"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#81D8D0] hover:scale-110 transition-all p-1"
              aria-label="Dribbble"
            >
              <FaDribbble className="w-5 h-5" />
            </a>
            <a
              href="mailto:debdipbhattacharya2003@gmail.com"
              className="text-white/40 hover:text-[#81D8D0] hover:scale-110 transition-all p-1"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: iOS Widgets Grid */}
      <div className="md:col-span-5 flex flex-col gap-4 order-1 md:order-2 opacity-0 animate-fade-in animate-delay-300">
        {/* Widget Container */}
        <div className="relative w-full grid grid-cols-2 grid-rows-3 gap-4">
          {/* Profile Card */}
          <div
            onClick={onProfileClick}
            className="ios-glass rounded-[32px] p-6 col-span-2 flex items-center justify-between hover:bg-white/5 transition-all duration-500 group tiffany-glow cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#81D8D0] to-blue-600 p-[2px] shadow-lg shadow-[#81D8D0]/20">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                  <span className="font-semibold text-lg text-white tracking-wider">
                    DB
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-white font-medium text-base tracking-tight">
                  Web & UI Engineer
                </h3>
                <p className="text-white/40 text-xs mt-0.5">
                  Focus on UI/UX & Interaction
                </p>
              </div>
            </div>
            <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#81D8D0] group-hover:text-black group-hover:rotate-45 transition-all duration-300 text-white/40">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Stats Widget */}
          <div className="ios-glass rounded-[32px] p-5 flex flex-col justify-between group hover:bg-white/5 transition-colors cursor-default">
            <div className="flex justify-between items-start">
              <div className="p-2.5 rounded-xl bg-white/5 text-[#81D8D0] group-hover:scale-110 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="text-2xl font-medium text-white tracking-tight">
                25+
              </div>
              <div className="text-xs text-white/40 mt-1">Projects Shipped</div>
            </div>
          </div>

          {/* Toggle Widget (Interactive iOS Ambient / Dark Mode Toggle) */}
          <div className="ios-glass rounded-[32px] p-5 flex flex-col justify-between group hover:bg-white/5 transition-colors">
            <div className="flex justify-between items-start w-full">
              <div className="p-2.5 rounded-xl bg-white/5 text-white/60">
                {isAmbientOn ? (
                  <Moon className="w-5 h-5 text-[#81D8D0]" />
                ) : (
                  <Sun className="w-5 h-5 text-amber-300" />
                )}
              </div>
              {/* Custom iOS Toggle */}
              <label
                htmlFor="ambient-toggle"
                className="relative inline-flex items-center cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  id="ambient-toggle"
                  checked={isAmbientOn}
                  onChange={(e) => setIsAmbientOn(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#81D8D0]"></div>
              </label>
            </div>
            <div>
              <div className="text-sm font-medium text-white tracking-tight mt-4">
                {isAmbientOn ? "Ambient Glow" : "Minimal Dark"}
              </div>
              <div className="text-[10px] text-white/40 mt-1">
                {isAmbientOn ? "Active Ambiance" : "Deep Charcoal"}
              </div>
            </div>
          </div>

          {/* Skill Stack / Visual */}
          <div className="ios-glass rounded-[32px] col-span-2 row-span-1 p-6 flex items-center justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="text-white font-medium text-lg tracking-tight">
                Tech Stack
              </h4>
              <div className="flex gap-4 mt-3">
                <div className="flex items-center gap-1.5 text-white/60 hover:text-[#81D8D0] transition-colors" title="React & Code">
                  <Code2 className="w-4 h-4" />
                  <span className="text-xs font-mono">React</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/60 hover:text-[#81D8D0] transition-colors" title="Figma UI/UX">
                  <SiFigma className="w-4 h-4" />
                  <span className="text-xs font-mono">Figma</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/60 hover:text-[#81D8D0] transition-colors" title="Next.js & Web">
                  <SiNextdotjs className="w-4 h-4" />
                  <span className="text-xs font-mono">Next.js</span>
                </div>
              </div>
            </div>

            {/* Abstract Shape */}
            <div className="absolute right-[-20px] bottom-[-40px] w-32 h-32 bg-gradient-to-br from-[#81D8D0] to-transparent rounded-full opacity-20 blur-2xl group-hover:opacity-35 transition-opacity duration-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
