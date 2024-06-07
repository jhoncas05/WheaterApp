import React, { useState } from "react";
import { IoNotificationsSharp, IoLocationSharp } from "react-icons/io5";
import { HiViewGrid } from "react-icons/hi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuSun } from "react-icons/lu";
import { PiMoonStarsLight } from "react-icons/pi";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <header className="flex justify-between items-center p-4">
        <div className="flex justify-center items-center gap-10 ">
          <a
            href=""
            className="bg-[#1E1E1E] rounded-full p-2 text-white text-2xl"
          >
            <HiViewGrid />
          </a>
          <a
            href=""
            className="bg-[#1E1E1E] rounded-full p-2 text-white text-2xl "
          >
            <IoNotificationsSharp />
          </a>
          <a href="" className="text-2xl text-white">
            <IoLocationSharp />
          </a>
        </div>
        <div className="relative">
          <FaMagnifyingGlass className="absolute text-white text-xl left-3 top-1/2 transform -translate-y-1/2" />{" "}
          <input
            placeholder="Search city"
            className="bg-[#1E1E1E] rounded-full p-1 w-[400px] pl-10 text-white"
            type="text"
          />
        </div>
        <button
          onClick={handleToggle}
          className={`p-3 rounded-full flex items-center justify-between w-20 h-8 bg-[#1E1E1E] relative`}
        >
          <LuSun 
            className={`text-xl ${
              !darkMode ? "text-black" : "text-white"
            } absolute left-1 top-1/2 transform -translate-y-1/2 z-10`}
          />
          <div
            className={`h-10 w-10 rounded-full bg-[#9dccf2] absolute top-1/2 transition-transform duration-200 ease-in-out ${
              darkMode ? "right-[-6px]" : "left-[-7px]"
            } transform -translate-y-1/2`}
          />
          <PiMoonStarsLight 
            className={`text-xl ${
              darkMode ? "text-black" : "text-white"
            } absolute right-1 top-1/2 transform -translate-y-1/2 z-10`}
          />
        </button>
        <div>
          <button></button>
          <button></button>
          <div className="h-10 w-10 rounded-full mt-[-20px] bg-cover bg-center" style={{backgroundImage: "url('https://media.istockphoto.com/id/1386479313/es/foto/feliz-mujer-de-negocios-afroamericana-millennial-posando-aislada-en-blanco.jpg?s=612x612&w=0&k=20&c=JP0NBxlxG2-bdpTRPlTXBbX13zkNj0mR5g1KoOdbtO4=')"}}> </div>
        </div>
      </header>
    </>
  );
};
