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
    <div className="w-full h-full p-4 sm:p-10">
      <select
        className="w-full sm:w-1/5 text-black p-2 rounded-xl hover:cursor-pointer"
        value={value}
        onChange={handleOption}
      >
        <option value="">Select Type</option>
        {dropdownOptions.map((item) => (
          <option value={item.value} key={item.id}>
            {item.label}
          </option>
        ))}
      </select>

      <div className="w-full mt-6 flex flex-wrap gap-4 justify-center sm:justify-start">
        {(filteredList.length > 0 ? filteredList : techStacks).map((item) => (
          <img
            key={item.id}
            src={item.img}
            alt={item.alt}
            className="rounded-2xl hover:cursor-pointer 
              w-[40vw] max-w-[120px] sm:w-[11%] sm:max-w-none"
          />
        ))}
      </div>
    </div>
  );
};

export default TechStacksSection;
