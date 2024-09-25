import React from "react";
import Logo from "../assets/icons/logo.jsx";
import Sun from "../assets/icons/sun.jsx";
import Moon from "../assets/icons/moon.jsx";
import Phone from "../assets/icons/phone.jsx";
import Whatsapp from "../assets/icons/whatsapp.jsx";
import { motion } from "framer-motion";

const Header = ({ setTheme, theme, gridSquareVariants }) => {
  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
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
            whileHover={{
              scale: [1, 1],
              rotate: [0, 180],
            }}
            transition={{
              duration: 1,
              ease: "easeIn",
              repeat: 0,
              repeatDelay: 0,
            }}
            className=" cursor-pointer  duration-1000"
            onClick={() => handleTheme(theme)}
          >
            <Sun />
          </motion.div>
        ) : (
          <motion.div
            variants={gridSquareVariants}
            className=" cursor-pointer  duration-1000"
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
  );
};

export default Header;
