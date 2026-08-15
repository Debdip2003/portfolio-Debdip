import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import realProjects from "../data/projects";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.12,
    },
  },
};

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
    <motion.section
      id="work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionVariants}
      className="w-full max-w-7xl px-4 md:px-8 py-24 z-10 border-t border-theme-border"
    >
      {/* Section Header */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
      >
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

        {/* Filter Pills with Sliding layoutId */}
        <div className="flex items-center gap-1.5 bg-theme-pill p-1 rounded-full border border-theme-border self-start md:self-auto">
          <button
            onClick={() => setActiveTab("all")}
            className={`relative px-4 py-2 rounded-full text-xs font-medium transition-colors z-10 ${
              activeTab === "all"
                ? "text-theme-accent-text font-semibold"
                : "text-theme-muted hover:text-theme-text"
            }`}
          >
            {activeTab === "all" && (
              <motion.div
                layoutId="activeWorkTab"
                className="absolute inset-0 rounded-full bg-theme-accent shadow-sm -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span>All Work ({allProjects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("production")}
            className={`relative px-4 py-2 rounded-full text-xs font-medium transition-colors z-10 ${
              activeTab === "production"
                ? "text-theme-accent-text font-semibold"
                : "text-theme-muted hover:text-theme-text"
            }`}
          >
            {activeTab === "production" && (
              <motion.div
                layoutId="activeWorkTab"
                className="absolute inset-0 rounded-full bg-theme-accent shadow-sm -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span>Production Work ({productionProjects.length})</span>
          </button>
        </div>
      </motion.div>

      {/* Projects Grid with layout animations */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id || project.name || idx}
              project={project}
              onSelect={setSelectedProject}
              index={idx}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Modal View */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default SelectedWorkSection;
