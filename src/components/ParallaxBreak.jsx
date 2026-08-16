import React from "react";

export default function ParallaxBreak() {
  return (
    <div className="relative h-[65vh] w-full overflow-hidden flex items-center justify-center select-none">
      {/* Background Image with fixed presentation */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed filter brightness-75 scale-105"
        style={{
          backgroundImage: `url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg')`,
        }}
      />

      {/* Dark Ambient Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.9)_100%)] z-10" />

      {/* Center Monumental Statement */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto space-y-4">
        <span className="text-xs uppercase font-mono tracking-[0.3em] text-orange-400 block animate-pulse">
          Craft & Architecture
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display text-white tracking-tight leading-[1.05]">
          Engineering as <br />
          <span className="italic font-serif text-stone-200">High Craft.</span>
        </h2>
        <div className="w-12 h-[1px] bg-orange-500/80 mx-auto mt-6" />
      </div>
    </div>
  );
}
