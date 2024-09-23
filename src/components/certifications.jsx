import React, { useContext } from "react";
import Carousel from "./carousel";
import NullClassI from "../assets/images/certifications/NullClassI.jpg";
import INFILA from "../assets/images/certifications/INFILA.jpg";
import NullClassT from "../assets/images/certifications/NullClassT.jpg";
import problemSolving from "../assets/images/certifications/problemSolving.jpg";
import verzeoCS from "../assets/images/certifications/verzeoCS.jpg";
import verzeoML from "../assets/images/certifications/verzeoML.jpg";
import ThemeContext from "./ThemeContext";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: "Certified Web Developer",
      image: NullClassI,
    },
    {
      id: 1,
      name: "Certified Web Developer",
      image: INFILA,
    },
    {
      id: 1,
      name: "Certified Web Developer",
      image: NullClassT,
    },
    {
      id: 1,
      name: "Certified Web Developer",
      image: problemSolving,
    },
    {
      id: 1,
      name: "Certified Web Developer",
      image: verzeoCS,
    },
    {
      id: 1,
      name: "Certified Web Developer",
      image: verzeoML,
    },
  ];

  const images = certifications.map((cert) => cert.image);
  const theme = useContext(ThemeContext);

  return (
    <div
      className={` w-screen ${
        theme === "dark" ? "bg-[#111]" : "bg-[#eee]"
      } m-0 p-0`}
    >
      <div className="flex justify-center items-center">
        <h1 className="text-[40px] font-bold px-4 py-2 w-max mx-auto border-b-2 z-10 relative border-[#18739b]">
          Certifications
        </h1>
      </div>
      <Carousel images={images} />
    </div>
  );
};

export default Certifications;
