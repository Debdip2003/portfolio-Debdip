import React from "react";
import resume from "../assets/resume.pdf";

const skills = [
  { icon: "💻", label: "React & JavaScript" },
  { icon: "🎨", label: "UI/UX Design" },
  { icon: "⚡", label: "Performance" },
  { icon: "🔧", label: "Debugging" },
];
const socialSkills = [
  { icon: "🤝", label: "Teamwork" },
  { icon: "💬", label: "Communication" },
  { icon: "🎯", label: "Focus" },
  { icon: "🌱", label: "Learning" },
];

const AboutSection = () => {
  const handleButtonClick = () => {
    fetch(resume)
      .then((response) => response.blob())
      .then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = fileURL;
        a.download = "resume.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch(() => {
        alert("Failed to download resume");
      });
  };

  return (
    <section
      id="about"
      className="w-full flex justify-center items-center px-4 py-10 -mt-12 relative overflow-hidden animate-fade-in-up text-white"
    >
      {/* Animated floating shapes background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-600/30 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-tr from-purple-600/30 to-blue-400/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center z-10 px-4 py-10">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-gray-200 text-lg mb-6">
          Frontend Developer with 1+ years of experience building
          production-level web apps using React.js, Redux, and Firebase. Skilled
          in responsive UI design, scalable architecture, and cross-functional
          collaboration. Delivered features for 700+ users and optimized admin
          tools reducing processing time by up to 50%. Eager to leverage skills
          in scalable frontend solutions in a dynamic development team.
        </p>
        <div className="w-full flex flex-col md:flex-row gap-8 mb-6 justify-center">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-left mb-2 text-white">
              Achievements
            </h3>
            <ul className="list-disc list-inside text-gray-300 text-left">
              <li>
                2nd place (30+ teams) in Web Dev Competition at Future Institute
                of Engineering
              </li>
              <li>
                Core Organizer of Megatronix (recognized by Edungraph, Times of
                India)
              </li>
              <li>Delivered systems supporting 700+ users during tech fests</li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-left mb-2 text-white">
              Education
            </h3>
            <ul className="list-disc list-inside text-gray-300 text-left">
              <li>B.Tech in Computer Science and Engineering (2022–2026)</li>
              <li>Meghnad Saha Institute of Technology, Kolkata</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {skills.map((s, i) => (
            <span
              key={i}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-pink-500/20 text-white px-4 py-2 rounded-xl font-semibold text-base"
            >
              <span className="text-xl">{s.icon}</span> {s.label}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {socialSkills.map((s, i) => (
            <span
              key={i}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-700/10 to-pink-700/10 text-white px-4 py-2 rounded-xl font-medium text-base"
            >
              <span className="text-xl">{s.icon}</span> {s.label}
            </span>
          ))}
        </div>
        <button
          onClick={handleButtonClick}
          className="bg-gradient-to-r from-blue-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
