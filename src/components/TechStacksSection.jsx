import React, { useState } from "react";
import techStacks from "../data/techStacks";
import dropdownOptions from "../data/dropDown";

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
      className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-10 relative overflow-hidden text-white transition-colors duration-500 animate-fade-in-up"
    >
      {/* Animated floating shapes background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-600/30 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-tr from-purple-600/30 to-blue-400/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center z-10 px-4 py-10">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Tech Stacks
        </h1>
        <select
          className="w-full sm:w-1/5 text-black dark:text-white bg-white dark:bg-gray-800 p-2 rounded-xl hover:cursor-pointer border border-blue-200 dark:border-pink-800 shadow"
          value={value}
          onChange={handleOption}
        >
          <option value="">All Types</option>
          {dropdownOptions.map((item) => (
            <option value={item.value} key={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div className="w-[70%] flex flex-wrap gap-6 justify-center items-center animate-fade-in">
        {(filteredList.length > 0 ? filteredList : techStacks).map(
          (item, idx) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white/80 dark:bg-black/60 shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-200 animate-stagger-fade-in"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-20 h-20 object-contain mb-2 drop-shadow-lg"
              />
              <span className="text-sm text-gray-700 dark:text-gray-200 font-semibold capitalize">
                {item.alt.replace(/-/g, " ")}
              </span>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default TechStacksSection;
