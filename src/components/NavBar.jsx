import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const NAVBAR_HEIGHT = 64; // px
const navLinks = [
  { name: "Home", to: "/#intro" },
  { name: "About", to: "/#about" },
  { name: "Projects", to: "/#projects" },
  { name: "Hobbies", to: "/#hobbies" },
  { name: "Contact", to: "/#contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : true;
  });
  const [activeHash, setActiveHash] = useState(() => window.location.hash);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

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
          Debdip
        </p>
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center text-base">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.to}
              className={`px-2 py-1 rounded relative transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 group ${
                activeHash === item.to.replace("/", "")
                  ? "bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent font-semibold"
                  : "text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-pink-400 hover:bg-clip-text hover:text-transparent"
              }`}
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
            </a>
          ))}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
            className="ml-2 p-2 rounded-full bg-black/60 border border-white/30 text-white hover:bg-blue-900/40 transition-all duration-300"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-white" />
            )}
          </button>
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
                activeHash === item.to.replace("/", "")
                  ? "bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent font-semibold"
                  : "text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-pink-400 hover:bg-clip-text hover:text-transparent"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
            </a>
          ))}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
            className="mt-2 p-2 rounded-full bg-black/60 border border-white/30 text-white hover:bg-blue-900/40 transition-all duration-300"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-white" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
