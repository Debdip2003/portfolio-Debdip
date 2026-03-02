import React from "react";
import projects from "../data/projects";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="w-full flex justify-center items-center px-4 py-16 relative overflow-hidden animate-fade-in-up"
    >
      {/* Floating decorative shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="floating-shape absolute top-10 left-10 w-40 h-40 rounded-full blur-3xl animate-pulse-slow" />
        <div className="floating-shape absolute bottom-10 right-20 w-32 h-32 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <div className="w-full mx-auto flex flex-col items-center text-center z-10 px-8 md:px-16">
        <h1 className="section-heading text-3xl sm:text-5xl mb-8 text-center animate-fade-in-up">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full animate-fade-in">
          {projects.map((item, index) => (
            <div
              key={item.id || index}
              tabIndex={0}
              className="card relative group rounded-2xl overflow-hidden transition-all duration-300 focus:outline-none"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                {/* Project Type Badge */}
                {item.type && (
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide backdrop-blur-sm"
                    style={{
                      background: "rgba(var(--accent-rgb), 0.9)",
                      color: "var(--bg-primary)",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
                    }}
                  >
                    {item.type}
                  </div>
                )}
              </div>
              {/* Accent bar */}
              <div className="accent-bar h-1 w-full mb-2" />
              {/* Tech stack tags */}
              {item.tags && item.tags.length > 0 && (
                <div className="w-full px-6 pb-4 pt-2 flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="p-6 flex flex-col gap-2 z-20 relative items-start text-left">
                <h2
                  className="text-2xl font-extrabold mb-1 tracking-wide"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.name}
                </h2>
                <p
                  className="text-base mb-2 leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.desc}
                </p>
                {item.duration && (
                  <p
                    className="text-xs mb-2 italic"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.duration}
                  </p>
                )}
                <div className="flex gap-3 mt-2">
                  {item.firstButton && item.firstLink && (
                    <a
                      href={item.firstLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-accent px-4 py-2 text-sm hover:cursor-pointer"
                    >
                      {item.firstButton}
                    </a>
                  )}
                  {item.secondButton && item.secondLink && (
                    <a
                      href={item.secondLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl font-semibold text-sm transition-colors duration-200 hover:cursor-pointer"
                      style={{
                        color: "var(--accent)",
                        border: "1px solid var(--border)",
                        background: "var(--bg-card)",
                      }}
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
