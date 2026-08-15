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
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { SiFigma, SiNextdotjs } from "react-icons/si";

const HeroSection = ({ isDarkMode, setIsDarkMode, onProfileClick }) => {
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
      <div className="md:col-span-7 flex flex-col justify-center gap-6 md:gap-8">
        {/* Availability Badge */}
        <div className="flex items-center gap-3 opacity-0 animate-fade-in animate-delay-100">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-theme-accent"></span>
          </span>
          <span className="text-xs font-medium tracking-wide text-theme-accent uppercase font-mono">
            Available for new projects
          </span>
        </div>

        {/* Main Heading */}
        <div className="opacity-0 animate-fade-in animate-delay-200">
          <h1 className="text-5xl sm:text-6xl md:text-[80px] leading-[0.95] tracking-tight font-medium text-transparent bg-clip-text bg-gradient-to-b from-[var(--heading-gradient-from)] via-[var(--heading-gradient-via)] to-[var(--heading-gradient-to)]">
            Debdip
            <br />
            Bhattacharya
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-theme-muted max-w-md font-light tracking-wide leading-relaxed">
            Crafting fluid interfaces with precision and motion. Frontend
            engineer & UI/UX specialist designing for the future.
          </p>
        </div>

        {/* Action Area */}
        <div className="flex flex-wrap items-center gap-6 opacity-0 animate-fade-in animate-delay-300">
          <a
            href="#work"
            onClick={scrollToWork}
            className="group flex items-center gap-2 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] px-6 py-3.5 rounded-full font-medium text-sm hover:scale-[1.03] active:scale-95 transition-all duration-200 shadow-lg"
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
              className="text-theme-muted hover:text-theme-accent hover:scale-110 transition-all p-1"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/debdipb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-muted hover:text-theme-accent hover:scale-110 transition-all p-1"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="mailto:dbhattacharya1912@gmail.com"
              className="text-theme-muted hover:text-theme-accent hover:scale-110 transition-all p-1"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: iOS Widgets Grid */}
      <div className="md:col-span-5 flex flex-col gap-4 opacity-0 animate-fade-in animate-delay-300">
        {/* Widget Container */}
        <div className="relative w-full grid grid-cols-2 grid-rows-3 gap-4">
          {/* Profile Card */}
          <div
            onClick={onProfileClick}
            className="ios-glass rounded-[32px] p-6 col-span-2 flex items-center justify-between hover:bg-theme-card-hover transition-all duration-500 group tiffany-glow cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[var(--accent-primary)] to-[var(--accent-blue)] p-[2px] shadow-lg shadow-[var(--accent-glow)]">
                <div className="w-full h-full rounded-full bg-theme-bg flex items-center justify-center overflow-hidden">
                  <span className="font-semibold text-lg text-theme-text tracking-wider">
                    DB
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-theme-text font-medium text-base tracking-tight">
                  Web & UI Engineer
                </h3>
                <p className="text-theme-muted text-xs mt-0.5">
                  Focus on UI/UX & Interaction
                </p>
              </div>
            </div>
            <div className="h-10 w-10 rounded-full bg-theme-pill flex items-center justify-center group-hover:bg-theme-accent group-hover:text-theme-accent-text group-hover:rotate-45 transition-all duration-300 text-theme-muted">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Stats Widget */}
          <div className="ios-glass rounded-[32px] p-5 flex flex-col justify-between group hover:bg-theme-card-hover transition-colors cursor-default">
            <div className="flex justify-between items-start">
              <div className="p-2.5 rounded-xl bg-theme-pill text-theme-accent group-hover:scale-110 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="text-2xl font-medium text-theme-text tracking-tight">
                25+
              </div>
              <div className="text-xs text-theme-muted mt-1">Projects Shipped</div>
            </div>
          </div>

          {/* Toggle Widget (Interactive iOS Dark / Light Mode Toggle) */}
          <div className="ios-glass rounded-[32px] p-5 flex flex-col justify-between group hover:bg-theme-card-hover transition-colors">
            <div className="flex justify-between items-start w-full">
              <div className="p-2.5 rounded-xl bg-theme-pill">
                {isDarkMode ? (
                  <Moon className="w-5 h-5 text-theme-accent transition-transform duration-300 group-hover:rotate-12" />
                ) : (
                  <Sun className="w-5 h-5 text-[var(--accent-amber)] transition-transform duration-300 group-hover:rotate-45" />
                )}
              </div>
              {/* Custom iOS Toggle */}
              <label
                htmlFor="theme-toggle"
                className="relative inline-flex items-center cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  id="theme-toggle"
                  checked={isDarkMode}
                  onChange={(e) => setIsDarkMode(e.target.checked)}
                  className="sr-only peer"
                  aria-label="Toggle dark and light mode"
                />
                <div className="w-11 h-6 bg-theme-pill peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-[var(--btn-primary-bg)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[var(--btn-primary-bg)] after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-theme-accent transition-colors duration-300 shadow-inner"></div>
              </label>
            </div>
            <div>
              <div className="text-sm font-medium text-theme-text tracking-tight mt-4 flex items-center gap-1.5">
                <span>{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
              </div>
              <div className="text-[10px] text-theme-muted mt-1">
                {isDarkMode ? "Deep Onyx & Glass" : "Clean Crisp Glass"}
              </div>
            </div>
          </div>

          {/* Skill Stack / Visual */}
          <div className="ios-glass rounded-[32px] col-span-2 row-span-1 p-6 flex items-center justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="text-theme-text font-medium text-lg tracking-tight">
                Tech Stack
              </h4>
              <div className="flex gap-4 mt-3">
                <div
                  className="flex items-center gap-1.5 text-theme-muted hover:text-theme-accent transition-colors"
                  title="React & Code"
                >
                  <Code2 className="w-4 h-4" />
                  <span className="text-xs font-mono">React</span>
                </div>
                <div
                  className="flex items-center gap-1.5 text-theme-muted hover:text-theme-accent transition-colors"
                  title="Figma UI/UX"
                >
                  <SiFigma className="w-4 h-4" />
                  <span className="text-xs font-mono">Figma</span>
                </div>
                <div
                  className="flex items-center gap-1.5 text-theme-muted hover:text-theme-accent transition-colors"
                  title="Next.js & Web"
                >
                  <SiNextdotjs className="w-4 h-4" />
                  <span className="text-xs font-mono">Next.js</span>
                </div>
              </div>
            </div>

            {/* Abstract Shape Glow */}
            <div className="absolute right-[-20px] bottom-[-40px] w-32 h-32 bg-gradient-to-br from-[var(--accent-primary)] to-transparent rounded-full opacity-20 blur-2xl group-hover:opacity-35 transition-opacity duration-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
