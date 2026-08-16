import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Portfolio from "./components/Portfolio";
import ParallaxBreak from "./components/ParallaxBreak";
import ExperienceSection from "./components/ExperienceSection";
import OpenSourceShowcase from "./components/OpenSourceShowcase";
import GithubDashboard from "./components/GithubDashboard";
import Philosophy from "./components/Philosophy";
import Capabilities from "./components/Capabilities";
import BentoStats from "./components/BentoStats";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// Modals
import ProjectModal from "./components/Modals/ProjectModal";
import InsightModal from "./components/Modals/InsightModal";
import EnquiryModal from "./components/Modals/EnquiryModal";
import MenuDrawer from "./components/Modals/MenuDrawer";

import { portfolioData } from "./data/portfolioData";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isInsightOpen, setIsInsightOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquirySubject, setEnquirySubject] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Restore scroll position
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  const handleOpenEnquiry = (subject = "General Collaboration Inquiry") => {
    setEnquirySubject(subject);
    setIsEnquiryOpen(true);
  };

  return (
    <div className="bg-[#050505] text-stone-300 min-h-screen w-full flex flex-col relative selection:bg-orange-900/40 selection:text-orange-100 font-sans antialiased">
      {/* Fixed Navigation with Reading Progress Indicator */}
      <Navigation
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Monumental Hero Section with Scroll Parallax */}
      <Hero onOpenEnquiry={handleOpenEnquiry} />

      {/* Infinite Skills Marquee Ticker */}
      <Marquee />

      {/* Sticky Vertical Split-Scroll: Selected Projects */}
      <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

      {/* Parallax Image Break: Engineering as High Craft */}
      <ParallaxBreak />

      {/* Career Experience Timeline */}
      <ExperienceSection />

      {/* Open Source Contributions: DoxDock & WASM */}
      <OpenSourceShowcase />

      {/* Real-time GitHub Dashboard & Live PR Ticker */}
      <GithubDashboard />

      {/* Engineering Philosophy: Spatial & Cognitive Integrity */}
      <Philosophy />

      {/* Core Engineering Capabilities Slider */}
      <Capabilities onSelectCapability={(cap) => handleOpenEnquiry(`Discuss ${cap.title}`)} />

      {/* Bento Grid Stats & The Engineer Profile */}
      <BentoStats
        onOpenInsight={() => setIsInsightOpen(true)}
        onOpenAbout={() => handleOpenEnquiry("About & Background")}
      />

      {/* Direct Contact & Mandate Submission (Firebase + Email) */}
      <ContactSection />

      {/* Monumental Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Animated Modal & Drawer Layers */}
      <AnimatePresence>
        {isMenuOpen && (
          <MenuDrawer
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onEnquire={(subject) => handleOpenEnquiry(subject)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isInsightOpen && (
          <InsightModal
            article={portfolioData.insightArticle}
            onClose={() => setIsInsightOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isEnquiryOpen && (
          <EnquiryModal
            initialSubject={enquirySubject}
            onClose={() => setIsEnquiryOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
