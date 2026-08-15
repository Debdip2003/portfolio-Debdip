/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        tiffany: {
          DEFAULT: "var(--accent-primary)",
          light: "var(--accent-primary-hover)",
          dark: "var(--accent-primary-hover)",
        },
        accent: "var(--accent-blue)",
        emeraldAccent: "var(--accent-emerald)",
        theme: {
          bg: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          elevated: "var(--bg-elevated)",
          card: "var(--bg-card)",
          "card-hover": "var(--bg-card-hover)",
          "card-inner": "var(--bg-card-inner)",
          pill: "var(--bg-pill)",
          "pill-hover": "var(--bg-pill-hover)",
          text: "var(--text-primary)",
          "text-secondary": "var(--text-secondary)",
          muted: "var(--text-muted)",
          subtle: "var(--text-subtle)",
          border: "var(--border-subtle)",
          "border-hover": "var(--border-hover)",
          "border-strong": "var(--border-strong)",
          accent: "var(--accent-primary)",
          "accent-hover": "var(--accent-primary-hover)",
          "accent-text": "var(--accent-primary-text)",
          "accent-subtle": "var(--accent-primary-subtle)",
          "accent-border": "var(--accent-primary-border)",
        },
      },
      animation: {
        "fade-in": "fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "spin-slow": "spin 12s linear infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shine: "shine 5s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "var(--ambient-opacity-1)", transform: "scale(1)" },
          "50%": { opacity: "calc(var(--ambient-opacity-1) * 1.5)", transform: "scale(1.08)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
    },
  },
  plugins: [],
};
