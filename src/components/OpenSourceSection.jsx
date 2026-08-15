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
      className="w-full max-w-7xl px-4 md:px-8 py-24 z-10 border-t border-theme-border"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-theme-accent" />
            <span className="text-xs uppercase tracking-widest text-theme-accent font-mono">
              Open Source
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-theme-text mb-2">
            Open Source Contributions
          </h2>
          <p className="text-theme-muted text-base md:text-lg font-light tracking-wide max-w-lg">
            Contributing to high-performance developer tools, client-side AI, and WebAssembly ecosystems.
          </p>
        </div>
      </div>

      {/* Main Contribution Showcase Card */}
      <div className="ios-glass rounded-[32px] p-6 sm:p-10 border border-theme-border relative overflow-hidden tiffany-glow group">
        {/* Subtle Ambient Backlight */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[var(--accent-primary-subtle)] via-transparent to-transparent rounded-full filter blur-3xl pointer-events-none" />

        {/* Top Meta Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-theme-border relative z-10">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[var(--accent-primary)] to-[var(--accent-blue)] p-[2px] shadow-lg shadow-[var(--accent-glow)] shrink-0">
              <div className="w-full h-full rounded-2xl bg-theme-bg flex items-center justify-center">
                <GitPullRequest className="w-6 h-6 text-theme-accent" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-2xl sm:text-3xl font-medium text-theme-text tracking-tight">
                  {contribution.title}
                </h3>
                <span className="px-3 py-1 rounded-full bg-theme-accent-subtle text-theme-accent text-xs font-mono border border-theme-accent-border font-medium">
                  {contribution.role}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-theme-muted font-mono mt-1">
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
              className="flex items-center gap-2 bg-theme-accent text-theme-accent-text px-5 py-2.5 rounded-full font-medium text-xs hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[var(--accent-glow)]"
            >
              <span>Live Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={contribution.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-theme-pill hover:bg-theme-pill-hover text-theme-text px-5 py-2.5 rounded-full font-medium text-xs border border-theme-border transition-all"
            >
              <FaGithub className="w-3.5 h-3.5" />
              <span>Repository</span>
            </a>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 py-6 border-b border-theme-border relative z-10">
          {contribution.tech.map((item, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-theme-pill border border-theme-border text-xs font-mono text-theme-muted"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Interactive Feature Deep Dive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-8 relative z-10">
          {/* Feature Selector Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            <p className="text-xs uppercase font-mono text-theme-subtle tracking-wider mb-1">
              Key Engineering Accomplishments
            </p>
            {contribution.highlights.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFeature(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 flex items-center justify-between border ${
                  activeFeature === idx
                    ? "bg-theme-card-hover border-theme-accent-border text-theme-text shadow-md"
                    : "bg-theme-pill border-transparent text-theme-muted hover:bg-theme-pill-hover hover:text-theme-text"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-theme-accent">{`0${idx + 1}`}</span>
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                  <span className="text-[11px] font-mono text-theme-subtle mt-1 block">
                    {item.tag}
                  </span>
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeFeature === idx ? "text-theme-accent translate-x-1" : "text-theme-subtle"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Active Feature Detail Showcase Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-theme-card-inner border border-theme-border flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-4 h-4 text-theme-accent" />
                <span className="text-xs font-mono text-theme-accent uppercase tracking-wider">
                  {contribution.highlights[activeFeature].tag} Architecture
                </span>
              </div>

              <h4 className="text-xl font-medium text-theme-text tracking-tight mb-3">
                {contribution.highlights[activeFeature].title}
              </h4>

              <p className="text-sm text-theme-secondary-text font-light leading-relaxed mb-6">
                {contribution.highlights[activeFeature].desc}
              </p>

              <div className="space-y-3 pt-4 border-t border-theme-border">
                {contribution.highlights[activeFeature].details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-theme-muted font-light leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-theme-border flex items-center justify-between text-xs text-theme-subtle font-mono">
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-theme-accent" />
                <span>Production Merged PRs</span>
              </div>
              <span className="text-theme-accent">Verified Contributor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
