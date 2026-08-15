import React from "react";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group ios-glass p-1.5 rounded-[32px] hover:border-white/15 transition-all duration-500 cursor-pointer flex flex-col justify-between"
    >
      <div className="overflow-hidden rounded-[28px] relative aspect-[4/3] bg-[#0c0c0d]">
        {/* Visual Element */}
        {project.img ? (
          <div className="w-full h-full relative overflow-hidden">
            <img
              src={project.img}
              alt={project.name || project.title}
              className="w-full h-full object-cover card-image-hover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
          </div>
        ) : (
          project.visual
        )}

        {/* Overlay Button */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:bg-[#81D8D0] group-hover:text-black transition-all duration-300 shadow-lg text-white">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>

      {/* Card Info */}
      <div className="p-5 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-medium text-white tracking-tight group-hover:text-[#81D8D0] transition-colors">
            {project.name || project.title}
          </h3>
          <p className="text-sm text-white/40 mt-1 font-light line-clamp-1">
            {project.subtitle || project.desc || "Digital experience & product"}
          </p>
        </div>

        <div className="flex gap-1.5 flex-wrap justify-end max-w-[45%]">
          {(project.tags || []).slice(0, 2).map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-medium text-white/60 tracking-wider uppercase font-mono"
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
