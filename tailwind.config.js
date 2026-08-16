/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cinzel", "serif"],
        serif: ["Cinzel", "serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        brand: {
          bg: "#050505",
          surface: "#080808",
          surfaceAlt: "#0a0a0a",
          card: "#1c1917",
          primary: "#f97316",
          primaryHover: "#ea580c",
          accent: "#ea580c",
          textPrimary: "#f5f5f4",
          textSecondary: "#a8a29e",
          textMuted: "#57534e",
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-fast": "marquee 25s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-up": "scaleUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
