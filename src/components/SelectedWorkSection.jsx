import React, { useState } from "react";
import { Sparkles } from "lucide-react";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import realProjects from "../data/projects";

const SelectedWorkSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  const showcaseProjects = [
    {
      id: "lumina",
      title: "Lumina Finance",
      name: "Lumina Finance",
      subtitle: "Fintech Dashboard & Design System",
      desc: "An intelligent wealth management dashboard engineered for institutional investors. Features real-time liquidity analytics, automated algorithmic rebalancing, dynamic multi-asset portfolio tracking, and an extensive custom token design system.",
      tags: ["Design", "Dev", "Fintech", "React"],
      category: "Fintech",
      firstLink: "https://lumina-finance-demo.vercel.app",
      secondLink: "https://github.com/Debdip2003/lumina-finance",
      visual: (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/60 to-black card-image-hover flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl flex flex-col p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between mb-4">
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-mono text-xs font-bold shadow-lg shadow-indigo-500/40">
                LF
              </div>
              <div className="h-2 w-12 bg-white/20 rounded-full" />
            </div>
            <div className="h-2 w-1/2 bg-white/20 rounded-full mb-2" />
            <div className="h-2 w-1/3 bg-white/10 rounded-full mb-6" />
            <div className="mt-auto grid grid-cols-3 gap-2">
              <div className="h-8 bg-indigo-500/20 rounded-lg border border-indigo-500/30" />
              <div className="h-8 bg-emerald-500/20 rounded-lg border border-emerald-500/30" />
              <div className="h-8 bg-[#81D8D0]/20 rounded-lg border border-[#81D8D0]/30" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "zenith",
      title: "Zenith AI",
      name: "Zenith AI",
      subtitle: "Conversational Interface & LLM Workspace",
      desc: "Next-generation generative AI platform designed for multimodal reasoning, prompt engineering workspaces, and seamless voice-first interactions with zero-latency streaming responses.",
      tags: ["Product", "AI", "LLM", "Next.js"],
      category: "Artificial Intelligence",
      firstLink: "https://zenith-ai-interface.vercel.app",
      secondLink: "https://github.com/Debdip2003/zenith-ai",
      visual: (
        <div className="absolute inset-0 bg-gradient-to-tr from-[#81D8D0]/10 to-emerald-950/40 card-image-hover flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border border-white/10 flex items-center justify-center relative shadow-inner">
            <div
              className="absolute inset-0 rounded-full border border-dashed border-[#81D8D0]/40 animate-spin-slow"
              style={{ animationDuration: "14s" }}
            />
            <div className="absolute inset-4 rounded-full border border-white/10 animate-pulse" />
            <span className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#81D8D0]">
              ZENITH
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "chronos",
      title: "Chronos Mobile",
      name: "Chronos Mobile",
      subtitle: "Productivity iOS Application",
      desc: "Ultra-fast native iOS time-blocking application featuring gesture-first scheduling, focus tracking with haptic feedback, and offline-first cloud synchronization.",
      tags: ["iOS", "SwiftUI", "Mobile", "Framer"],
      category: "Mobile Design",
      firstLink: "https://chronos-app-demo.vercel.app",
      secondLink: "https://github.com/Debdip2003/chronos-mobile",
      visual: (
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-950/40 to-black card-image-hover flex items-center justify-center">
          <div className="flex gap-4 transform rotate-12 opacity-85 group-hover:rotate-6 group-hover:scale-105 transition-all duration-500">
            <div className="w-16 h-32 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 p-2 flex flex-col gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-500/40" />
              <div className="w-full h-1 bg-white/20 rounded" />
              <div className="w-2/3 h-1 bg-white/10 rounded" />
            </div>
            <div className="w-16 h-32 bg-[#81D8D0]/20 rounded-xl backdrop-blur-sm border border-[#81D8D0]/30 mt-8 p-2 flex flex-col gap-2 shadow-lg shadow-[#81D8D0]/10">
              <div className="w-6 h-6 rounded-full bg-[#81D8D0]/60" />
              <div className="w-full h-1 bg-white/40 rounded" />
              <div className="w-3/4 h-1 bg-white/20 rounded" />
            </div>
            <div className="w-16 h-32 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 p-2 flex flex-col gap-2">
              <div className="w-6 h-6 rounded-full bg-indigo-500/40" />
              <div className="w-full h-1 bg-white/20 rounded" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "structure",
      title: "Structure Inc.",
      name: "Structure Inc.",
      subtitle: "Architecture Firm Rebrand & Portal",
      desc: "Minimalist corporate web identity and interactive 3D portfolio for an avant-garde architectural firm based in San Francisco and Tokyo.",
      tags: ["Brand", "Web", "Three.js", "WebGL"],
      category: "Branding & Web",
      firstLink: "https://structure-inc.vercel.app",
      secondLink: "https://github.com/Debdip2003/structure-inc",
      visual: (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-black card-image-hover flex flex-col items-center justify-center gap-2.5 p-6">
          <div className="w-48 h-1 bg-white/20 rounded-full" />
          <div className="w-32 h-1 bg-white/20 rounded-full" />
          <div className="w-40 h-1 bg-white/20 rounded-full" />
          <div className="mt-4 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white/60 font-mono flex items-center gap-2 group-hover:border-[#81D8D0]/40 transition-colors">
            <span className="text-[#81D8D0]">&gt;</span>
            <span>npm install structure</span>
          </div>
        </div>
      ),
    },
  ];

  // Map real projects to uniform format
  const mappedRealProjects = (realProjects || []).map((p) => ({
    ...p,
    title: p.name,
    subtitle: p.type || "Live Web Application",
  }));

  const allProjects = [...showcaseProjects, ...mappedRealProjects];

  const filteredProjects =
    activeTab === "all"
      ? allProjects
      : activeTab === "featured"
      ? showcaseProjects
      : mappedRealProjects;

  return (
    <section
      id="work"
      className="w-full max-w-7xl px-4 md:px-8 py-24 z-10 border-t border-white/5"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#81D8D0]" />
            <span className="text-xs uppercase tracking-widest text-[#81D8D0] font-mono">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-2">
            Selected Work
          </h2>
          <p className="text-white/50 text-base md:text-lg font-light tracking-wide max-w-lg">
            A curated collection of digital products, design systems, and web applications I've engineered.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10 self-start md:self-auto">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === "all"
                ? "bg-[#81D8D0] text-black font-semibold shadow-sm"
                : "text-white/60 hover:text-white"
            }`}
          >
            All Work
          </button>
          <button
            onClick={() => setActiveTab("featured")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === "featured"
                ? "bg-[#81D8D0] text-black font-semibold shadow-sm"
                : "text-white/60 hover:text-white"
            }`}
          >
            Design Systems
          </button>
          <button
            onClick={() => setActiveTab("live")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === "live"
                ? "bg-[#81D8D0] text-black font-semibold shadow-sm"
                : "text-white/60 hover:text-white"
            }`}
          >
            Production Apps
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id || idx}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {/* Project Modal View */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default SelectedWorkSection;
