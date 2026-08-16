import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { fadeInUp, sectionContainerVariants } from "../utils/motionVariants";

export default function ExperienceSection() {
  const experiences = portfolioData.experiences;

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#050505] border-b border-white/5 relative">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-xs text-orange-500 uppercase tracking-widest font-mono block mb-2">
              Career Provenance
            </span>
            <h2 className="text-3xl md:text-5xl font-display text-white">Experience & Journey</h2>
          </div>
          <p className="text-stone-400 text-sm md:text-base font-light max-w-md leading-relaxed">
            Engineering robust production frontend architectures, cross-platform mobile ecosystems, and high-velocity UI
            systems across startups and tech organizations.
          </p>
        </motion.div>

        {/* Experience Timeline Grid with Stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionContainerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="bg-stone-900/30 border border-white/5 p-8 flex flex-col justify-between group hover:border-white/20 hover:bg-stone-900/50 transition-all duration-300 luxury-border-glow"
            >
              <div>
                {/* Meta Top */}
                <div className="flex justify-between items-start gap-2 mb-6">
                  <span className="text-xs font-mono text-orange-500 tracking-wider uppercase">
                    0{idx + 1} • {exp.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 font-mono">
                    <Calendar className="w-3 h-3 text-orange-500" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Role & Company */}
                <h3 className="text-xl md:text-2xl font-display text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {exp.role}
                </h3>
                <h4 className="text-sm font-mono text-stone-400 mb-6 flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-stone-500" />
                  <span>{exp.company}</span>
                </h4>

                {/* Description Bullets */}
                <div className="space-y-3 pt-4 border-t border-white/5">
                  {exp.description.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-400 font-light leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500/80 mt-2 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags Bottom */}
              <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-white/5">
                {exp.tags?.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2.5 py-1 bg-stone-950/80 border border-white/10 text-stone-400 group-hover:text-stone-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
