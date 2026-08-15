/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        tiffany: {
          DEFAULT: "#81D8D0",
          light: "#a5e6df",
          dark: "#5ac2b8",
        },
        surface: {
          DEFAULT: "#18181B",
          darker: "#0d0d0e",
          glass: "rgba(30, 30, 30, 0.4)",
        },
        accent: "#60A5FA",
        emeraldAccent: "#34D399",
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
          "0%, 100%": { opacity: "0.08", transform: "scale(1)" },
          "50%": { opacity: "0.15", transform: "scale(1.08)" },
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

