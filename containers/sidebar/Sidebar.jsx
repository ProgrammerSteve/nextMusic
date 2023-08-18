"use client";

import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsFillPersonFill, BsArrowUp, BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdDriveFolderUpload } from "react-icons/md";
import { RxLetterCaseCapitalize } from "react-icons/rx";

import SongListItem from "@/components/songListItem/SongListItem";
const Sidebar = () => {
  return (
    <div className="w-[400px] bg-gray-800 text-white flex flex-col justify-start items-center p-4 overflow-y-scroll scrollbar-hide">
      <div className="flex flex-col gap-4">
        <SearchInput placeholder={"Enter song title"} />
        <SearchInput placeholder={"Enter song author"} />
      </div>
      <SongListItem />
    </div>
  );
};

export default Sidebar;

const SearchInput = ({ placeholder }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="relative">
        <input
          className="rounded-2xl pl-8 placeholder-black block h-[45px] leading-[45px]"
          type={"text"}
          placeholder={placeholder}
        ></input>
        <HiMagnifyingGlass className="block absolute h-[45px] top-0 translate-x-2" />
      </div>
    </div>
  );
};
