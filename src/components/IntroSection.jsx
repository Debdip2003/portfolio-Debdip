import React from "react";
import IntroSectionImage from "..//assets/IntroSectionImage.jpeg";
import { ReactTyped } from "react-typed";

const IntroSection = () => {
  return (
    <div className="w-full h-full flex justify-evenly items-center p-10 text-white">
      <div>
        <img
          src={IntroSectionImage}
          alt="IntroSectionImage"
          className="rounded-2xl size-[85%]"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-7xl mb-10">
          <ReactTyped
            strings={["Hi, I'm a FrontEnd Web Developer"]}
            typeSpeed={70}
          ></ReactTyped>
        </h1>
        <p className="text-xl text-gray-500">
          Welcome to my portfolio! I am passionate about crafting engaging and
          user-centric experiences on the web. With a keen eye for design and
          proficiency in frontend development, I specialize in turning ideas
          into beautifully crafted websites. My journey began with a fascination
          for how technology can transform creativity into functional solutions.
          Over the years, I've honed my skills in HTML, CSS, JavaScript, and
          various frontend frameworks to build responsive, intuitive interfaces.
          Whether it's designing a seamless user journey or optimizing
          performance, I thrive on solving challenges and creating impactful
          digital experiences. Let's connect and explore how we can bring your
          ideas to life on the web.
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
