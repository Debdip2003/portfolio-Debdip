import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <>
      {/* Mobile: floating hamburger navbar button */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 right-4 z-50 md:hidden"
      >
        <div
          className={`ios-glass rounded-full p-1.5 shadow-xl transition-all duration-300 border border-theme-border-hover ${
            scrolled ? "bg-[var(--nav-scrolled-bg)] backdrop-blur-2xl shadow-2xl" : ""
          }`}
        >
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center justify-center w-11 h-11 rounded-full bg-theme-pill hover:bg-theme-pill-hover text-theme-text transition-all duration-300"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
          >
            <Menu className="w-5 h-5 text-theme-text" />
          </motion.button>
        </div>
      </motion.nav>

      {/* Desktop: centered pill navbar with layoutId sliding pill */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="hidden md:flex fixed top-6 inset-x-0 z-50 justify-center pointer-events-none"
      >
        <div
          className={`ios-glass rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl transition-all duration-300 pointer-events-auto border border-theme-border-hover ${
            scrolled ? "bg-[var(--nav-scrolled-bg)] backdrop-blur-2xl" : ""
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-colors duration-300 z-10 ${
                  isActive ? "text-theme-text font-semibold" : "text-theme-muted hover:text-theme-text"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-theme-pill border border-theme-border shadow-sm -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span>{item.label}</span>
              </button>
            );
          })}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContact}
            className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-theme-accent text-theme-accent-text text-sm font-semibold hover:brightness-110 transition-all duration-300 shadow-lg shadow-[var(--accent-glow)] ml-1"
          >
            Contact
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu modal with AnimatePresence */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-[60] flex flex-col bg-theme-elevated/95 backdrop-blur-3xl"
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
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-theme-pill hover:bg-theme-pill-hover text-theme-text border border-theme-border flex items-center justify-center transition-all"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-theme-text" />
              </motion.button>
            </div>

            {/* Navigation Links */}
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
              className="flex-1 flex flex-col justify-center px-6 gap-3"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 },
                    }}
                    transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left px-5 py-4 rounded-2xl text-xl font-medium tracking-tight transition-all duration-300 flex items-center justify-between border ${
                      isActive
                        ? "bg-theme-pill border-theme-accent-border text-theme-accent shadow-sm"
                        : "bg-transparent border-transparent text-theme-secondary-text hover:text-theme-text hover:bg-theme-pill-hover"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-theme-accent-subtle text-theme-accent border border-theme-accent-border">
                        Active
                      </span>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-theme-subtle" />
                    )}
                  </motion.button>
                );
              })}

              <motion.button
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleContact}
                className="mt-6 w-full py-4 rounded-full bg-theme-accent text-theme-accent-text text-base font-semibold hover:brightness-110 transition-all duration-300 shadow-xl shadow-[var(--accent-glow)]"
              >
                Contact
              </motion.button>
            </motion.nav>

            {/* Footer inside Mobile Menu */}
            <div className="px-6 pb-8 text-center border-t border-theme-border pt-4">
              <p className="text-xs text-theme-muted font-mono">Debdip Bhattacharya • Portfolio</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
