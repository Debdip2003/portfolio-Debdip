import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import BackgroundAmbiance from "./components/Background/BackgroundAmbiance";
import NavBar from "./components/Layout/NavBar";
import HeroSection from "./components/Hero Section/HeroSection";
import ServicesSection from "./components/Service Section/ServicesSection";
import SelectedWorkSection from "./components/Work Section/SelectedWorkSection";
import OpenSourceSection from "./components/Open Soruce Section/OpenSourceSection";
import ExperienceSection from "./components/Experience Section/ExperienceSection";
import ContactSection from "./components/Contact Section/ContactSection";
import Footer from "./components/Layout/Footer";
import AboutModal from "./components/About Section/AboutModal";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return true; // Default to dark theme
  });

  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Sync theme with HTML document element and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Smooth scroll restoration
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  const handleContactClick = () => {
    const el = document.getElementById("contact");
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-theme-bg text-theme-text min-h-screen w-full flex flex-col items-center relative selection:bg-theme-accent selection:text-theme-accent-text font-sans antialiased transition-colors duration-300">
      {/* Background Ambient Parallax Orbs */}
      <BackgroundAmbiance isDarkMode={isDarkMode} />

      {/* Floating Dynamic Island Navigation */}
      <NavBar onContactClick={handleContactClick} isDarkMode={isDarkMode} />

      {/* Hero Section with iOS Widgets */}
      <HeroSection
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onProfileClick={() => setIsAboutOpen(true)}
      />

      {/* What I Do (Services) */}
      <ServicesSection />

      {/* Selected Work (Featured & Live Projects) */}
      <SelectedWorkSection />

      {/* Open Source Contributions (DoxDock, ONNX Runtime Web, WASM) */}
      <OpenSourceSection />

      {/* Experience & Career Journey */}
      <ExperienceSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Minimal Footer */}
      <Footer />

      {/* About Profile Modal with AnimatePresence */}
      <AnimatePresence>
        {isAboutOpen && (
          <AboutModal
            isOpen={isAboutOpen}
            onClose={() => setIsAboutOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
