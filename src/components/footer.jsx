import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Footer = () => {

  const theme = useContext(ThemeContext)

  return (
    <div className={`flex justify-center items-center ${theme==='dark'?'bg-[#111]':'bg-[#eee]'} `}>
      Footer
    </div>
  );
};

export default Footer;
