import React from "react";
import { Briefcase, Calendar, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import experienceData from "../../data/experience";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ExperienceSection = () => {
  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionVariants}
      className="w-full max-w-7xl px-4 md:px-8 py-24 z-10 border-t border-theme-border"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-theme-accent" />
            <span className="text-xs uppercase tracking-widest text-theme-accent font-mono">
              Career Timeline
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-theme-text mb-2">
            Experience & Journey
          </h2>
          <p className="text-theme-muted text-base md:text-lg font-light tracking-wide max-w-lg">
            Engineering scalable frontend solutions and interactive systems across high-growth startups and tech teams.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(experienceData || []).map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="ios-glass p-8 rounded-[32px] hover:bg-theme-card-hover hover:border-theme-border-hover group flex flex-col justify-between cursor-default"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2.5">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    className="w-9 h-9 rounded-xl bg-theme-pill flex items-center justify-center text-theme-accent group-hover:bg-theme-accent-subtransition-colors"
                  >
                    <Briefcase className="w-4 h-4" />
                  </motion.div>
                  <span className="text-xs font-mono text-theme-accent uppercase tracking-wider">
                    {item.role}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-theme-subtle font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.duration}</span>
                </div>
              </div>

              <h3 className="text-xl font-medium text-theme-text tracking-tight mb-4 group-hover:text-theme-accent transition-colors">
                {item.name}
              </h3>

              {item.description && (
                <div className="space-y-2 mt-2">
                  {Array.isArray(item.description) ? (
                    item.description.map((desc, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-theme-muted text-xs sm:text-sm leading-relaxed font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-1" />
                        <span>{desc}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-theme-muted text-xs sm:text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
