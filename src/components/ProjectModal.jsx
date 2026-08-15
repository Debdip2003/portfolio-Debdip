import React from "react";
import { X, ExternalLink, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa6";


const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-2xl ios-glass rounded-[32px] p-6 sm:p-8 border border-white/15 shadow-2xl tiffany-glow overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/60 hover:text-white transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#81D8D0]" />
          <span className="text-xs uppercase tracking-widest text-[#81D8D0] font-mono">
            {project.category || "Project Showcase"}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-2">
          {project.name || project.title}
        </h3>

        <p className="text-white/40 text-sm font-light mb-6">
          {project.subtitle || project.duration || "Designed for high performance and fluid UX"}
        </p>

        {/* Visual Preview */}
        {project.img ? (
          <div className="rounded-2xl overflow-hidden mb-6 aspect-[16/9] bg-black/40 border border-white/10 flex items-center justify-center">
            <img
              src={project.img}
              alt={project.name || project.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : project.visual ? (
          <div className="rounded-2xl overflow-hidden mb-6 aspect-[16/9] bg-black/40 border border-white/10 flex items-center justify-center relative">
            {project.visual}
          </div>
        ) : null}

        {/* Description */}
        <div className="text-white/70 text-sm leading-relaxed mb-6 font-light space-y-3">
          <p>{project.desc || project.description || "A cutting-edge solution engineered with clean code architecture, thoughtful micro-interactions, and accessible responsive design."}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(project.tags || []).map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
          {(project.firstLink || project.liveLink) && !project.firstButtonDisabled && (
            <a
              href={project.firstLink || project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#81D8D0] text-black px-6 py-2.5 rounded-full font-medium text-xs hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_-5px_rgba(129,216,208,0.5)]"
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
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full font-medium text-xs border border-white/10 transition-all"
            >
              <FaGithub className="w-3.5 h-3.5" />
              <span>{project.secondButton || "Source Code"}</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="ml-auto text-xs text-white/40 hover:text-white transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
