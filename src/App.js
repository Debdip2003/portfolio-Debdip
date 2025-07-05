import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HobbiesSection from "./components/HobbiesSection";
import IntroSection from "./components/IntroSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import TechStacksSection from "./components/TechStacksSection";
import VantaBackground from "./components/VantaBackground";

function App() {
  return (
    <VantaBackground>
      <NavBar />
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <HobbiesSection />
      <TechStacksSection />
      <ContactSection />
    </VantaBackground>
  );
}

export default App;
