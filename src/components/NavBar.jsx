import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NavBar = ({ onContactClick }) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "hero",
        "services",
        "work",
        "open-source",
        "experience",
        "contact",
      ];
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

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleContact = () => {
    if (onContactClick) onContactClick();
    else scrollTo("contact");
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "work", label: "Work" },
    { id: "open-source", label: "Open Source" },
    { id: "services", label: "Services" },
    { id: "experience", label: "Experience" },
  ];

  const navButtonClass = (id) => {
    const active =
      activeSection === id
        ? "text-theme-text bg-theme-pill border border-theme-border"
        : "text-theme-muted hover:text-theme-text hover:bg-theme-pill-hover border border-transparent";

    return `px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${active}`;
  };

  return (
    <>
      {/* Mobile: floating hamburger navbar button */}
      <nav
        className="fixed top-5 right-4 z-50 animate-fade-in transition-all duration-300 md:hidden"
      >
        <div
          className={`ios-glass rounded-full p-1.5 shadow-xl transition-all duration-300 border border-theme-border-hover ${
            scrolled ? "bg-[var(--nav-scrolled-bg)] backdrop-blur-2xl shadow-2xl" : ""
          }`}
        >
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center justify-center w-11 h-11 rounded-full bg-theme-pill hover:bg-theme-pill-hover text-theme-text transition-all duration-300 active:scale-95"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
          >
            <Menu className="w-5 h-5 text-theme-text" />
          </button>
        </div>
      </nav>

      {/* Desktop: centered pill navbar */}
      <nav
        className="hidden md:flex fixed top-6 inset-x-0 z-50 justify-center animate-fade-in transition-all duration-300 pointer-events-none"
      >
        <div
          className={`ios-glass rounded-full px-2 py-2 flex items-center gap-1.5 shadow-2xl transition-all duration-300 pointer-events-auto border border-theme-border-hover ${
            scrolled ? "bg-[var(--nav-scrolled-bg)] backdrop-blur-2xl" : ""
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={navButtonClass(item.id)}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={handleContact}
            className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-theme-accent text-theme-accent-text text-sm font-semibold hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-[var(--accent-glow)] ml-1"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu modal */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-[60] flex flex-col bg-theme-elevated/95 backdrop-blur-3xl animate-fade-in transition-colors duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-theme-border">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-theme-accent animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-theme-accent uppercase font-mono">
                Menu
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-theme-pill hover:bg-theme-pill-hover text-theme-text border border-theme-border flex items-center justify-center transition-all active:scale-95"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-theme-text" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center px-6 gap-3">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`w-full text-left px-5 py-4 rounded-2xl text-xl font-medium tracking-tight transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? "bg-theme-pill border-theme-accent-border text-theme-accent shadow-sm"
                      : "bg-transparent border-transparent text-theme-secondary-text hover:text-theme-text hover:bg-theme-pill-hover"
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span>{item.label}</span>
                  {isActive ? (
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-theme-accent-subtle text-theme-accent border border-theme-accent-border">
                      Active
                    </span>
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-theme-subtle" />
                  )}
                </button>
              );
            })}

            <button
              onClick={handleContact}
              className="mt-6 w-full py-4 rounded-full bg-theme-accent text-theme-accent-text text-base font-semibold hover:brightness-110 active:scale-95 transition-all duration-300 shadow-xl shadow-[var(--accent-glow)] opacity-0 animate-fade-in"
              style={{ animationDelay: "0.25s" }}
            >
              Contact
            </button>
          </nav>

          {/* Footer inside Mobile Menu */}
          <div className="px-6 pb-8 text-center border-t border-theme-border pt-4">
            <p className="text-xs text-theme-muted font-mono">Debdip Bhattacharya • Portfolio</p>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
