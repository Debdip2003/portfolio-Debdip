import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { fadeInUp, sectionContainerVariants } from "../utils/motionVariants";

export default function Philosophy() {
  const { stats } = portfolioData;

  return (
    <section id="philosophy" className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] border-b border-white/5 relative">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Left Column: Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="lg:col-span-5 space-y-6 lg:sticky lg:top-32"
        >
          <span className="text-xs text-orange-500 uppercase tracking-widest font-mono block">
            The Philosophy
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-display text-white leading-[1.15]">
            I believe in the <br />
            <span className="italic font-serif text-stone-100">"Spatial & Cognitive Integrity"</span> of user interfaces.
          </h3>
          <div className="w-16 h-[1px] bg-orange-500/60 hidden lg:block" />
        </motion.div>

        {/* Right Column: Editorial Body & Performance Metrics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionContainerVariants}
          className="lg:col-span-7 space-y-8"
        >
          <motion.p variants={fadeInUp} className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
            In an era of automated abstraction and generic design systems, the enduring value of intentional,
            meticulously crafted web interfaces remains the paramount differentiator for high-growth software products.
            I engineer at the intersection of modern aesthetic precision and uncompromising frontend architecture.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-stone-400 text-sm sm:text-base leading-relaxed font-light">
            From client-side deep learning inference running in WebAssembly to sub-second responsive dashboards and
            cross-platform mobile builds, each line of code is written with obsessive attention to user perceived latency,
            type safety, and accessibility.
          </motion.p>

          {/* Quant Performance Stats Row */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-3 gap-6 sm:gap-12 border-t border-white/10 pt-10 mt-10"
          >
            <div>
              <span className="block text-3xl sm:text-5xl font-display text-white mb-2 tracking-tight">
                {stats.projectsShipped}
              </span>
              <span className="text-[11px] sm:text-xs text-stone-500 uppercase tracking-widest font-mono">
                Projects Shipped
              </span>
            </div>
            <div>
              <span className="block text-3xl sm:text-5xl font-display text-white mb-2 tracking-tight">
                {stats.yearsActive}
              </span>
              <span className="text-[11px] sm:text-xs text-stone-500 uppercase tracking-widest font-mono">
                Years Active
              </span>
            </div>
            <div>
              <span className="block text-3xl sm:text-5xl font-display text-white mb-2 tracking-tight">
                {stats.clientSatisfaction}
              </span>
              <span className="text-[11px] sm:text-xs text-stone-500 uppercase tracking-widest font-mono">
                Code Quality
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
