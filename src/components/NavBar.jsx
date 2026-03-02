import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ShinyText from "./ShinyText";
import resume from "../assets/resume/resume.pdf";

const NAVBAR_HEIGHT = 64; // px
const navLinks = [
  { name: "Home", to: "#intro" },
  { name: "About", to: "#about" },
  { name: "Projects", to: "#projects" },
  { name: "Experience", to: "#experience" },
  { name: "Hobbies", to: "#hobbies" },
  { name: "Tech Stacks", to: "#tech-stacks" },
  { name: "Contact", to: "#contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "intro",
        "about",
        "projects",
        "experience",
        "tech-stacks",
        "hobbies",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

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
    <nav
      className="fixed top-0 left-0 w-full z-50 py-2 px-2 md:px-6 transition-colors duration-300"
      style={{ height: NAVBAR_HEIGHT }}
    >
      <div
        className="mx-auto flex items-center backdrop-blur-2xl rounded-2xl px-4 md:px-10 py-2 transition-all duration-300 relative"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
        }}
      >
        {/* Logo/Name */}
        <div className="flex-shrink-0">
          <p
            className="text-3xl font-extrabold tracking-tight select-none"
            style={{ color: "var(--text-primary)" }}
          >
            <ShinyText text={"Portfolio"} />
          </p>
        </div>
        
        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex gap-6 items-center text-base absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.to}
              onClick={(e) => handleNavClick(e, item.to.replace("#", ""))}
              className={`nav-link px-2 py-1 rounded relative group ${
                activeSection === item.to.replace("#", "")
                  ? "active font-semibold"
                  : ""
              }`}
            >
              {item.name}
              <span
                className="absolute left-0 -bottom-1 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"
                style={{ background: "var(--accent)" }}
              />
            </a>
          ))}
        </div>
        
        {/* Resume Button - Right */}
        <div className="hidden md:block ml-auto">
          <button onClick={handleButtonClick} className="btn-accent px-3 py-1">
            Download Resume
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto"
          style={{ color: "var(--text-primary)" }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          className="md:hidden mt-2 flex flex-col gap-2 backdrop-blur-2xl rounded-xl p-4"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
          }}
        >
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.to}
              className={`nav-link text-base px-2 py-1 rounded relative group ${
                activeSection === item.to.replace("#", "")
                  ? "active font-semibold"
                  : ""
              }`}
              onClick={(e) => handleNavClick(e, item.to.replace("#", ""))}
            >
              {item.name}
              <span
                className="absolute left-0 -bottom-1 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"
                style={{ background: "var(--accent)" }}
              />
            </a>
          ))}
          
      <button onClick={handleButtonClick} className="btn-accent px-6 py-3 mt-5">
          Download Resume
      </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
