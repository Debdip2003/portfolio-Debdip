import React, { useState } from "react";
import { Sparkles } from "lucide-react";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import realProjects from "../data/projects";

const SelectedWorkSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  // Map real projects to uniform format
  const mappedRealProjects = (realProjects || []).map((p) => {
    const hasLiveLink = Boolean(
      (p.firstLink || p.liveLink) && !p.firstButtonDisabled
    );
    return {
      ...p,
      title: p.name,
      subtitle: p.type || "Live Web Application",
      hasLiveLink,
    };
  });

  const allProjects = mappedRealProjects;
  const productionProjects = mappedRealProjects.filter((p) => p.hasLiveLink);

  const filteredProjects =
    activeTab === "all" ? allProjects : productionProjects;

  return (
    <section
      id="work"
      className="w-full max-w-7xl px-4 md:px-8 py-24 z-10 border-t border-theme-border"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-theme-accent" />
            <span className="text-xs uppercase tracking-widest text-theme-accent font-mono">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-theme-text mb-2">
            Selected Work
          </h2>
          <p className="text-theme-muted text-base md:text-lg font-light tracking-wide max-w-lg">
            A curated collection of digital products, design systems, and web applications I've engineered.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 bg-theme-pill p-1 rounded-full border border-theme-border self-start md:self-auto">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === "all"
                ? "bg-theme-accent text-theme-accent-text font-semibold shadow-sm"
                : "text-theme-muted hover:text-theme-text"
            }`}
          >
            All Work ({allProjects.length})
          </button>
          <button
            onClick={() => setActiveTab("production")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === "production"
                ? "bg-theme-accent text-theme-accent-text font-semibold shadow-sm"
                : "text-theme-muted hover:text-theme-text"
            }`}
          >
            Production Work ({productionProjects.length})
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
