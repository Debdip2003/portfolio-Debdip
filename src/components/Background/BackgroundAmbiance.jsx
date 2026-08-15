import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const BackgroundAmbiance = ({ isDarkMode = true }) => {
  const { scrollYProgress } = useScroll();

  // Smooth out scroll progress with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // Parallax shifts for orbs
  const orb1Y = useTransform(smoothProgress, [0, 1], [0, 400]);
  const orb1X = useTransform(smoothProgress, [0, 1], [0, -100]);
  const orb1Scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.25, 0.9]);

  const orb2Y = useTransform(smoothProgress, [0, 1], [0, -350]);
  const orb2X = useTransform(smoothProgress, [0, 1], [0, 80]);
  const orb2Scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.9, 1.2]);

  const orb3Y = useTransform(smoothProgress, [0, 1], [0, -200]);
  const orb3Scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 transition-opacity duration-700">
      {/* Top Left Tiffany / Cyan Orb */}
      <motion.div
        className="fixed top-[-20%] left-[-10%] w-[650px] h-[650px] rounded-full filter blur-[140px] transition-all duration-700 animate-pulse-glow"
        style={{
          backgroundColor: "var(--ambient-orb-1)",
          opacity: "var(--ambient-opacity-1)",
          x: orb1X,
          y: orb1Y,
          scale: orb1Scale,
        }}
      />

      {/* Bottom Right Blue Orb */}
      <motion.div
        className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full filter blur-[140px] transition-all duration-700 animate-float"
        style={{
          backgroundColor: "var(--ambient-orb-2)",
          opacity: "var(--ambient-opacity-2)",
          x: orb2X,
          y: orb2Y,
          scale: orb2Scale,
        }}
      />

      {/* Subtle Mid-page Ambient Accent */}
      <motion.div
        className="fixed top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] rounded-full filter blur-[160px] pointer-events-none transition-all duration-700"
        style={{
          backgroundColor: "var(--ambient-orb-3)",
          opacity: "var(--ambient-opacity-3)",
          y: orb3Y,
          scale: orb3Scale,
        }}
      />
    </div>
  );
};

export default BackgroundAmbiance;
