import React from "react";
import experience from "../data/experience";

const ExperienceSection = () => {
  return (
    <section className="w-full px-4 py-10 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-800 text-gray-800 dark:text-gray-100 animate-fade-in-up">
      {/* Animated floating shapes background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-600/30 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-tr from-purple-600/30 to-blue-400/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center z-10 px-4 py-10">
        <h1 className="text-3xl sm:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in-up">
          Experience
        </h1>
        <div className="flex flex-wrap gap-8 justify-center animate-fade-in z-10">
          {experience.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[90%] md:w-[55%] lg:w-[30%] border border-blue-100 dark:border-pink-900 rounded-2xl p-6 flex flex-col items-center gap-4 bg-white/70 dark:bg-black/60 shadow-2xl hover:scale-105 transition-transform duration-200 animate-slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h2 className="text-xl font-semibold text-blue-700 dark:text-pink-200">
                {item.name}
              </h2>
              <span className="inline-block bg-blue-100 dark:bg-pink-900 text-blue-700 dark:text-pink-200 px-3 py-1 rounded-xl text-sm font-medium">
                {item.role}
              </span>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.duration}
              </p>
              {item.description && (
                <ul className="list-disc list-inside text-gray-300 text-left w-full mb-2">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              )}
              <div className="w-full flex flex-wrap justify-center gap-2 mt-2">
                {item.firstButton &&
                  (item.firstLink ? (
                    <a href={item.firstLink} target="_blank" rel="noreferrer">
                      <button className="bg-blue-600 dark:bg-pink-600 hover:bg-blue-800 dark:hover:bg-pink-800 px-4 py-2 rounded-xl text-white font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        {item.firstButton}
                      </button>
                    </a>
                  ) : (
                    <button className="bg-blue-600 dark:bg-pink-600 px-4 py-2 rounded-xl text-white opacity-60 cursor-default">
                      {item.firstButton}
                    </button>
                  ))}
                {item.secondButton &&
                  (item.secondLink ? (
                    <a href={item.secondLink} target="_blank" rel="noreferrer">
                      <button className="bg-blue-600 dark:bg-pink-600 hover:bg-blue-800 dark:hover:bg-pink-800 px-4 py-2 rounded-xl text-white font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        {item.secondButton}
                      </button>
                    </a>
                  ) : (
                    <button className="bg-blue-600 dark:bg-pink-600 px-4 py-2 rounded-xl text-white opacity-60 cursor-default">
                      {item.secondButton}
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
