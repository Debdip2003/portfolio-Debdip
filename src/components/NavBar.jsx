import React, { useState } from "react";
import navList from "../data/navList";
import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="bg-transparent py-5 w-full text-white px-4 md:px-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl">Portfolio</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-1/2 justify-evenly items-center text-xl">
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

        {/* Desktop Buttons */}
        <div className="hidden md:flex text-xl items-center gap-4">
          <Link
            to="/Contact"
            className="bg-blue-600 p-2 rounded-xl hover:cursor-pointer hover:bg-blue-800 duration-200"
          >
            Contact Me
          </Link>
          <button
            className="bg-blue-600 p-2 rounded-xl hover:cursor-pointer hover:bg-blue-800 duration-200"
            onClick={handleButtonClick}
          >
            Download Resume
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          {navList.map((item) => (
            <Link
              key={item.id}
              to={
                item.to === "Home"
                  ? "/"
                  : item.disabled === false
                  ? `${item.to}`
                  : ""
              }
              className="text-gray-500 hover:text-white duration-200 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col gap-4 mt-4">
            <Link
              to="/Contact"
              className="bg-blue-600 p-2 rounded-xl text-center hover:bg-blue-800 duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </Link>
            <button
              className="bg-blue-600 p-2 rounded-xl hover:bg-blue-800 duration-200"
              onClick={() => {
                handleButtonClick();
                setIsOpen(false);
              }}
            >
              Download Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
