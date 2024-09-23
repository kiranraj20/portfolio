import React, { useState } from "react";
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

const LandingPage = () => {
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`${theme === "dark" ? "text-white" : "text-black"} `}>
        <div className="flex flex-col justify-between h-screen w-screen font-[nunito] relative">
          {theme === "dark" ? (
            <ParticlesDark id="particles" className='md:block hidden' />
          ) : (
            <ParticlesLight id="particles" className='md:block hidden' />
          )}
          <header className="flex items-center justify-between px-4 pt-4 max-w-screen-xl mx-auto w-full">
            <div className="logo w-12 h-12">
              <Logo />
            </div>
            <div className="flex gap-4">
              {theme === "dark" ? (
                <div
                  className=" cursor-pointer "
                  onClick={() => handleTheme(theme)}
                >
                  <Sun />
                </div>
              ) : (
                <div
                  className=" cursor-pointer "
                  onClick={() => handleTheme(theme)}
                >
                  <Moon />
                </div>
              )}
              <a href="tel:+917032412114" target="_blank" rel="noreferrer">
                <Phone />
              </a>
              <a
                href="https://wa.me/+917032412114?text=Hi, How are you?"
                target="_blank"
                rel="noreferrer"
              >
                <Whatsapp />
              </a>
            </div>
          </header>
          <div className="-mt-1 flex relative">
            <div className="w-full max-w-screen-xl mx-auto px-4">
              <LogoColored />
              <div className="relative ml-4 md:ml-12">
                <h1 className=" text-4xl sm:text-5xl md:text-[64px] font-[spartan] mr-16 pointer-events-none">
                  Suram Kiran raj
                </h1>
                <p className="font-[Merriweather] italic my-4 md:my-8 pointer-events-none">
                  MERN STACK DEVELOPER
                </p>
                <button className=" bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group ">
                  About Me
                  <RightArrow />
                </button>
              </div>
            </div>
            <ul
              className={`ml-auto space-y-6  ${
                theme === "dark" ? "text-[#b0b2c3]" : "text-[#1e1e1e]"
              } absolute right-8`}
            >
              <li>
                <a
                  href="https://www.linkedin.com/in/kiran-raj-18708720a"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkdin
                    value={
                      theme === "dark" ? "hover:text-white" : "hover:text-black"
                    }
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/Kiranra89877641"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter
                    value={
                      theme === "dark" ? "hover:text-white" : "hover:text-black"
                    }
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/_kiran_raj_4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram
                    value={
                      theme === "dark" ? "hover:text-white" : "hover:text-black"
                    }
                  />
                </a>
              </li>
              <li>
                <a
                  href="mailto:kiranraj80555@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Mail
                    value={
                      theme === "dark" ? "hover:text-white" : "hover:text-black"
                    }
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kiranraj20"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHub
                    value={
                      theme === "dark" ? "hover:text-white" : "hover:text-black"
                    }
                  />
                </a>
              </li>
            </ul>
          </div>
          <div
            className={` relative self-center after:absolute ${
              theme === "dark" ? "after:bg-[#444]" : "after:bg-[#bbb]"
            } after:content-[''] after:w-[2px] after:h-6 after:left-1/2 after:-translate-x-1/2 after:top-[80%] `}
          >
            <button className=" bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group mb-20 ">
              Latest Works
              <DownArrow />
            </button>
          </div>
        </div>
        <LatestWorks />
        <Certifications />
        <Connect />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default LandingPage;
