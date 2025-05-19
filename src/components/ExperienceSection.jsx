import React from "react";
import experience from "../data/experience";

const ExperienceSection = () => {
  return (
    <div className="w-full min-h-screen p-6 md:p-10 bg-black text-white">
      <div className="flex flex-wrap gap-6 justify-center">
        {experience.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[90%] md:w-[55%] lg:w-[30%] border border-white rounded-2xl p-6 flex flex-col items-center gap-4 bg-gray-900 hover:shadow-lg transition duration-300"
          >
            <h1 className="text-xl font-semibold">{item.name}</h1>
            <p className="text-md text-gray-300">{item.role}</p>
            <p className="text-sm text-gray-500">{item.duration}</p>

            <div className="w-full flex justify-center gap-4 mt-4">
              {item.firstButton &&
                (item.firstLink ? (
                  <a href={item.firstLink} target="_blank" rel="noreferrer">
                    <button className="bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-xl transition duration-200">
                      {item.firstButton}
                    </button>
                  </a>
                ) : (
                  <button className="bg-blue-600 px-4 py-2 rounded-xl cursor-default opacity-60">
                    {item.firstButton}
                  </button>
                ))}
              {item.secondButton &&
                (item.secondLink ? (
                  <a href={item.secondLink} target="_blank" rel="noreferrer">
                    <button className="bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-xl transition duration-200">
                      {item.secondButton}
                    </button>
                  </a>
                ) : (
                  <button className="bg-blue-600 px-4 py-2 rounded-xl cursor-default opacity-60">
                    {item.secondButton}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
