import React from "react";
import NavBar from "../components/NavBar";
import IntroSection from "../components/IntroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import HobbiesSection from "../components/HobbiesSection";
import ContactSection from "../components/ContactSection";

const HomePage = () => {
  return (
    <div className="pt-[64px] min-h-screen bg-black">
      {" "}
      {/* Prevents overlap with fixed navbar */}
      <NavBar />
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <HobbiesSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
