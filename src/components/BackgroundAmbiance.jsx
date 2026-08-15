import React from "react";

const BackgroundAmbiance = ({ isDarkMode = true }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 transition-opacity duration-700">
      {/* Top Left Tiffany / Cyan Orb */}
      <div
        className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full filter blur-[130px] transition-all duration-700 animate-pulse-glow"
        style={{
          backgroundColor: "var(--ambient-orb-1)",
          opacity: "var(--ambient-opacity-1)",
        }}
      />

      {/* Bottom Right Blue Orb */}
      <div
        className="fixed bottom-[-20%] right-[-10%] w-[550px] h-[550px] rounded-full filter blur-[130px] transition-all duration-700 animate-float"
        style={{
          backgroundColor: "var(--ambient-orb-2)",
          opacity: "var(--ambient-opacity-2)",
        }}
      />

      {/* Subtle Mid-page Ambient Accent */}
      <div
        className="fixed top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full filter blur-[150px] pointer-events-none transition-all duration-700"
        style={{
          backgroundColor: "var(--ambient-orb-3)",
          opacity: "var(--ambient-opacity-3)",
        }}
      />
    </div>
  );
};

export default BackgroundAmbiance;
