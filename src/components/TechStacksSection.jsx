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
    <div className="w-full h-full p-10">
      <select
        className="w-1/5 text-black p-2 rounded-xl hover:cursor-pointer"
        value={value}
        onChange={handleOption}
      >
        {dropdownOptions.map((item) => {
          return (
            <option value={item.value} key={item.id}>
              {item.label}
            </option>
          );
        })}
      </select>
      <div className="w-full mt-10 flex flex-wrap gap-6">
        {filteredList.length > 0
          ? filteredList.map((item) => (
              <img
                key={item.id}
                src={item.img}
                alt={item.alt}
                className="rounded-2xl size-[11%] hover:cursor-pointer"
              />
            ))
          : techStacks.map((item) => (
              <img
                key={item.id}
                src={item.img}
                alt={item.alt}
                className="rounded-2xl size-[11%] hover:cursor-pointer"
              />
            ))}
      </div>
    </div>
  );
};

export default TechStacksSection;
