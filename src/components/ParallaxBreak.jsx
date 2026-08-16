import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp } from "../utils/motionVariants";

export default function ParallaxBreak() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <div
      ref={containerRef}
      className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center select-none"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y: bgY }}
        className="absolute -top-[20%] -bottom-[20%] left-0 right-0 bg-cover bg-center bg-no-repeat filter brightness-70 scale-110"
        style={{
          y: bgY,
          backgroundImage: `url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg')`,
        }}
      />

      {/* Dark Ambient Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.92)_100%)] z-10" />

      {/* Center Monumental Statement */}
      <motion.div
        style={{ scale: textScale }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeInUp}
        className="relative z-20 text-center px-6 max-w-4xl mx-auto space-y-4"
      >
        <span className="text-xs uppercase font-mono tracking-[0.3em] text-orange-400 block animate-pulse">
          Craft & Architecture
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display text-white tracking-tight leading-[1.05]">
          Engineering as <br />
          <span className="italic font-serif text-stone-200">High Craft.</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-[1px] bg-orange-500/80 mx-auto mt-6"
        />
      </motion.div>
    </div>
  );
}
