import React from "react";
import MongoDB from "../assets/icons/mongoDB";
import Express from "../assets/icons/express";
import ReactIcon from "../assets/icons/reactIcon";
import JavaScript from "../assets/icons/javaScript";

const MernStack = () => {
  return (
    <div className="flex">
      <div className="flex justify-center items-center gap-8 p-9">
        <div onClick={(e) => e.stopPropagation()} className="flex justify-center items-center flex-col cursor-pointer group relative z-10">
          <span className="group-hover:-top-14 group-hover:opacity-100 opacity-0 text-white ease-jump duration-200 flex px-4 py-2 rounded-full w-max items-center gap-1 absolute top-0 left-1/2 -translate-x-1/2 after:content-[''] after:w-3 after:h-3 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-[6px] z-0 bg-[#47a248]">
            mongoDB
          </span>
          <MongoDB />
          <h1 className="text-[24px] text-[#47a248]">M</h1>
        </div>
        <div onClick={(e) => e.stopPropagation()} className="flex justify-center items-center flex-col cursor-pointer group relative z-10">
          <span className="group-hover:-top-14 group-hover:opacity-100 opacity-0 text-black ease-jump duration-200 flex px-4 py-2 rounded-full w-max items-center gap-1 absolute top-0 left-1/2 -translate-x-1/2 after:content-[''] after:w-3 after:h-3 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-[6px] z-0 bg-[#ffffff]">
            Express.JS
          </span>
          <Express />
          <h1 className="text-[24px] text-[#ffffff]">E</h1>
        </div>
        <div onClick={(e) => e.stopPropagation()} className="flex justify-center items-center flex-col cursor-pointer group relative z-10">
          <span className="group-hover:-top-14 group-hover:opacity-100 opacity-0 text-black ease-jump duration-200 flex px-4 py-2 rounded-full w-max items-center gap-1 absolute top-0 left-1/2 -translate-x-1/2 after:content-[''] after:w-3 after:h-3 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-[6px] z-0 bg-[#61dafb]">
            React.JS
          </span>
          <ReactIcon />
          <h1 className="text-[24px] text-[#61dafb]">R</h1>
        </div>
        <div onClick={(e) => e.stopPropagation()} className="flex justify-center items-center flex-col cursor-pointer group relative z-10">
          <span className="group-hover:-top-14 group-hover:opacity-100 opacity-0 text-black ease-jump duration-200 flex px-4 py-2 rounded-full w-max items-center gap-1 absolute top-0 left-1/2 -translate-x-1/2 after:content-[''] after:w-3 after:h-3 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-[6px] z-0 bg-[#8cc84b]">
            Node.JS
          </span>
          <JavaScript />
          <h1 className="text-[24px] text-[#8cc84b]">N</h1>
        </div>
      </div>
    </div>
  );
};

export default MernStack;
