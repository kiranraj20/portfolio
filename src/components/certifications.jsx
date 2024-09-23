import React from "react";
import Carousel from "./carousel";
import NullClassI from '../assets/images/certifications/NullClassI.jpg'
import INFILA from '../assets/images/certifications/INFILA.jpg'
import NullClassT from '../assets/images/certifications/NullClassT.jpg'
import problemSolving from '../assets/images/certifications/problemSolving.jpg'
import verzeoCS from '../assets/images/certifications/verzeoCS.jpg'
import verzeoML from '../assets/images/certifications/verzeoML.jpg'

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

  const images = certifications.map(cert => cert.image);

  return (
    <div className=" w-screen bg-[#111] m-0 p-0">
      <h1 className="text-3xl text-center my-5">Certifications</h1>
      <Carousel images={images} />
    </div>
  );
};

export default Certifications;
