import React from "react";

const BackgroundAmbiance = ({ isAmbientOn = true }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Left Tiffany Orb */}
      <div
        className={`fixed top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full mix-blend-screen filter blur-[130px] transition-opacity duration-1000 ${
          isAmbientOn ? "opacity-[0.08]" : "opacity-[0.03]"
        } bg-[#81D8D0] animate-pulse-glow`}
      />

      {/* Bottom Right Blue Orb */}
      <div
        className={`fixed bottom-[-20%] right-[-10%] w-[550px] h-[550px] rounded-full mix-blend-screen filter blur-[130px] transition-opacity duration-1000 ${
          isAmbientOn ? "opacity-[0.11]" : "opacity-[0.04]"
        } bg-blue-900 animate-float`}
      />

      {/* Subtle Mid-page Ambient Accent */}
      <div
        className="fixed top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.03] bg-emerald-500 pointer-events-none"
      />
    </div>
  );
};

export default BackgroundAmbiance;
