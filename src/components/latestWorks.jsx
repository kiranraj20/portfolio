import React, { useContext, useRef } from "react";
import data from "./data.jsx";
import Tooltip from "../assets/icons/tooltip.jsx";
import { useIsVisible } from "./lazyload.jsx";
import ThemeContext from "./ThemeContext.jsx";

const LatestWorks = () => {
  console.log(data);

  const refs = useRef(data.map(() => React.createRef()));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const visibilityStatuses = refs.current.map((ref) => useIsVisible(ref));
  const theme = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-[#111]" : "bg-[#eee]"
      } w-screen-xl px-4 relative mb-0`}
    >
      <div
        className={`text-[40px] ${
          theme === "dark" ? "bg-[#111]" : "bg-[#eee]"
        } font-bold px-4 py-2 w-max mx-auto border-b-2 z-10 relative border-[#18739b]`}
      >
        Latest Works
      </div>
      {(() => {
        const elements = [];
        for (let i = 0; i < data.length; i += 2) {
          const item1 = data[i];
          const item2 = data[i + 1];
          elements.push(
            <div key={i} className="">
              <div
                className={`md:flex justify-between items-center py-16 transition-opacity ease-in duration-1000 ${
                  visibilityStatuses[i] ? "opacity-100" : "opacity-0"
                }`}
                ref={refs.current[i]}
              >
                <div className="md:w-1/2 md:mx-5 flex md:justify-start justify-center items-center relative">
                  <a
                    href={item1.link}
                    className="relative max-w-[400px] min-w-[250px] group hover:scale-110 ease-in-out duration-200 z-10"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span
                      className=" group-hover:-top-14 ease-jump duration-200 flex px-4 py-2 rounded-md w-max items-center gap-1 absolute top-0 left-1/2 -translate-x-1/2 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                      style={{
                        "--color": item1.color,
                        backgroundColor: item1.color,
                      }}
                    >
                      {item1.title}
                      <Tooltip />
                    </span>
                    <img
                      src={item1.image}
                      alt="Not found"
                      className="relative"
                      style={{
                        filter: `drop-shadow(0 0px 35px ${theme === 'dark'? item1.color : '#111'})`,
                      }}
                    />
                  </a>
                  <div
                    className="absolute h-[2px] left-1/3 right-0 z-0 hidden md:block "
                    style={{ backgroundColor: item1.color }}
                  ></div>
                </div>
                <div
                  className=" hidden md:block absolute h-[15px] w-[15px] bg-[#111] left-1/2 rounded-full border-2 z-10 -translate-x-1/2 cursor-pointer hover:scale-125 ease-in-out duration-200"
                  style={{ borderColor: item1.color }}
                ></div>
                <div className="md:w-1/2 flex flex-col justify-center items-start md:px-10">
                  <h1
                    className="text-[32px] font-bold pt-3 md:pt-0"
                    style={{ color: item1.color }}
                  >
                    {item1.title}
                  </h1>
                  <h3
                    className="text-xl md:py-5 py-3"
                    style={{ color: item1.color }}
                  >
                    ({item1.name})
                  </h3>
                  <span className="pb-2">{item1.desc}</span>
                  <div className="flex flex-wrap">
                    {item1.tech.map((lang) => (
                      <div
                        key={lang}
                        className="border border-white rounded-full px-3 py-1 m-1 "
                      >
                        #{lang}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {item2 && (
                <div
                  className={`md:flex justify-between items-center py-16 transition-opacity ease-in duration-1000 ${
                    visibilityStatuses[i] ? "opacity-100" : "opacity-0"
                  }`}
                  ref={refs.current[i + 1]}
                >
                  <div className="md:w-1/2 flex-col justify-center items-start px-10 md:flex hidden">
                    <h1
                      className="text-[32px] font-bold"
                      style={{ color: item2.color }}
                    >
                      {item2.title}
                    </h1>
                    <h3 className="text-xl py-5" style={{ color: item2.color }}>
                      ({item2.name})
                    </h3>
                    <span className="pb-2">{item2.desc}</span>
                    <div className="flex flex-wrap">
                      {item2.tech.map((lang) => (
                        <div
                          key={lang}
                          className="border border-white rounded-full px-3 py-1 m-1 "
                        >
                          #{lang}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-1/2 md:mx-5 flex md:justify-end justify-center items-center relative">
                    <a
                      href={item2.link}
                      className="relative max-w-[400px] min-w-[250px] group hover:scale-110 ease-in-out duration-200 z-10"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span
                        className=" group-hover:-top-14 ease-jump duration-200 flex px-4 py-2 rounded-md w-max items-center gap-1 absolute top-1 left-1/2 -translate-x-1/2 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                        style={{
                          "--color": item2.color,
                          backgroundColor: item2.color,
                        }}
                      >
                        {item2.title}
                        <Tooltip />
                      </span>
                      <img
                        src={item2.image}
                        alt="Not found"
                        className="relative w-full"
                        style={{
                          filter: `drop-shadow(0 0px 35px ${theme === 'dark'? item2.color : '#111'})`,
                        }}
                      />
                    </a>
                    <div
                      className="absolute h-[2px] bg-white left-0 right-1/3 z-0 hidden md:block "
                      style={{ backgroundColor: item2.color }}
                    ></div>
                  </div>
                  <div className="flex flex-col justify-center items-center px-10 md:hidden">
                    <h1
                      className="text-[32px] font-bold pt-3"
                      style={{ color: item2.color }}
                    >
                      {item2.title}
                    </h1>
                    <h3 className="text-xl py-3" style={{ color: item2.color }}>
                      ({item2.name})
                    </h3>
                    <span className="pb-2">{item2.desc}</span>
                    <div className="flex flex-wrap">
                      {item2.tech.map((lang) => (
                        <div
                          key={lang}
                          className="border border-white rounded-full px-3 py-1 m-1 "
                        >
                          #{lang}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="absolute h-[15px] w-[15px] bg-[#111] right-1/2 hidden md:block  rounded-full border-2 z-10 translate-x-1/2 cursor-pointer hover:scale-125 ease-in-out duration-200"
                    style={{ borderColor: item2.color }}
                  ></div>
                </div>
              )}
            </div>
          );
        }
        return elements;
      })()}
      <div className="w-[2px] bg-[#1f4c86] absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-0 hidden md:block "></div>
    </div>
  );
};

export default LatestWorks;
