import React from "react";
import { X, ExternalLink, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--bg-modal-backdrop)] backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl ios-glass rounded-[32px] p-6 sm:p-8 border border-theme-border-hover shadow-2xl tiffany-glow overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-theme-pill hover:bg-theme-pill-hover text-theme-muted hover:text-theme-text transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-theme-accent" />
          <span className="text-xs uppercase tracking-widest text-theme-accent font-mono">
            {project.category || "Project Showcase"}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-medium text-theme-text tracking-tight mb-2">
          {project.name || project.title}
        </h3>

        <p className="text-theme-muted text-sm font-light mb-6">
          {project.subtitle || project.duration || "Designed for high performance and fluid UX"}
        </p>

        {/* Visual Preview */}
        {project.img ? (
          <div className="rounded-2xl overflow-hidden mb-6 aspect-[16/9] bg-theme-card-inner border border-theme-border flex items-center justify-center">
            <img
              src={project.img}
              alt={project.name || project.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : project.visual ? (
          <div className="rounded-2xl overflow-hidden mb-6 aspect-[16/9] bg-theme-card-inner border border-theme-border flex items-center justify-center relative">
            {project.visual}
          </div>
        ) : null}

        {/* Description */}
        <div className="text-theme-secondary-text text-sm leading-relaxed mb-6 font-light space-y-3">
          <p>{project.desc || project.description || "A cutting-edge solution engineered with clean code architecture, thoughtful micro-interactions, and accessible responsive design."}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(project.tags || []).map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-theme-pill border border-theme-border text-xs font-mono text-theme-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-theme-border">
          {(project.firstLink || project.liveLink) && !project.firstButtonDisabled && (
            <a
              href={project.firstLink || project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-theme-accent text-theme-accent-text px-6 py-2.5 rounded-full font-medium text-xs hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[var(--accent-glow)]"
            >
              <span>{project.firstButton || "Live Preview"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {(project.secondLink || project.githubLink) && !project.secondButtonDisabled && (
            <a
              href={project.secondLink || project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-theme-pill hover:bg-theme-pill-hover text-theme-text px-5 py-2.5 rounded-full font-medium text-xs border border-theme-border transition-all"
            >
              <FaGithub className="w-3.5 h-3.5" />
              <span>{project.secondButton || "Source Code"}</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="ml-auto text-xs text-theme-muted hover:text-theme-text transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
