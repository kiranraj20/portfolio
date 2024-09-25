import React from "react";
import LogoColored from "../assets/icons/logoColored.jsx";
import RightArrow from "../assets/icons/rightArrow.jsx";
import Linkdin from "../assets/icons/linkdin.jsx";
import Twitter from "../assets/icons/twitter.jsx";
import Instagram from "../assets/icons/instagram.jsx";
import Mail from "../assets/icons/mail.jsx";
import GitHub from "../assets/icons/ginHub.jsx";
import { motion } from "framer-motion";

const Content = ({ gridSquareVariants, theme, setAboutMe }) => {
  return (
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
          theme === "dark" ? "text-[#b0b2c3] duration-1000" : "text-[#1e1e1e] duration-1000"
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
              value={theme === "dark" ? "hover:text-white" : "hover:text-black"}
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
              value={theme === "dark" ? "hover:text-white" : "hover:text-black"}
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
              value={theme === "dark" ? "hover:text-white" : "hover:text-black"}
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
              value={theme === "dark" ? "hover:text-white" : "hover:text-black"}
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
              value={theme === "dark" ? "hover:text-white" : "hover:text-black"}
            />
          </motion.a>
        </li>
      </ul>
    </div>
  );
};

export default Content;
