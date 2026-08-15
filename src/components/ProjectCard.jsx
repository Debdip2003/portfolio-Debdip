import React from "react";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group ios-glass p-1.5 rounded-[32px] hover:border-theme-border-hover transition-all duration-500 cursor-pointer flex flex-col justify-between"
    >
      <div className="overflow-hidden rounded-[28px] relative aspect-[4/3] bg-theme-secondary">
        {/* Visual Element */}
        {project.img ? (
          <div className="w-full h-full relative overflow-hidden">
            <img
              src={project.img}
              alt={project.name || project.title}
              className="w-full h-full object-cover card-image-hover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-modal-backdrop)] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
          </div>
        ) : (
          project.visual
        )}

        {/* Live Badge */}
        {project.hasLiveLink && (
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-theme-card backdrop-blur-md border border-theme-accent-border px-2.5 py-1 rounded-full text-[10px] font-mono text-theme-accent shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-theme-accent animate-pulse" />
            <span>LIVE</span>
          </div>
        )}

        {/* Overlay Button */}
        <div className="absolute top-4 right-4 bg-theme-card backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:bg-theme-accent group-hover:text-theme-accent-text transition-all duration-300 shadow-lg text-theme-text">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>

      {/* Card Info */}
      <div className="p-5 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-medium text-theme-text tracking-tight group-hover:text-theme-accent transition-colors">
            {project.name || project.title}
          </h3>
          <p className="text-sm text-theme-muted mt-1 font-light line-clamp-1">
            {project.subtitle || project.desc || "Digital experience & product"}
          </p>
        </div>

        <div className="flex gap-1.5 flex-wrap justify-end max-w-[45%]">
          {(project.tags || []).slice(0, 2).map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-theme-pill border border-theme-border text-[10px] font-medium text-theme-muted tracking-wider uppercase font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
