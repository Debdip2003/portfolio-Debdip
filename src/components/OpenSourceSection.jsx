import React, { useState } from "react";
import { GitPullRequest, ExternalLink, Sparkles, Cpu, CheckCircle2, ChevronRight, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const OpenSourceSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const contribution = {
    title: "DoxDock",
    role: "Open Source Contributor",
    period: "Jul – Aug 2026",
    github: "https://github.com/mithun-srinivas/DoxDock",
    live: "https://doxdock.vercel.app/",
    tech: ["React.js", "WebAssembly", "ONNX Runtime Web", "U²NetP", "Canvas API", "ESLint"],
    highlights: [
      {
        title: "In-Browser AI Background Removal",
        tag: "ONNX & WASM",
        desc: "Shipped an AI-powered background removal tool using U²NetP, ONNX Runtime Web, and WebAssembly. Performs client-side image segmentation entirely in the browser with zero external server data transfer.",
        details: [
          "Implemented local ONNX model loading, session caching, preprocessing, mask generation, and alpha-channel composition.",
          "Engineered offline-first pipeline by bundling model & WASM locally, eliminating network requests during inference.",
        ],
      },
      {
        title: "Image Color Inversion Tool",
        tag: "Canvas API",
        desc: "Engineered and merged an Image Color Inversion processing tool using React.js and Canvas API with high performance support for PNG and JPEG formats.",
        details: [
          "Client-side pixel manipulation with direct canvas buffer processing.",
          "Seamless export pipeline preserving original image resolution and aspect ratio.",
        ],
      },
      {
        title: "Global Drag-and-Drop Architecture",
        tag: "Event System",
        desc: "Built a reusable global drag-and-drop system that routes files dropped anywhere in the application to the active tool.",
        details: [
          "Interactive visual feedback overlays on drag enter/leave.",
          "Duplicate-event prevention and lifecycle-safe event listener cleanup.",
        ],
      },
      {
        title: "Tooling & Maintainer Collaboration",
        tag: "Code Quality",
        desc: "Established project-wide ESLint and Prettier rules with React Hooks & Refresh configurations, automated lint scripts, and contributor documentation.",
        details: [
          "Collaborated closely with project maintainers across issues, PRs, and code reviews.",
          "Multiple core features successfully merged into the production release.",
        ],
      },
    ],
  };

  return (
    <section
      id="open-source"
      className="w-full max-w-7xl px-4 md:px-8 py-24 z-10 border-t border-white/5"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#81D8D0]" />
            <span className="text-xs uppercase tracking-widest text-[#81D8D0] font-mono">
              Open Source
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-2">
            Open Source Contributions
          </h2>
          <p className="text-white/50 text-base md:text-lg font-light tracking-wide max-w-lg">
            Contributing to high-performance developer tools, client-side AI, and WebAssembly ecosystems.
          </p>
        </div>
      </div>

      {/* Main Contribution Showcase Card */}
      <div className="ios-glass rounded-[32px] p-6 sm:p-10 border border-white/10 relative overflow-hidden tiffany-glow group">
        {/* Subtle Ambient Backlight */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#81D8D0]/10 via-blue-900/10 to-transparent rounded-full filter blur-3xl pointer-events-none" />

        {/* Top Meta Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10 relative z-10">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#81D8D0] to-blue-600 p-[2px] shadow-lg shadow-[#81D8D0]/20 shrink-0">
              <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                <GitPullRequest className="w-6 h-6 text-[#81D8D0]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                  {contribution.title}
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#81D8D0]/15 text-[#81D8D0] text-xs font-mono border border-[#81D8D0]/30 font-medium">
                  {contribution.role}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/40 font-mono mt-1">
                {contribution.period} • In-Browser AI & WASM Image Processing
              </p>
            </div>
          </div>

          {/* Quick Action Links */}
          <div className="flex items-center gap-3">
            <a
              href={contribution.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#81D8D0] text-black px-5 py-2.5 rounded-full font-medium text-xs hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_-5px_rgba(129,216,208,0.5)]"
            >
              <span>Live Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={contribution.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full font-medium text-xs border border-white/10 transition-all"
            >
              <FaGithub className="w-3.5 h-3.5" />
              <span>Repository</span>
            </a>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 py-6 border-b border-white/5 relative z-10">
          {contribution.tech.map((item, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Interactive Feature Deep Dive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-8 relative z-10">
          {/* Feature Selector Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            <p className="text-xs uppercase font-mono text-white/40 tracking-wider mb-1">
              Key Engineering Accomplishments
            </p>
            {contribution.highlights.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFeature(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 flex items-center justify-between border ${
                  activeFeature === idx
                    ? "bg-white/10 border-[#81D8D0]/40 text-white shadow-md shadow-black/40"
                    : "bg-white/5 border-transparent text-white/60 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#81D8D0]">{`0${idx + 1}`}</span>
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                  <span className="text-[11px] font-mono text-white/40 mt-1 block">
                    {item.tag}
                  </span>
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeFeature === idx ? "text-[#81D8D0] translate-x-1" : "text-white/30"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Active Feature Detail Showcase Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-4 h-4 text-[#81D8D0]" />
                <span className="text-xs font-mono text-[#81D8D0] uppercase tracking-wider">
                  {contribution.highlights[activeFeature].tag} Architecture
                </span>
              </div>

              <h4 className="text-xl font-medium text-white tracking-tight mb-3">
                {contribution.highlights[activeFeature].title}
              </h4>

              <p className="text-sm text-white/70 font-light leading-relaxed mb-6">
                {contribution.highlights[activeFeature].desc}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10">
                {contribution.highlights[activeFeature].details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#81D8D0] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40 font-mono">
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#81D8D0]" />
                <span>Production Merged PRs</span>
              </div>
              <span className="text-[#81D8D0]">Verified Contributor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
