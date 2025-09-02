import React from "react";
import projects from "../data/projects";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="w-full flex justify-center items-center px-4 py-10 relative overflow-hidden animate-fade-in-up text-white"
    >
      {/* Animated floating shapes background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-600/30 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-tr from-purple-600/30 to-blue-400/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center z-10 px-4 py-10">
        <h1 className="text-3xl sm:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-up">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in">
          {projects.map((item, index) => (
            <div
              key={item.id || index}
              tabIndex={0}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl bg-black/70 backdrop-blur-xl border border-white/20 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                index === 0 ? "ring-4 ring-blue-400/30" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-2 group-focus:scale-110 group-focus:-rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 z-10" />
              </div>
              {/* Accent bar for card */}
              <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-2" />
              {/* Tech stack bar at the bottom */}
              {item.tags && item.tags.length > 0 && (
                <div className="w-full px-6 pb-4 pt-2 flex flex-wrap gap-2 border-t border-white/10 bg-gradient-to-r from-blue-900/40 via-purple-900/30 to-pink-900/40">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold text-blue-200 bg-blue-800/40 rounded-full px-3 py-1 shadow-sm border border-blue-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="p-6 flex flex-col gap-2 z-20 relative items-start text-left">
                <h2 className="text-2xl font-extrabold text-white mb-1 tracking-wide">
                  {item.name}
                </h2>
                <p className="text-gray-200 text-base mb-2 leading-relaxed">
                  {item.desc}
                </p>
                {/* Duration */}
                {item.duration && (
                  <p className="text-purple-300 text-xs mb-2 italic">
                    {item.duration}
                  </p>
                )}
                <div className="flex gap-3 mt-2">
                  {item.firstButton && item.firstLink && (
                    <a
                      href={item.firstLink}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-2 rounded-xl font-semibold shadow hover:scale-105 hover:from-pink-500 hover:to-blue-500 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      {item.firstButton}
                    </a>
                  )}
                  {item.secondButton && item.secondLink && (
                    <a
                      href={item.secondLink}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded-xl font-semibold shadow hover:scale-105 hover:from-blue-500 hover:to-pink-500 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    >
                      {item.secondButton}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
