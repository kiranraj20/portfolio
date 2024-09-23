import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import Logo from "../assets/icons/logo";
import Linkdin from "../assets/icons/linkdin";
import Twitter from "../assets/icons/twitter";
import Instagram from "../assets/icons/instagram";
import Mail from "../assets/icons/mail";
import GitHub from "../assets/icons/ginHub";

const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
    <footer
      className={`flex flex-col justify-center items-center ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-100"
      } `}
    >
      <p className="pt-3">Kiran Raj © 2024</p>
      <div className="p-4">
        <a href="/">
          <Logo />
          <span>To Top</span>
        </a>
      </div>
      <ul
        className={`${
          theme === "dark" ? "text-[#b0b2c3]" : "text-[#1e1e1e]"
        } flex gap-6 justify-center items-center pb-5 `}
      >
        <li>
          <a
            href="https://www.linkedin.com/in/kiran-raj-18708720a"
            target="_blank"
            rel="noreferrer"
          >
            <Linkdin
              value={theme === "dark" ? "hover:text-white" : "hover:text-black"}
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
              value={theme === "dark" ? "hover:text-white" : "hover:text-black"}
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
              value={theme === "dark" ? "hover:text-white" : "hover:text-black"}
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
              value={theme === "dark" ? "hover:text-white" : "hover:text-black"}
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
              value={theme === "dark" ? "hover:text-white" : "hover:text-black"}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
