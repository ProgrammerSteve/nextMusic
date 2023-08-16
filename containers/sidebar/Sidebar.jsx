"use client";

import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsFillPersonFill, BsArrowUp, BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdDriveFolderUpload } from "react-icons/md";
import { RxLetterCaseCapitalize } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div className="w-[400px] bg-gray-800 text-white flex flex-col justify-start p-4 overflow-y-scroll scrollbar-hide">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start">
          <div className="relative">
            <input
              className="rounded-2xl pl-8 placeholder-black block h-[45px] leading-[45px]"
              type={"text"}
              placeholder="Enter song title"
            ></input>
            <HiMagnifyingGlass className="block absolute h-[45px] top-0 translate-x-2" />
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="relative">
            <input
              className="rounded-2xl pl-8 placeholder-black block h-[45px] leading-[45px]"
              type={"text"}
              placeholder="Enter song author"
            ></input>
            <HiMagnifyingGlass className="block absolute h-[45px] top-0 translate-x-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
