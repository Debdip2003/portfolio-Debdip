import React from "react";
import experience from "../data/experience";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="w-full flex justify-center items-center px-4 py-10 relative overflow-hidden animate-fade-in-up text-white"
    >
      {/* Animated floating shapes background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-600/30 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-tr from-purple-600/30 to-blue-400/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center z-10 px-4 py-10">
        <h1 className="text-3xl sm:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-up">
          Experience
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in">
          {experience.map((item, index) => (
            <div
              key={item.id || index}
              tabIndex={0}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl bg-black/70 backdrop-blur-xl border border-white/20 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                index === 0 ? "ring-4 ring-blue-400/30" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Accent bar for card */}
              <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-2" />
              <div className="p-6 flex flex-col gap-2 z-20 relative items-start text-left">
                <h2 className="text-2xl font-extrabold text-white mb-1 tracking-wide">
                  {item.name}
                </h2>
                <p className="text-blue-300 text-base font-semibold mb-1">
                  {item.role}
                </p>
                <p className="text-purple-300 text-sm mb-2 italic">
                  {item.duration}
                </p>
                <p className="text-gray-200 text-base mb-2 leading-relaxed">
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
