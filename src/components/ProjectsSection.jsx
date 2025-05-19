import React from "react";
import NavBar from "./NavBar";
import projects from "../data/projects";

const ProjectsSection = () => {
  return (
    <>
      <NavBar />
      <div className="w-full min-h-screen p-6 md:p-10 bg-black text-white">
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((item, index) => (
            <div
              key={item.id || index}
              className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] border border-white rounded-2xl overflow-hidden bg-gray-900 hover:shadow-lg transition duration-300 flex flex-col items-center p-4 gap-4"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="flex flex-col items-center text-center gap-2">
                <h1 className="text-xl font-semibold">{item.name}</h1>
                <p className="text-gray-300 text-sm">{item.desc}</p>
                <p className="text-gray-500 text-xs">{item.duration}</p>
              </div>
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
    </>
  );
};

export default ProjectsSection;
