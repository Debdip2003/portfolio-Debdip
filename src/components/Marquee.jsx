import React from "react";
import { portfolioData } from "../data/portfolioData";

export default function Marquee() {
  const skills = portfolioData.marqueeSkills;
  const repeatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="border-b border-white/5 py-4 overflow-hidden bg-[#050505] relative select-none">
      <div className="whitespace-nowrap animate-marquee flex items-center gap-10 md:gap-14 text-stone-700 hover:text-stone-500 transition-colors text-xs md:text-sm font-display uppercase tracking-[0.25em]">
        {repeatedSkills.map((skill, idx) => (
          <React.Fragment key={idx}>
            <span className="hover:text-stone-300 transition-colors cursor-default">{skill}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-stone-800" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
