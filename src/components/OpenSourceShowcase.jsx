import React, { useState } from "react";
import { GitPullRequest, ExternalLink, Cpu, CheckCircle2, ChevronRight, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { portfolioData } from "../data/portfolioData";

export default function OpenSourceShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);
  const { openSource } = portfolioData;

  return (
    <section id="open-source" className="py-24 md:py-32 bg-[#050505] border-b border-white/5 relative">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs text-orange-500 uppercase tracking-widest font-mono block mb-2">
              Open Source Contributions
            </span>
            <h2 className="text-3xl md:text-5xl font-display text-white">Client-Side AI & WASM</h2>
          </div>
          <p className="text-stone-400 text-sm md:text-base font-light max-w-md leading-relaxed">
            Contributing to high-performance developer utilities, local in-browser neural networks, and WebAssembly
            image processing pipelines.
          </p>
        </div>

        {/* Main Contribution Showcase Box */}
        <div className="bg-stone-900/30 border border-white/10 p-6 md:p-12 relative overflow-hidden luxury-border-glow">
          {/* Subtle Ambient Backlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full filter blur-[100px] pointer-events-none" />

          {/* Top Meta Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10 relative z-10">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 bg-orange-950/40 border border-orange-500/30 flex items-center justify-center text-orange-500 shrink-0">
                <GitPullRequest className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-2xl sm:text-3xl font-display text-white">{openSource.title}</h3>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-mono border border-orange-500/30 font-medium">
                    {openSource.role}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-400 font-mono mt-1">
                  {openSource.period} • In-Browser AI & WASM Image Processing
                </p>
              </div>
            </div>

            {/* Quick Action Links */}
            <div className="flex items-center gap-3">
              <a
                href={openSource.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-stone-100 hover:bg-white text-black px-5 py-2.5 font-semibold text-xs font-mono uppercase tracking-wider transition-all"
              >
                <span>Live App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={openSource.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-200 px-5 py-2.5 text-xs font-mono border border-white/10 transition-all"
              >
                <FaGithub className="w-4 h-4" />
                <span>Repository</span>
              </a>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 py-6 border-b border-white/10 relative z-10">
            {openSource.tech.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-stone-950/80 border border-white/10 text-xs font-mono text-stone-400"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Feature Deep Dive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-8 relative z-10">
            {/* Feature Selector Tabs */}
            <div className="lg:col-span-5 flex flex-col gap-2.5">
              <p className="text-xs uppercase font-mono text-stone-500 tracking-wider mb-1">
                Core Architectural Deliverables
              </p>
              {openSource.highlights.map((item, idx) => {
                const isActive = activeFeature === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveFeature(idx)}
                    className={`p-4 text-left transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                      isActive
                        ? "border-orange-500/50 bg-orange-500/10 text-white"
                        : "border-white/5 bg-stone-950/40 text-stone-400 hover:bg-stone-900/60 hover:text-stone-200"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-orange-500">{`0${idx + 1}`}</span>
                        <span className="text-sm font-medium">{item.title}</span>
                      </div>
                      <span className="text-[11px] font-mono text-stone-500 mt-1 block">{item.tag}</span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isActive ? "text-orange-500 translate-x-1" : "text-stone-600"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Active Feature Detail Showcase Card */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-[#0a0a0a] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="w-4 h-4 text-orange-500" />
                  <span className="text-xs font-mono text-orange-500 uppercase tracking-wider">
                    {openSource.highlights[activeFeature].tag} System
                  </span>
                </div>

                <h4 className="text-xl font-display text-white mb-3">
                  {openSource.highlights[activeFeature].title}
                </h4>

                <p className="text-sm text-stone-300 font-light leading-relaxed mb-6">
                  {openSource.highlights[activeFeature].desc}
                </p>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  {openSource.highlights[activeFeature].details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-400 font-light leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-stone-500 font-mono">
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-orange-500" />
                  <span>Production Merged PRs</span>
                </div>
                <span className="text-orange-400">Verified Contributor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
