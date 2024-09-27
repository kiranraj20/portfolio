import React from "react";
import Reveal from "./reveal";

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

  const handleClickOutside = (e) => {
    if (e.target.id === "overlay") {
      setAboutMe(false);
    }
  };

  return (
    <div
      id="overlay"
      className={`absolute inset-0 bg-[#111] z-50 bg-opacity-90 justify-center items-center duration-1000 ${
        aboutMe ? "flex duration-1000" : "hidden duration-1000"
      } `}
      onClick={handleClickOutside}
    >
      <div
        className="flex justify-start items-center w-[90%] md:w-[70%] max-h-screen rounded-xl flex-col"
        style={{ filter: "drop-shadow(0 0px 3px #eee)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          id="card"
          className="flex justify-start items-start overflow-scroll no-scrollbar"
        >
          <div className="md:w-full flex justify-start items-center flex-col gap-y-7 ">
            <Reveal>
              <div className="flex flex-col justify-center items-center bg-[#111] rounded-xl">
                <h1 className="text-[24px] p-5 ">ABOUT ME</h1>
                <p className="text-[18px] p-5 text-[#eee]">
                  A skilled front-end developer experienced in building dynamic
                  web apps using ReactJS, Angular, and Tailwind CSS. Developed
                  full-stack projects like a YouTube clone and task management
                  systems. Proficient in creating responsive, user-friendly
                  interfaces with clean design. Recently expanded skills in
                  back-end development. Ready to contribute immediately to a
                  fast-paced development team.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="w-full h-full flex flex-wrap justify-start items-start gap-2 px-2 bg-[#111] rounded-xl">
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
            </Reveal>
            <Reveal>
              <div className="bg-[#111] rounded-xl flex w-full justify-center items-center">
                <h1 className="text-[24px] p-5 ">MERN STACK</h1>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-[#111] rounded-xl flex w-full justify-center items-center">
                <h1 className="text-[24px] p-5 ">MERN STACK</h1>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-[#111] rounded-xl flex w-full justify-center items-center">
                <h1 className="text-[24px] p-5 ">MERN STACK</h1>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-[#111] rounded-xl flex w-full justify-center items-center">
                <h1 className="text-[24px] p-5 ">MERN STACK</h1>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-[#111] rounded-xl flex w-full justify-center items-center">
                <h1 className="text-[24px] p-5 ">MERN STACK</h1>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-[#111] rounded-xl flex w-full justify-center items-center">
                <h1 className="text-[24px] p-5 ">MERN STACK</h1>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
