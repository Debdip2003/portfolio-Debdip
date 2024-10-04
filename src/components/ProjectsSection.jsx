import React from 'react'
import NavBar from './NavBar'
import projects from "..//data/projects"

const ProjectsSection = () => {
  return (
    <>
    <NavBar/>
    <div className="w-full h-full p-10 flex justify-evenly gap-6">
      {projects.map((item,index) => {
        return (
          <div className="w-[28%] h-full text-white border border-white flex flex-col justify-center items-center p-2 pb-4 gap-2 rounded-2xl" key={item.id} >
            <img src={item.img} alt={item.name} className='w-fit h-full rounded-2xl'/>
            <h1 className="text-2xl">{item.name}</h1>
            <p className="text-xl">{item.desc}</p>
            <p className="text-md">{item.duration}</p>
            <div className="w-full flex justify-evenly mt-6">
              {item.firstLink ? (
                <a href={item.firstLink} target="_blank" rel="noreferrer">
                  <button className="bg-blue-600 text-white p-3 rounded-2xl hover:bg-blue-800 duration-200 ">
                    {item.firstButton}
                  </button>
                </a>
              ) : (
                <button className="bg-blue-600 text-white p-3 rounded-2xl hover:bg-blue-800 duration-200 ">
                  {item.firstButton}
                </button>
              )}

              {item.secondLink ? (
                <a href={item.secondLink} target="_blank" rel="noreferrer">
                  <button className="bg-blue-600 text-white p-3 rounded-2xl  hover:bg-blue-800 duration-200">
                    {item.secondButton}
                  </button>
                </a>
              ) : (
                <button className="bg-blue-600 text-white p-3 rounded-2xl  hover:bg-blue-800 duration-200">
                  {item.secondButton}
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default ProjectsSection
