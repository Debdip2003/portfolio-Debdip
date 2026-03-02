import React, { useState, useEffect } from "react";
import AboutSection from "./components/AboutSection";
import ChatbotSection from "./components/ChatbotSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import FloatingChatButton from "./components/FloatingChatButton";
import HobbiesSection from "./components/HobbiesSection";
import IntroSection from "./components/IntroSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import ReviewsSection from "./components/ReviewsSection";
import TechStacksSection from "./components/TechStacksSection";
import VantaBackground from "./components/VantaBackground";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Prevent scroll restoration on reload
  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Save scroll position before unload
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Restore scroll position after reload
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
      sessionStorage.removeItem('scrollPosition');
    }
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <VantaBackground>
      <NavBar />
      <IntroSection onChatOpen={() => setIsChatOpen(true)} />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ReviewsSection />
      <HobbiesSection />
      <TechStacksSection />
      <ContactSection />
      
      {/* Floating Chat Button */}
      <FloatingChatButton onClick={() => setIsChatOpen(true)} />
      
      {/* Chatbot Modal */}
      <ChatbotSection isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </VantaBackground>
  );
}

export default App;
