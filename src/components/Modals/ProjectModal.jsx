import React, { useEffect } from "react";
import { X, ArrowUpRight, Check, ExternalLink, Calendar, Code2, Sparkles, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { modalVariants, backdropVariants } from "../../utils/motionVariants";

export default function ProjectModal({ project, onClose, onEnquire }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={backdropVariants}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        variants={modalVariants}
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 overflow-y-auto hide-scrollbar shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 bg-[#0a0a0a]/95 backdrop-blur border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs text-orange-500 font-mono tracking-widest">{project.code}</span>
            <span className="text-stone-600">•</span>
            <span className="text-xs text-stone-400 font-medium uppercase tracking-wider">{project.type}</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-stone-400 hover:text-white hover:border-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Hero Media */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-900">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs text-orange-400 uppercase tracking-widest block mb-1">Featured Production</span>
              <h2 className="text-3xl md:text-5xl font-display text-white font-semibold">{project.title}</h2>
            </div>
            <div className="bg-black/70 backdrop-blur border border-white/10 px-4 py-2 self-start md:self-auto">
              <span className="text-xs text-stone-400 block font-mono">Status</span>
              <span className="text-sm font-display text-orange-400 font-medium">{project.valuation}</span>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 md:p-10 space-y-10">
          {/* Metadata quick row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-white/10 text-xs">
            <div>
              <span className="text-stone-500 block mb-1 flex items-center gap-1.5 font-mono">
                <Code2 className="w-3.5 h-3.5 text-orange-500" /> Category
              </span>
              <p className="text-stone-200 font-medium">{project.category} Project</p>
            </div>
            <div>
              <span className="text-stone-500 block mb-1 flex items-center gap-1.5 font-mono">
                <Calendar className="w-3.5 h-3.5 text-orange-500" /> Timeline
              </span>
              <p className="text-stone-200 font-medium">{project.completionYear}</p>
            </div>
            <div>
              <span className="text-stone-500 block mb-1 flex items-center gap-1.5 font-mono">
                <Layers className="w-3.5 h-3.5 text-orange-500" /> Role
              </span>
              <p className="text-stone-200 font-medium">{project.role || "Lead Frontend Developer"}</p>
            </div>
            <div>
              <span className="text-stone-500 block mb-1 flex items-center gap-1.5 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-orange-500" /> Primary Tech
              </span>
              <p className="text-stone-200 font-medium">{project.tags?.[0] || "React"}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-orange-500 font-semibold mb-3">Project Overview</h4>
            <p className="text-stone-300 text-sm md:text-base leading-relaxed font-light">{project.description}</p>
          </div>

          {/* Specifications Table */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-4">Technical Specifications</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.specs?.map((spec, idx) => (
                <div key={idx} className="flex justify-between items-center p-3.5 bg-stone-900/40 border border-white/5 text-xs">
                  <span className="text-stone-400">{spec.label}</span>
                  <span className="font-mono text-stone-200 font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-4">Key Engineering Accomplishments</h4>
            <ul className="space-y-3">
              {project.highlights?.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-stone-300">
                  <span className="w-4 h-4 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center mt-0.5 shrink-0 border border-orange-500/30">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Links */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {project.liveLink && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-stone-100 hover:bg-white text-black text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}
              {project.githubLink && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 bg-stone-900 hover:bg-stone-800 border border-white/15 text-stone-200 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </motion.a>
              )}
            </div>

            <button
              onClick={() => {
                onClose();
                onEnquire(`Discuss project: ${project.title}`);
              }}
              className="text-xs font-mono text-orange-400 hover:text-orange-300 underline underline-offset-4 cursor-pointer"
            >
              Discuss this architecture →
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
