import React from "react";
import GlareHover from "./GlareHover";
import { hobbies } from "../data/hobbies";

const HobbiesSection = () => (
  <section
    id="hobbies"
    className="w-full flex justify-center items-center px-4 py-16 relative overflow-hidden animate-fade-in-up"
  >
    {/* Floating decorative shapes */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="floating-shape absolute top-10 left-10 w-40 h-40 rounded-full blur-3xl animate-pulse-slow" />
      <div className="floating-shape absolute bottom-10 right-20 w-32 h-32 rounded-full blur-2xl animate-pulse-slow" />
    </div>
    <div className="w-full mx-auto flex flex-col items-center text-center z-10 px-8 md:px-16">
      <h2 className="section-heading text-3xl sm:text-5xl mb-8 text-center animate-fade-in-up">
        Hobbies & Interests
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 w-full">
        {hobbies.map((h, i) => (
          <GlareHover width="100%" height="auto" key={i}>
            <div className="rounded-2xl px-3 py-5 sm:px-6 sm:py-8 flex flex-col items-center text-center animate-fade-in-up">
              <span className="text-2xl sm:text-4xl mb-2">{h.icon}</span>
              <span
                className="text-xs sm:text-lg font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {h.label}
              </span>
            </div>
          </GlareHover>
        ))}
      </div>
    </div>
  </section>
);

export default HobbiesSection;
