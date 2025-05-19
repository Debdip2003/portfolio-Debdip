import React from "react";
import { ReactTyped } from "react-typed";
import AboutSectionImage from "../assets/AboutSectionImage.png";

const AboutSection = () => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col-reverse md:flex-row justify-evenly items-center p-6 md:p-10 text-white gap-10">
      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl sm:text-5xl md:text-6xl mb-6">
          <ReactTyped strings={["Learn About Me..."]} typeSpeed={70} />
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Welcome to my corner of the web! I'm Debdip Bhattacharya, a frontend
          developer specializing in React and JavaScript. With 1 year of
          dedicated experience, I've honed my skills in crafting immersive and
          user-friendly interfaces that blend creativity with technical
          excellence. My journey began with a fascination for how code can
          transform ideas into tangible digital experiences, and it has evolved
          into a passion for building scalable web applications that not only
          meet but exceed client expectations. <br />
          <br />
          Throughout my career, I've had the privilege of working on diverse
          projects, from creating responsive layouts that adapt seamlessly
          across devices to integrating complex APIs that enhance functionality.
          My proficiency in React allows me to leverage its powerful ecosystem
          to develop modular, efficient, and maintainable codebases. <br />
          <br />
          I thrive in collaborative environments where I can contribute my
          expertise while learning from talented peers. Beyond technical
          proficiency, I'm committed to staying abreast of industry trends and
          best practices. This dedication ensures that my solutions not only
          meet current standards but also anticipate future needs, providing
          clients with sustainable and innovative digital solutions.
          <br />
          <br />
          Let's embark on a journey together to transform your vision into
          reality. Whether you're looking to enhance user experiences,
          streamline workflows, or tackle new challenges in frontend
          development, I'm here to help you achieve your goals. Get in touch,
          and let's build something extraordinary together!
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={AboutSectionImage}
          alt="AboutSectionImage"
          className="w-4/5 max-w-[400px] rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutSection;
