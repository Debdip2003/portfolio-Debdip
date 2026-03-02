import React from "react";

const thingsAboutMe = [
  { icon: "🤫", label: "Huge fan of Seedhe Maut - rapper duo based in Delhi" },
  { icon: "🧠", label: "Will redesign your app in my head while using it" },
  { icon: "🔍", label: "Spots misalignment from 3 kilometers away" },
  { icon: "☕", label: "Runs on caffeine and mild existential debugging" },
  { icon: "📦", label: "Saves 'final_final_v3_ACTUALfinal.zip' files" },
  { icon: "⏳", label: "Says '5 minutes' and means 27" },
  { icon: "🗂️", label: "Creates folders to organize the folders" },
  { icon: "🎧", label: "Has a playlist for 'fixing one stubborn bug'" },
  { icon: "🚀", label: "Gets dangerously motivated at 1:37 AM" },
];

const AboutSection = () => {
 

  return (
    <section
      id="about"
      className="w-full flex justify-center items-center px-4 py-16 relative overflow-hidden animate-fade-in-up"
    >
      {/* Floating decorative shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="floating-shape absolute top-10 left-10 w-40 h-40 rounded-full blur-3xl animate-pulse-slow" />
        <div className="floating-shape absolute bottom-10 right-20 w-32 h-32 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <div className="w-full mx-auto flex flex-col items-center text-center z-10 px-8 md:px-16">
        <h2 className="section-heading text-3xl sm:text-5xl mb-8 text-center animate-fade-in-up">
          About Me
        </h2>
        <p
          className="text-lg mb-6 text-justify"
          style={{ color: "var(--text-primary)" }}
        >
        Frontend Developer with 1+ years of experience building production-grade web applications using React.js, Redux, and Firebase. Experienced in designing responsive UIs, architecting scalable frontend systems, and collaborating across teams. Delivered features for 700+ users and optimized admin tools, reducing processing time by up to 50%.
        As a freelance developer, built and deployed SEO-optimized landing pages for small businesses, enhancing their digital presence and increasing market visibility through performance-focused, production-ready implementations.
        </p>

        <div className="w-full flex flex-col md:flex-row gap-8 mb-6 justify-center">
          <div className="flex-1">
            <h3
              className="text-xl font-semibold text-left mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Achievements
            </h3>
            <ul
              className="list-disc list-inside text-justify"
              style={{ color: "var(--text-secondary)" }}
            >
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
            <h3
              className="text-xl font-semibold text-left mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Education
            </h3>
            <ul
              className="list-disc list-inside text-justify"
              style={{ color: "var(--text-secondary)" }}
            >
              <li>B.Tech in Computer Science and Engineering (2022–2026)</li>
              <li>Meghnad Saha Institute of Technology, Kolkata</li>
            </ul>
          </div>
        </div>
        
        <div className="w-full flex flex-col items-center gap-6 mb-8 mt-4">
          <h3 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
            Things about me that I wish I could put on my resume but can't 😃
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {thingsAboutMe.map((s, i) => (
              <span
                key={i}
                className="badge flex items-center gap-2 px-4 py-2 text-base"
              >
                <span className="text-xl">{s.icon}</span> {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
