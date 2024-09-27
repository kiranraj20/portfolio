import React, { useContext, useEffect, useRef } from "react";
import Reveal from "./reveal";
import MernStack from "./mernStack";
import ThemeContext from "./ThemeContext";

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

  const cardsContainer = useRef(null);
  const card = document.getElementById("overlay");

  const applyOverlayMask = (e) => {
    const documentTarget = e.currentTarget;

    if (!cardsContainer.current) {
      return;
    }

    const containerRect = cardsContainer.current.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;

    documentTarget.setAttribute(
      "style",
      `--x: ${x}px; --y: ${y}px; --opacity:1`
    );
  };

  const theme = useContext(ThemeContext);

  useEffect(() => {
    const handlePointerMove = (e) => {
      applyOverlayMask(e);
    };
    if (card) {
      card.addEventListener("pointermove", handlePointerMove);
    }
    return () => {
      if (card) {
        card.removeEventListener("pointermove", handlePointerMove);
      }
    };
  }, [card]);

  return (
    <div
      id="overlay"
      className={`absolute inset-0 ${theme === 'dark'?'bg-[#111]':'bg-[#eee]'} z-50 bg-opacity-90 justify-center items-center duration-1000  overflow-scroll no-scrollbar ${
        aboutMe ? "flex duration-1000" : "hidden duration-1000"
      } `}
      onClick={handleClickOutside}
    >
      <div
        className="flex justify-start items-center w-[90%] md:w-[70%] max-h-screen rounded-xl flex-col"
        style={{ filter: "drop-shadow(0 0px 10px #000)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div id="card" className="flex flex-col justify-start items-start">
          <div className="relative" ref={cardsContainer}>
            <div className="md:w-full flex justify-start items-center flex-col gap-y-7 py-5 max-w-full ">
              <Reveal>
                <div className={`flex flex-col justify-center items-center p-5 ${theme === 'dark'?'bg-[#111]':'bg-[#eee]'} rounded-xl`}>
                  <h1 className="text-[24px] font-bold pb-5 ">ABOUT ME</h1>
                  <MernStack />
                  <p className="text-[18px] hyphens-auto">
                    A skilled front-end developer experienced in building
                    dynamic web apps using ReactJS, Angular, and Tailwind CSS.
                    Developed full-stack projects like a YouTube clone and task
                    management systems. Proficient in creating responsive,
                    user-friendly interfaces with clean design. Recently
                    expanded skills in back-end development. Ready to contribute
                    immediately to a fast-paced development team.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className={`flex flex-col justify-center items-center p-5 ${theme === 'dark'?'bg-[#111]':'bg-[#eee]'} rounded-xl`}>
                  <h1 className="text-[24px] font-bold pb-5 ">SKILLS</h1>
                  <div className="flex  flex-wrap justify-start items-start gap-2">
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
                </div>
              </Reveal>
              <Reveal>
                <div className={`flex flex-col justify-center items-center p-5 ${theme === 'dark'?'bg-[#111]':'bg-[#eee]'} rounded-xl`}>
                  <h1 className="text-[24px] font-bold pb-5 ">EXPERIENCE</h1>
                  <div className="w-full flex justify-between font-extrabold">
                    <h1>Web Development Intern - Null Class EduTech</h1>
                    <h1>Apr 2024 - Jun 2024</h1>
                  </div>
                  <ul className="list-disc p-5 w-full">
                    <li>
                      Developed and maintained web applications using React.js,
                      improving user experience for 1000+ daily active users.
                    </li>
                    <li>
                      Implemented RESTful APIs using Node.js, reducing server
                      response time by 30%.
                    </li>
                    <li>
                      Debugged and resolved 50+ technical issues, ensuring 99.9%
                      uptime for web applications.
                    </li>
                    <li>
                      Stayed updated with industry trends, introducing 3 new
                      technologies that advanced development efficiency by 20%.
                    </li>
                  </ul>
                  <div className="w-full flex justify-between font-extrabold">
                    <h1>ReactJS Intern - Infila</h1>
                    <h1>Nov 2023 - Jan 2024</h1>
                  </div>
                  <ul className="list-disc p-5 w-full">
                    <li>
                      Full-fledged 10+ reusable components for front-end
                      applications using React.js, GraphQL, and Nest.js.
                    </li>
                    <li>
                      Executed Material UI and Bootstrap to create responsive
                      designs, improving mobile user engagement by 25%.
                    </li>
                    <li>
                      Actively participated in daily scrum calls, contributing
                      to team productivity and project alignment.
                    </li>
                  </ul>
                </div>
              </Reveal>
              <Reveal>
                <div className={`flex flex-col justify-center items-center p-5 ${theme === 'dark'?'bg-[#111]':'bg-[#eee]'} rounded-xl`}>
                  <h1 className="text-[24px] font-bold pb-5 ">EDUCATION</h1>
                  <div className="w-full flex justify-between font-extrabold">
                    <h1>
                      Bachelor of Technology in Computer Science and Engineering
                    </h1>
                    <h1>Jun 2018 – Sep 2022</h1>
                  </div>
                  <ul className="list-disc p-5 w-full">
                    <li>
                      DRK College of Engineering and Technology - Hyderabad,
                      INDIA
                    </li>
                    <li>CGPA: 6.43</li>
                  </ul>
                  <div className="w-full flex justify-between font-extrabold">
                    <h1>Higher Secondary Education (MPC) </h1>
                    <h1>Jun 2016 – Mar 2018</h1>
                  </div>
                  <ul className="list-disc p-5 w-full">
                    <li>Narayana Junior College - Hyderabad, INDIA</li>
                    <li>CGPA: 8.28</li>
                  </ul>
                </div>
              </Reveal>
            </div>
            {/* layout mask */}
            <div
              className="md:w-full flex justify-start items-center flex-col gap-y-7 py-5 max-w-full text-transparent select-none pointer-events-none absolute inset-0 "
              style={{
                opacity: "var(--opacity, 0)",
                mask: `
                  radial-gradient(
                  25rem 25rem at var(--x) var(--y),
                  #000 1%,
                  transparent 50%
                )`,
                WebkitMask: `
                  radial-gradient(
                  25rem 25rem at var(--x) var(--y),
                  #000 0%,
                  transparent 50%
                )`,
              }}
            >
              <Reveal>
                <div className="flex flex-col justify-center items-center p-5 bg-[#19428f] rounded-xl">
                  <h1 className="text-[24px] font-bold pb-5 ">ABOUT ME</h1>
                  <MernStack />
                  <p className="text-[18px] hyphens-auto">
                    A skilled front-end developer experienced in building
                    dynamic web apps using ReactJS, Angular, and Tailwind CSS.
                    Developed full-stack projects like a YouTube clone and task
                    management systems. Proficient in creating responsive,
                    user-friendly interfaces with clean design. Recently
                    expanded skills in back-end development. Ready to contribute
                    immediately to a fast-paced development team.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className="flex flex-col justify-center items-center p-5 bg-[#47a248] rounded-xl">
                  <h1 className="text-[24px] font-bold pb-5 ">SKILLS</h1>
                  <div className="flex  flex-wrap justify-start items-start gap-2">
                    {skills.map((item, index) => {
                      return (
                        <div key={index} className="px-3 py-1 rounded-full">
                          #{item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="flex flex-col justify-center items-center p-5 bg-[#61dafb] rounded-xl">
                  <h1 className="text-[24px] font-bold pb-5 ">EXPERIENCE</h1>
                  <div className="w-full flex justify-between font-extrabold">
                    <h1>Web Development Intern - Null Class EduTech</h1>
                    <h1>Apr 2024 - Jun 2024</h1>
                  </div>
                  <ul className="list-disc p-5 w-full">
                    <li>
                      Developed and maintained web applications using React.js,
                      improving user experience for 1000+ daily active users.
                    </li>
                    <li>
                      Implemented RESTful APIs using Node.js, reducing server
                      response time by 30%.
                    </li>
                    <li>
                      Debugged and resolved 50+ technical issues, ensuring 99.9%
                      uptime for web applications.
                    </li>
                    <li>
                      Stayed updated with industry trends, introducing 3 new
                      technologies that advanced development efficiency by 20%.
                    </li>
                  </ul>
                  <div className="w-full flex justify-between font-extrabold">
                    <h1>ReactJS Intern - Infila</h1>
                    <h1>Nov 2023 - Jan 2024</h1>
                  </div>
                  <ul className="list-disc p-5 w-full">
                    <li>
                      Full-fledged 10+ reusable components for front-end
                      applications using React.js, GraphQL, and Nest.js.
                    </li>
                    <li>
                      Executed Material UI and Bootstrap to create responsive
                      designs, improving mobile user engagement by 25%.
                    </li>
                    <li>
                      Actively participated in daily scrum calls, contributing
                      to team productivity and project alignment.
                    </li>
                  </ul>
                </div>
              </Reveal>
              <Reveal>
                <div className="flex flex-col justify-center items-center p-5 bg-[#8cc84b] rounded-xl">
                  <h1 className="text-[24px] font-bold pb-5 ">EDUCATION</h1>
                  <div className="w-full flex justify-between font-extrabold">
                    <h1>
                      Bachelor of Technology in Computer Science and Engineering
                    </h1>
                    <h1>Jun 2018 – Sep 2022</h1>
                  </div>
                  <ul className="list-disc p-5 w-full">
                    <li>
                      DRK College of Engineering and Technology - Hyderabad,
                      INDIA
                    </li>
                    <li>CGPA: 6.43</li>
                  </ul>
                  <div className="w-full flex justify-between font-extrabold">
                    <h1>Higher Secondary Education (MPC) </h1>
                    <h1>Jun 2016 – Mar 2018</h1>
                  </div>
                  <ul className="list-disc p-5 w-full">
                    <li>Narayana Junior College - Hyderabad, INDIA</li>
                    <li>CGPA: 8.28</li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
