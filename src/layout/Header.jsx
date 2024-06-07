import React from "react";
import { IoNotificationsSharp, IoLocationSharp } from "react-icons/io5";
import { HiViewGrid } from "react-icons/hi";
export const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center p-4">
        <div className="flex justify-center items-center gap-10 ">
          <a
            href=""
            className="bg-[#1E1E1E] rounded-full p-2 text-white text-3xl"
          >
            <HiViewGrid />
          </a>
          <a
            href=""
            className="bg-[#1E1E1E] rounded-full p-2 text-white text-3xl "
          >
            <IoNotificationsSharp />
          </a>
          <a href="" className="text-3xl text-white">
            <IoLocationSharp />
          </a>
        </div>
        <div>
          <input className="bg-[#1E1E1E] rounded-full p-2 w-[300px]" type="text"  placeholder="Search city" />
        </div>
        <div>
          <button></button>

          <button></button>
        </div>
      </header>
    </>
  );
};
