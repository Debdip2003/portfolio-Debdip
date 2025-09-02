import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ShinyText from "./ShinyText";

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
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 py-2 px-2 md:px-6 transition-colors duration-300"
      style={{ height: NAVBAR_HEIGHT }}
    >
      <div
        className="max-w-7xl mx-auto flex justify-between items-center bg-black/60 bg-gradient-to-br from-blue-900/30 via-black/60 to-pink-900/20 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/30 px-4 md:px-10 py-2 transition-all duration-300"
        style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.25)" }}
      >
        {/* Logo/Name */}
        <p className="text-3xl font-extrabold text-white tracking-tight select-none drop-shadow-sm">
          <ShinyText text={"Debdip"} />
        </p>
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center text-base">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.to}
              onClick={(e) => handleNavClick(e, item.to.replace("#", ""))}
              className={`px-2 py-1 rounded relative transition-colors duration-200  group ${
                activeSection === item.to.replace("#", "")
                  ? "bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent font-semibold"
                  : "text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-pink-400 hover:bg-clip-text hover:text-transparent"
              }`}
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
            </a>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          className="md:hidden mt-2 flex flex-col gap-2 bg-black/60 bg-gradient-to-br from-blue-900/30 via-black/60 to-pink-900/20 backdrop-blur-2xl rounded-xl p-4 shadow-2xl border border-white/30"
          style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.25)" }}
        >
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.to}
              className={`text-base px-2 py-1 rounded relative transition-colors duration-200 group ${
                activeSection === item.to.replace("#", "")
                  ? "bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent font-semibold"
                  : "text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-pink-400 hover:bg-clip-text hover:text-transparent"
              }`}
              onClick={(e) => handleNavClick(e, item.to.replace("#", ""))}
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
