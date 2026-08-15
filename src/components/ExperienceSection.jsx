import React from "react";
import { Briefcase, Calendar, CheckCircle2, Sparkles } from "lucide-react";
import experienceData from "../data/experience";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="w-full max-w-7xl px-4 md:px-8 py-24 z-10 border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#81D8D0]" />
            <span className="text-xs uppercase tracking-widest text-[#81D8D0] font-mono">
              Career Timeline
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-2">
            Experience & Journey
          </h2>
          <p className="text-white/50 text-base md:text-lg font-light tracking-wide max-w-lg">
            Engineering scalable frontend solutions and interactive systems across high-growth startups and tech teams.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(experienceData || []).map((item, index) => (
          <div
            key={index}
            className="ios-glass p-8 rounded-[32px] hover:bg-white/5 hover:border-white/15 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-[#81D8D0] group-hover:bg-[#81D8D0]/10 transition-colors">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-[#81D8D0] uppercase tracking-wider">
                    {item.role}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-white/40 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.duration}</span>
                </div>
              </div>

              <h3 className="text-xl font-medium text-white tracking-tight mb-4 group-hover:text-[#81D8D0] transition-colors">
                {item.name}
              </h3>

              {item.description && (
                <div className="space-y-2 mt-2">
                  {Array.isArray(item.description) ? (
                    item.description.map((desc, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-white/50 text-xs sm:text-sm leading-relaxed font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#81D8D0]/70 shrink-0 mt-1" />
                        <span>{desc}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-white/50 text-xs sm:text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
