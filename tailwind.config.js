/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
      },
    },
  },
  plugins: [],
};
// This Tailwind CSS configuration file enables dark mode, specifies the content paths for purging unused styles, and extends the theme with custom keyframes and animations for a shiny text effect. The animation is set to run infinitely with a duration of 5 seconds.
// The `shine` animation moves the background position from 100% to -100%, creating
