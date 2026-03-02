import React from "react";
import SpotifyCard from "./SpotifyCard";
import CountUp from "./CountUp";

const IntroSection = ({ onChatOpen }) => {

  return (
    <section
      id="intro"
      className="w-full flex justify-center items-center px-4 min-h-screen pt-20 relative overflow-hidden animate-fade-in-up"
    >
      {/* Floating decorative shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="floating-shape absolute top-20 left-[5%] w-52 h-52 rounded-full blur-3xl animate-pulse-slow" />
        <div className="floating-shape absolute bottom-16 right-[8%] w-40 h-40 rounded-full blur-2xl animate-pulse-slow" />
        <div className="floating-shape absolute top-[40%] right-[25%] w-24 h-24 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 z-10 px-8 md:px-16 py-10">
        {/* Right Side: Spotify Card */}
        <SpotifyCard />
        {/* Left Side Content */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-left max-w-2xl">
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Hi, I'm Debdip
          </h1>
          <h2
            className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in"
            style={{ color: "var(--accent)" }}
          >
            Frontend Developer & UI/UX Enthusiast
          </h2>
          <p
            className="text-lg mb-6 animate-fade-in"
            style={{ color: "var(--text-secondary)" }}
          >
            I love building playful, interactive, and user-friendly web
            experiences. Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center lg:justify-start">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("projects");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
              className="btn-accent px-8 py-3 text-center animate-glow"
            >
              See My Work
            </a>
            <a
              href="#reviews"
              onClick={(e) => {
                e.preventDefault();
                if (onChatOpen) {
                  onChatOpen();
                }
              }}
              className="btn-accent px-6 py-3 text-center animate-glow text-sm sm:text-base cursor-pointer"
            >
              Chat with me ( my clone ofcourse :) )
            </a>
          </div>
          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 mt-8 animate-fade-in">
            {[
              { value: 1, label: "Years Exp.", suffix: "+" },
              { value: 10, label: "Real Projects", suffix: "+" },
              { value: 1000, label: "Users Served", suffix: "+" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center lg:items-start"
              >
                <div className="text-2xl font-extrabold" style={{ color: "var(--accent)" }}>
                  <CountUp
                    to={stat.value}
                    duration={2}
                  />
                  {stat.suffix}
                </div>
                <span
                  className="text-xs font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
