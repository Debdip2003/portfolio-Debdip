import React, { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { portfolioData } from "../data/portfolioData";

export default function Portfolio({ onSelectProject }) {
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const projects = portfolioData.projects;

  const filteredProjects =
    selectedFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="portfolio" className="relative border-b border-white/5 bg-[#050505]">
      <div className="flex flex-col lg:flex-row">
        {/* Sticky Sidebar (1/3) */}
        <div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0 p-6 md:p-12 flex flex-col justify-center border-r border-white/5 bg-[#050505] z-10">
          <span className="text-xs text-orange-500 uppercase tracking-widest mb-6 block font-mono">
            Selected Works
          </span>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-6 leading-tight">
            Built with
            <br />
            Precision.
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed mb-8 max-w-sm font-light">
            A curated showcase of production applications, enterprise admin portals, e-commerce architectures, and
            open-source systems engineered with high performance and fluid aesthetics.
          </p>

          {/* Interactive Filters */}
          <div className="flex flex-col gap-3">
            {["ALL", "PERSONAL", "FREELANCE", "COLLEGE"].map((cat) => {
              const isActive = selectedFilter === cat;
              const count =
                cat === "ALL"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`flex items-center justify-between text-xs font-mono py-2 px-3 border transition-all text-left group cursor-pointer ${
                    isActive
                      ? "border-orange-500/40 bg-orange-500/5 text-orange-400"
                      : "border-transparent text-stone-500 hover:text-stone-300 hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`w-8 h-[1px] transition-all duration-300 ${
                        isActive ? "bg-orange-500 w-12" : "bg-stone-800 group-hover:bg-stone-600"
                      }`}
                    />
                    <span>{cat} PROJECTS</span>
                  </div>
                  <span className="text-[10px] text-stone-600">{count > 0 ? `0${count}` : "00"}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-12 pt-6 border-t border-white/5 hidden lg:block text-[11px] text-stone-600 font-mono">
            <span>DEBDIP BHATTACHARYA • FRONTEND ENGINEERING ARCHIVE</span>
          </div>
        </div>

        {/* Scrollable Projects Content (2/3) */}
        <div className="lg:w-2/3 bg-[#080808]">
          {filteredProjects.length === 0 ? (
            <div className="min-h-[50vh] flex flex-col items-center justify-center p-12 text-center text-stone-500 font-mono text-sm">
              <p>No projects matching this filter.</p>
              <button
                onClick={() => setSelectedFilter("ALL")}
                className="mt-4 text-xs text-orange-500 uppercase tracking-widest underline underline-offset-4 cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative min-h-screen flex items-center p-6 md:p-16 border-b border-white/5 hover:bg-[#0a0a0a] transition-colors duration-500 cursor-pointer"
              >
                <div className="w-full">
                  {/* Top Bar */}
                  <div className="flex justify-between items-baseline mb-6">
                    <h3 className="text-3xl md:text-5xl font-display text-stone-200 group-hover:text-white transition-colors">
                      {project.id}. {project.title}
                    </h3>
                    <span className="text-xs font-mono text-stone-600 group-hover:text-stone-400 transition-colors">
                      {project.code}
                    </span>
                  </div>

                  {/* Image Container with Reveal */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out border border-white/5">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000"
                    />

                    {/* Gradient Overlay & Info Reveal */}
                    <div className="reveal-info absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 translate-y-4 transition-all duration-500">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-3">
                        <div>
                          <p className="text-white text-xs tracking-widest uppercase font-medium">{project.type}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.tags?.map((t, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] font-mono px-2 py-0.5 bg-black/60 border border-white/10 text-stone-300"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-orange-400 font-mono text-xs shrink-0">{project.valuation}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description & Action Links */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-t border-white/10 pt-6 gap-6">
                    <p className="text-stone-500 text-sm max-w-md font-light leading-relaxed group-hover:text-stone-400 transition-colors">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-3.5 py-2 bg-stone-900 hover:bg-stone-800 border border-white/15 text-stone-200 text-xs font-mono flex items-center gap-1.5 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-orange-500" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 bg-stone-900 hover:bg-stone-800 border border-white/15 text-stone-200 transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <FaGithub className="w-4 h-4" />
                        </a>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(project);
                        }}
                        aria-label={`View dossier for ${project.title}`}
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:scale-105 transition-all"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
