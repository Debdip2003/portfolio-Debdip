import React from "react";
import { ReactTyped } from "react-typed";
import dpImage from "../assets/dp.png";

const IntroSection = () => {
  return (
    <section
      id="intro"
      className="w-full flex justify-center items-center px-4 min-h-screen relative overflow-hidden animate-fade-in-up text-white"
    >
      {/* Animated floating shapes background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-600/30 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-tr from-purple-600/30 to-blue-400/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 z-10 px-4 py-10">
        {/* Profile Image - Left Side */}
        <div className="flex-shrink-0 animate-fade-in">
          <div className="relative group">
            <img
              src={dpImage}
              alt="Debdip Bhattacharya"
              className="w-64 h-80 lg:w-80 lg:h-96 rounded-2xl shadow-2xl border-4 border-white/30 object-cover hover:scale-105 transition-all duration-300"
              style={{ objectPosition: "bottom" }}
            />
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl group-hover:blur-2xl transition-all duration-300 -z-10"></div>
            {/* Additional glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        {/* Content - Right Side */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-2">
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
          <p className="text-gray-300 text-lg mb-6 animate-fade-in">
            I love building playful, interactive, and user-friendly web
            experiences. Let's create something amazing together!
          </p>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("projects");
              if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({
                  top: offsetTop,
                  behavior: "smooth",
                });
              }
            }}
            className="px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-pink-600 shadow-lg border-2 border-transparent hover:border-blue-400 hover:from-pink-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 animate-glow"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
