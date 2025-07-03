import React from "react";

const hobbies = [
  { icon: "🎵", label: "Music" },
  { icon: "💻", label: "Coding" },
  { icon: "📚", label: "Learning" },
  { icon: "🏋️", label: "Fitness" },
  { icon: "🌍", label: "Travel" },
];

const HobbiesSection = () => (
  <section
    id="hobbies"
    className="w-full flex justify-center items-center px-4 py-10 relative overflow-hidden animate-fade-in-up bg-gradient-to-br from-black via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-800 text-gray-800 dark:text-gray-100"
  >
    {/* Animated floating shapes background */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-600/30 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-tr from-purple-600/30 to-blue-400/20 rounded-full blur-2xl animate-pulse-slow" />
    </div>
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center z-10 px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Hobbies & Interests
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl w-full">
        {hobbies.map((h, i) => (
          <div
            key={i}
            className="bg-black/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 px-6 py-8 flex flex-col items-center text-center animate-fade-in-up"
          >
            <span className="text-4xl mb-2 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
              {h.icon}
            </span>
            <span className="text-lg font-semibold text-white">{h.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HobbiesSection;
