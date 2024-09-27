import React, { useContext } from "react";
import ContactMe from "../assets/icons/contactMe";
import ThemeContext from "./ThemeContext";
import { useForm, ValidationError } from "@formspree/react";

const Connect = () => {
  const theme = useContext(ThemeContext);

  const bgClass = theme === "dark" ? "bg-gray-800" : "bg-gray-100";
  const textClass = theme === "dark" ? "text-white" : "text-gray-900";
  const borderClass = theme === "dark" ? "border-gray-600" : "border-gray-300";
  const focusClass =
    theme === "dark"
      ? "dark:focus:ring-blue-800 dark:focus:border-blue-800"
      : "focus:ring-blue-500 focus:border-blue-500";

  const [state, handleSubmit] = useForm("xpwavqyl");
  if (state.succeeded) {
    window.location.href = "/";
  }

  return (
    <div className={`w-full py-5 ${bgClass}`}>
      <div className="flex justify-center items-center">
        <h1
          className={`text-[40px] font-bold px-4 py-2 w-max mx-auto border-b-2 z-10 relative border-[#18739b] ${textClass}`}
        >
          Lets Connect
        </h1>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center overflow-hidden">
        <ContactMe className="w-full" />
        <form className="w-full max-w-xl px-7" onSubmit={handleSubmit}>
          <label
            htmlFor="name"
            className={`block my-2 text-sm font-medium ${textClass}`}
          >
            Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className={`w-4 h-4 ${textClass}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              className={`bg-gray-50 border-2 outline-none ${borderClass} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 ${bgClass} dark:placeholder-gray-400 ${focusClass}`}
              placeholder="Enter your Name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <label
            htmlFor="email"
            className={`block my-2 text-sm font-medium ${textClass}`}
          >
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className={`w-4 h-4 ${textClass}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              className={`bg-gray-50 border-2 outline-none ${borderClass} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 ${bgClass} dark:placeholder-gray-400 ${focusClass}`}
              placeholder="Enter your Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <label
            htmlFor="message"
            className={`block my-2 text-sm font-medium ${textClass}`}
          >
            Message
          </label>
          <div className="relative">
            <textarea
              type="textarea"
              id="message"
              name="message"
              rows={8}
              className={`bg-gray-50 border-2 outline-none ${borderClass} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${bgClass} dark:placeholder-gray-400 ${focusClass} no-scrollbar`}
              placeholder="Leave a message..."
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            className={`w-full ${textClass} bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-2 ${focusClass}`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Connect;
