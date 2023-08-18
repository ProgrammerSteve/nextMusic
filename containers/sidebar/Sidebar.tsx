"use client";

import React, { useState } from "react";
import SearchInput from "@/components/searchInput/SearchInput";
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
