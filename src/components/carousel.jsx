import React, { useContext, useState } from "react";
import Left from "../assets/icons/left.jsx";
import Right from "../assets/icons/right.jsx";
import ThemeContext from "./ThemeContext.jsx";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useContext(ThemeContext)

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-screen flex justify-center items-center py-5">
      <div
        className="w-[80%] h-[50vh] overflow-hidden relative max-w-[750px] "
        style={{
          filter: `drop-shadow(0 0px 10px ${theme==='dark'?'#eee':'#111'})`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={` w-full h-full absolute inset-0 transition-opacity duration-1000 p-3 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full"
        >
          <Left />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full"
        >
          <Right />
        </button>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
