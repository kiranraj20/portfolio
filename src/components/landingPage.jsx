import React, { useRef, useState } from "react";
import "./landingPage.css";
import LatestWorks from "./latestWorks.jsx";
import Connect from "./connect.jsx";
import DownArrow from "../assets/icons/downArrow.jsx";
import Certifications from "./certifications.jsx";
import ThemeContext from "./ThemeContext.jsx";
import ParticlesDark from "./particlesDark.js";
import ParticlesLight from "./particlesLight.js";
import Footer from "./footer.jsx";
import AboutMe from "./aboutMe.jsx";
import { motion } from "framer-motion";
import Content from "./content.jsx";
import Header from "./header.jsx";

const LandingPage = () => {
  const [theme, setTheme] = useState("dark");
  const [aboutMe, setAboutMe] = useState(false);
  const targetRef = useRef(null);

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
        staggerChildren: 0.2,
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
          theme === "dark" ? "text-white duration-1000" : "text-black duration-1000"
        } font-[nunito] `}
      >
        <AboutMe setAboutMe={setAboutMe} aboutMe={aboutMe} />
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-between h-screen w-screen  relative"
        >
          {theme === "dark" ? (
            <ParticlesDark id="particles" className="md:block hidden  duration-1000" />
          ) : (
            <ParticlesLight id="particles" className="md:block hidden  duration-1000" />
          )}
          <Header
            setTheme={setTheme}
            theme={theme}
            gridSquareVariants={gridSquareVariants}
          />
          <Content
            setAboutMe={setAboutMe}
            theme={theme}
            gridSquareVariants={gridSquareVariants}
          />
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
