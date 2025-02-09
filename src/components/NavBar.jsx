import React from "react";
import navList from "../data/navList";
import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf";

const NavBar = () => {
  const handleButtonClick = () => {
    fetch(resume)
      .then((response) => response.blob())
      .then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = fileURL;
        a.download = "resume.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch((error) => {
        console.error("Error downloading resume:", error);
        alert("Failed to download resume");
      });
  };

  return (
    <div className="bg-transparent py-5 w-full text-white flex justify-between items-center px-10">
      <div>
        <h1 className="text-3xl">Portfolio</h1>
      </div>
      <div className="w-full md:w-1/2 flex justify-evenly items-center text-xl">
        {navList.map((item) => (
          <p
            key={item.id}
            className="text-gray-500 hover:scale-110 hover:cursor-pointer hover:text-white duration-200"
          >
            <Link
              to={
                item.to === "Home"
                  ? "/"
                  : item.disabled === false
                  ? `${item.to}`
                  : ""
              }
            >
              {item.name}
            </Link>
          </p>
        ))}
      </div>
      <div className="text-xl flex justify-between items-center">
        <p className="mr-4 bg-blue-600 p-2 rounded-xl hover:cursor-pointer hover:bg-blue-800 duration-200">
          <Link to={"/Contact"}>Contact Me</Link>
        </p>
        <p
          className="bg-blue-600 p-2 rounded-xl hover:cursor-pointer hover:bg-blue-800 duration-200"
          onClick={handleButtonClick}
        >
          Download Resume
        </p>
      </div>
    </div>
  );
};

export default NavBar;
