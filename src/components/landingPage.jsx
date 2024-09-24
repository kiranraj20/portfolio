import React, { useRef, useState } from "react";
import "./landingPage.css";
import LatestWorks from "./latestWorks.jsx";
import Connect from "./connect.jsx";
import Logo from "../assets/icons/logo.jsx";
import Sun from "../assets/icons/sun.jsx";
import Moon from "../assets/icons/moon.jsx";
import Phone from "../assets/icons/phone.jsx";
import Whatsapp from "../assets/icons/whatsapp.jsx";
import LogoColored from "../assets/icons/logoColored.jsx";
import RightArrow from "../assets/icons/rightArrow.jsx";
import Linkdin from "../assets/icons/linkdin.jsx";
import Twitter from "../assets/icons/twitter.jsx";
import Instagram from "../assets/icons/instagram.jsx";
import Mail from "../assets/icons/mail.jsx";
import GitHub from "../assets/icons/ginHub.jsx";
import DownArrow from "../assets/icons/downArrow.jsx";
import Certifications from "./certifications.jsx";
import ThemeContext from "./ThemeContext.jsx";
import ParticlesDark from "./particlesDark.js";
import ParticlesLight from "./particlesLight.js";
import Footer from "./footer.jsx";
import AboutMe from "./aboutMe.jsx";
import { motion } from "framer-motion";

const LandingPage = () => {
  const [theme, setTheme] = useState("dark");
  const [aboutMe, setAboutMe] = useState(false);
  const targetRef = useRef(null);

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: "easeOut",
      },
    },
  };
  const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className={`${
          theme === "dark" ? "text-white" : "text-black"
        } font-[nunito] `}
      >
        {aboutMe && <AboutMe setAboutMe={setAboutMe} />}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-between h-screen w-screen  relative"
        >
          {theme === "dark" ? (
            <ParticlesDark id="particles" className="md:block hidden" />
          ) : (
            <ParticlesLight id="particles" className="md:block hidden" />
          )}
          <header className="flex items-center justify-between px-4 pt-4 max-w-screen-xl mx-auto w-full">
            <motion.div
              variants={gridSquareVariants}
              animate={{
                scale: [1.5, 1],
                rotate: [90, 0],
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: 0,
                repeatDelay: 0,
              }}
              className="logo w-12 h-12"
            >
              <Logo />
            </motion.div>
            <div className="flex gap-4">
              {theme === "dark" ? (
                <motion.div
                  variants={gridSquareVariants}
                  animate={{
                    scale: [1, 1],
                    rotate: [-180, 0],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: 0,
                    repeatDelay: 0,
                  }}
                  className=" cursor-pointer "
                  onClick={() => handleTheme(theme)}
                >
                  <Sun />
                </motion.div>
              ) : (
                <motion.div
                  variants={gridSquareVariants}
                  className=" cursor-pointer "
                  onClick={() => handleTheme(theme)}
                >
                  <Moon />
                </motion.div>
              )}
              <motion.a
                variants={gridSquareVariants}
                animate={{
                  scale: [1, 1],
                  rotate: [10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: 0,
                  repeatDelay: 0,
                }}
                href="tel:+917032412114"
                target="_blank"
                rel="noreferrer"
              >
                <Phone />
              </motion.a>
              <motion.a
                variants={gridSquareVariants}
                animate={{
                  scale: [0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.1, 1],
                  rotate: [0, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: 0,
                  repeatDelay: 0,
                }}
                href="https://wa.me/+917032412114?text=Hi, How are you?"
                target="_blank"
                rel="noreferrer"
              >
                <Whatsapp />
              </motion.a>
            </div>
          </header>
          <div className="-mt-1 flex relative">
            <div className="w-full max-w-screen-xl mx-auto px-4">
              <LogoColored />
              <div className="relative ml-4 md:ml-12">
                <motion.h1
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  className=" text-4xl sm:text-5xl md:text-[64px] font-[spartan] mr-16 pointer-events-none"
                >
                  Suram Kiran raj
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  className="italic my-4 md:my-8 pointer-events-none"
                >
                  MERN STACK DEVELOPER
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                  onClick={() => setAboutMe(true)}
                  className=" bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group "
                >
                  About Me
                  <RightArrow />
                </motion.button>
              </div>
            </div>
            <ul
              className={`ml-auto space-y-6  ${
                theme === "dark" ? "text-[#b0b2c3]" : "text-[#1e1e1e]"
              } absolute right-8`}
            >
              <li>
                <motion.a
                  variants={gridSquareVariants}
                  href="https://www.linkedin.com/in/kiran-raj-18708720a"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkdin
                    value={
                      theme === "dark" ? "hover:text-white" : "hover:text-black"
                    }
                  />
                </motion.a>
              </li>
              <li>
                <motion.a
                  variants={gridSquareVariants}
                  href="https://x.com/Kiranra89877641"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter
                    value={
                      theme === "dark" ? "hover:text-white" : "hover:text-black"
                    }
                  />
                </motion.a>
              </li>
              <li>
                <motion.a
                  variants={gridSquareVariants}
                  href="https://www.instagram.com/_kiran_raj_4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram
                    value={
                      theme === "dark" ? "hover:text-white" : "hover:text-black"
                    }
                  />
                </motion.a>
              </li>
              <li>
                <motion.a
                  variants={gridSquareVariants}
                  href="mailto:kiranraj80555@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Mail
                    value={
                      theme === "dark" ? "hover:text-white" : "hover:text-black"
                    }
                  />
                </motion.a>
              </li>
              <li>
                <motion.a
                  variants={gridSquareVariants}
                  href="https://github.com/kiranraj20"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHub
                    value={
                      theme === "dark" ? "hover:text-white" : "hover:text-black"
                    }
                  />
                </motion.a>
              </li>
            </ul>
          </div>
          <div
            className={` relative self-center after:absolute ${
              theme === "dark" ? "after:bg-[#444]" : "after:bg-[#bbb]"
            } after:content-[''] after:w-[2px] after:h-6 after:left-1/2 after:-translate-x-1/2 after:top-[80%] `}
          >
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              onClick={scrollToTarget}
              className=" bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group mb-20 "
            >
              Latest Works
              <DownArrow />
            </motion.button>
          </div>
        </motion.div>
        <LatestWorks targetRef={targetRef} />
        <Certifications />
        <Connect />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default LandingPage;
