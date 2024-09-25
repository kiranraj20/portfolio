import React from "react";
import Coder from "../assets/icons/coder";
import Close from "../assets/icons/close";

const AboutMe = ({ setAboutMe, aboutMe }) => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "React.js",
    "Express.js",
    "Bootstrap",
    "Tailwind CSS",
    "Material-UI",
    "MongoDB",
    "NoSQL",
    "Git",
    "GitHub",
    "Docker",
    "Heroku",
    "Vercel",
    "ESLint",
    "Prettier",
    "RESTful APIs",
    "Problem-solving",
  ];

  return (
    <div className={`absolute inset-0 bg-[#111] z-50 bg-opacity-90 justify-center items-center duration-1000 ${aboutMe?'flex duration-1000':'hidden duration-1000'} `}>
      <div
        className="flex justify-start items-center w-[90%] max-h-screen bg-[#111] rounded-xl flex-col "
        style={{ filter: "drop-shadow(0 0px 10px #eee)" }}
      >
        <div className="w-full flex justify-end items-center">
          <div
            onClick={() => setAboutMe(false)}
            className="p-1 m-1 cursor-pointer rounded-full  hover:rotate-90 transition-transform duration-300 "
          >
            <Close />
          </div>
        </div>
        <div className="flex justify-start items-center">
          <div className="md:w-1/2 p-6 flex justify-center items-start flex-col">
            <h1 className="text-[24px] p-5 ">ABOUT ME</h1>
            <div className="w-full h-full flex flex-wrap justify-start items-start gap-2 px-2 ">
              {skills.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="px-3 py-1 border-1 border-x-2 rounded-full"
                  >
                    #{item}
                  </div>
                );
              })}
            </div>
            <h1 className="text-[24px] p-5 ">MERN STACK</h1>
            <div className=""></div>
          </div>
          <div
            className="w-1/2 overflow-hidden hidden md:flex justify-center items-center "
            style={{ filter: "drop-shadow(0 0px 10px #eee)" }}
          >
            <Coder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
