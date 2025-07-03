import React from "react";
import { ReactTyped } from "react-typed";

const avatarUrl =
  "https://ui-avatars.com/api/?name=Debdip+B&background=111827&color=fff&size=256&rounded=true";

const IntroSection = () => {
  return (
    <section
      id="intro"
      className="w-full flex justify-center items-center px-4 min-h-screen relative overflow-hidden animate-fade-in-up bg-gradient-to-br from-black via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-800 text-gray-800 dark:text-gray-100"
    >
      {/* Animated floating shapes background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-600/30 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-tr from-purple-600/30 to-blue-400/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center z-10 px-4 py-10">
        <img
          src={avatarUrl}
          alt="Debdip Bhattacharya avatar"
          className="w-32 h-32 rounded-full shadow-xl border-4 border-white/10 mb-2 animate-fade-in"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg mb-2">
          Hi, I'm Debdip
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
          <ReactTyped
            strings={[
              "Front-End Web Developer",
              "React Enthusiast",
              "UI/UX Explorer",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h2>
        <p className="text-gray-300 text-lg mb-6 max-w-xl text-center animate-fade-in">
          I love building playful, interactive, and user-friendly web
          experiences. Let's create something amazing together!
        </p>
        <a
          href="#projects"
          className="mt-2 px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-pink-600 shadow-lg border-2 border-transparent hover:border-blue-400 hover:from-pink-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 animate-glow"
        >
          See My Work
        </a>
      </div>
    </section>
  );
};

export default IntroSection;
