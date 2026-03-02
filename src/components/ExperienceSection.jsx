import React from "react";
import experience from "../data/experience";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="w-full flex justify-center items-center px-4 py-16 relative overflow-hidden animate-fade-in-up"
    >
      {/* Floating decorative shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="floating-shape absolute top-10 left-10 w-40 h-40 rounded-full blur-3xl animate-pulse-slow" />
        <div className="floating-shape absolute bottom-10 right-20 w-32 h-32 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <div className="w-full mx-auto flex flex-col items-center text-center z-10 px-8 md:px-16">
        <h1 className="section-heading text-3xl sm:text-5xl mb-8 text-center animate-fade-in-up">
          Experience
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full animate-fade-in">
          {experience.map((item, index) => (
            <div
              key={item.id || index}
              tabIndex={0}
              className="card relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 focus:outline-none"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Accent bar */}
              <div className="accent-bar h-1 w-full mb-2" />
              <div className="p-6 flex flex-col gap-2 z-20 relative items-start text-left">
                <h2
                  className="text-2xl font-extrabold mb-1 tracking-wide"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.name}
                </h2>
                <p
                  className="text-base font-semibold mb-1"
                  style={{ color: "var(--accent)" }}
                >
                  {item.role}
                </p>
                <p
                  className="text-sm mb-2 italic"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.duration}
                </p>
                <p
                  className="text-base mb-2 leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
