import React from "react";
import { motion } from "framer-motion";

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

const ServiceCard = ({ icon: Icon, title, description, tags, index = 0 }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="ios-glass p-8 rounded-[32px] hover:bg-theme-card-hover group flex flex-col justify-between hover:border-theme-border-hover cursor-default"
    >
      <div>
        <motion.div
          whileHover={{ rotate: 10, scale: 1.15 }}
          className="w-12 h-12 rounded-2xl bg-theme-pill flex items-center justify-center text-theme-muted group-hover:text-theme-accent group-hover:bg-theme-accent-subtle transition-all duration-300 mb-6"
        >
          <Icon className="w-6 h-6" />
        </motion.div>
        <h3 className="text-xl font-medium text-theme-text tracking-tight mb-3 group-hover:text-theme-accent transition-colors">
          {title}
        </h3>
        <p className="text-theme-muted text-sm leading-relaxed font-light">
          {description}
        </p>
      </div>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-theme-border">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] uppercase font-mono px-2.5 py-1 rounded-full bg-theme-pill text-theme-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ServiceCard;
