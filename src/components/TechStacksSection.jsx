import React, { useState } from "react";
import techStacks from "../data/techStacks";
import dropdownOptions from "../data/dropDown";
import GlareHover from "./GlareHover";

const TechStacksSection = () => {
  const [value, setValue] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const handleOption = (e) => {
    const selectedOption = e.target.value;
    setValue(selectedOption);
    const filtered = techStacks.filter(
      (stacks) => stacks.type === selectedOption
    );
    setFilteredList(filtered);
  };

  return (
    <section
      id="tech-stacks"
      className="w-full flex flex-col justify-center items-center px-4 py-16 relative overflow-hidden transition-colors duration-500 animate-fade-in-up"
    >
      {/* Floating decorative shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="floating-shape absolute top-10 left-10 w-40 h-40 rounded-full blur-3xl animate-pulse-slow" />
        <div className="floating-shape absolute bottom-10 right-20 w-32 h-32 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <div className="w-full mx-auto flex flex-col items-center text-center z-10 px-8 md:px-16">
        <h1 className="section-heading text-3xl sm:text-5xl mb-4">
          Tech Stacks
        </h1>
        <select
          className="form-input w-full sm:w-1/4 p-2.5 hover:cursor-pointer mb-8 appearance-none"
          value={value}
          onChange={handleOption}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 12px center",
            paddingRight: "36px",
          }}
        >
          <option value="" style={{ background: "#0f1923", color: "#e2e8f0" }}>All Types</option>
          {dropdownOptions.map((item) => (
            <option value={item.value} key={item.id} style={{ background: "#0f1923", color: "#e2e8f0" }}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full px-8 md:px-16 flex flex-wrap gap-6 justify-center items-center animate-fade-in">
        {(filteredList.length > 0 ? filteredList : techStacks).map(
          (item, idx) => (
            <GlareHover key={item.id}>
              <div className="flex flex-col items-center justify-center">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-20 h-20 object-contain mb-2 drop-shadow-lg rounded-lg"
                />
                <span
                  className="text-sm font-semibold capitalize"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.alt.replace(/-/g, " ")}
                </span>
              </div>
            </GlareHover>
          ),
        )}
      </div>
    </section>
  );
};

export default TechStacksSection;
