import React, { useEffect } from "react";
import { X, Download, Clock, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";
import { modalVariants, backdropVariants } from "../../utils/motionVariants";

export default function InsightModal({ article, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!article) return null;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={backdropVariants}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        variants={modalVariants}
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 overflow-y-auto hide-scrollbar shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 bg-[#0a0a0a]/95 backdrop-blur border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs text-orange-500 font-mono tracking-widest uppercase">{article.category}</span>
            <span className="text-stone-600">•</span>
            <span className="text-xs text-stone-400 font-mono flex items-center gap-1">
              <Clock className="w-3 h-3 text-stone-500" /> {article.readTime}
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            aria-label="Close insight modal"
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-stone-400 hover:text-white hover:border-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Article Header */}
        <div className="p-6 md:p-10 border-b border-white/10 bg-stone-950">
          <span className="text-xs text-orange-500 uppercase tracking-widest font-semibold block mb-3 font-mono">
            Engineering Whitepaper
          </span>
          <h1 className="text-2xl md:text-4xl font-display text-white mb-4 leading-tight">{article.title}</h1>
          <p className="text-stone-400 text-sm md:text-base font-light leading-relaxed mb-6 italic border-l-2 border-orange-500 pl-4">
            {article.summary}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs text-stone-500 font-mono pt-4 border-t border-white/5">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-orange-500" /> {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-orange-500" /> {article.author}
            </span>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 md:p-10 space-y-8 text-stone-300 text-sm md:text-base leading-relaxed font-light">
          {article.sections?.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-lg md:text-xl font-display text-white font-medium">{section.heading}</h3>
              <p className="text-stone-300 leading-7">{section.text}</p>
            </div>
          ))}

          {/* Quantitative Highlight Box */}
          <div className="p-6 bg-stone-900/40 border border-white/10 rounded-none my-6">
            <span className="text-xs uppercase font-mono text-orange-500 tracking-widest block mb-2">Key Takeaways</span>
            <ul className="space-y-2 text-xs md:text-sm text-stone-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                <strong>Real-Time Monitoring:</strong> Continuously analyzes worker facial, behavioral and physical cues to identify potential signs of fatigue.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                <strong>Early Fatigue Detection:</strong> Identifies patterns such as prolonged eye closure and changes in alertness to detect fatigue at an early stage.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                <strong>Safety Alerts:</strong> Provides timely warnings when sustained fatigue indicators are detected, supporting safer industrial working environments.
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-stone-950 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xs text-stone-500">© Debdip Bhattacharya • Technical Engineering Archive.</span>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-5 py-2 bg-stone-100 hover:bg-white text-black text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
            >
              Close
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
