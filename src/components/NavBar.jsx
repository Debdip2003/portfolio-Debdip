import React, { useState, useEffect } from "react";

const NavBar = ({ onContactClick }) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "services", "work", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 z-50 animate-fade-in transition-all duration-300">
      <div
        className={`ios-glass rounded-full px-1.5 py-1.5 flex items-center gap-1 shadow-2xl transition-all duration-300 ${
          scrolled ? "bg-black/60 border-white/15 backdrop-blur-2xl" : ""
        }`}
      >
        <button
          onClick={() => scrollTo("work")}
          className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
            activeSection === "work"
              ? "text-white bg-white/15"
              : "text-white/70 hover:text-white hover:bg-white/10"
          }`}
        >
          Work
        </button>

        <button
          onClick={() => scrollTo("services")}
          className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
            activeSection === "services"
              ? "text-white bg-white/15"
              : "text-white/70 hover:text-white hover:bg-white/10"
          }`}
        >
          Services
        </button>

        <button
          onClick={() => scrollTo("experience")}
          className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
            activeSection === "experience"
              ? "text-white bg-white/15"
              : "text-white/70 hover:text-white hover:bg-white/10"
          }`}
        >
          Experience
        </button>

        <button
          onClick={() => {
            if (onContactClick) onContactClick();
            else scrollTo("contact");
          }}
          className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#81D8D0] text-black text-xs font-medium hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(129,216,208,0.5)]"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
