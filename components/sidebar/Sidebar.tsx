"use client";

import React, { useState } from "react";
import SearchInput from "@/components/searchInput/SearchInput";
import { useAppDispatch, useAppSelector } from "@/utils/redux.hooks";
import { songList } from "@/store/music/music.types";
import { AiFillHome } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsFillPersonFill, BsArrowUp, BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdDriveFolderUpload } from "react-icons/md";
import { RxLetterCaseCapitalize } from "react-icons/rx";

interface Props {
  isSidebarShown: boolean;
}

import SongListItem from "@/components/songListItem/SongListItem";
const Sidebar = ({ isSidebarShown }: Props) => {
  return (
    <>
      <div className="sidebar h-screen md:h-full bg-gray-800 text-white hidden md:flex flex-col justify-start items-center p-4 overflow-y-scroll scrollbar-hide absolute md:relative top-0">
        <div className="flex flex-col gap-4">
          <SearchInput placeholder={"Enter song title"} type={"name"} />
          <SearchInput placeholder={"Enter song author"} type={"composer"} />
        </div>
        {songList.map((songObj) => (
          <SongListItem songObj={songObj} key={songObj.songID} />
        ))}
      </div>

      {isSidebarShown && (
        <div className="sidebar h-screen md:h-full bg-gray-800 text-white flex md:hidden flex-col justify-start items-center p-4 overflow-y-scroll scrollbar-hide absolute md:relative top-0">
          <div className="flex flex-col gap-4">
            <SearchInput placeholder={"Enter song title"} type={"name"} />
            <SearchInput placeholder={"Enter song author"} type={"composer"} />
          </div>
          {songList.map((songObj) => (
            <SongListItem songObj={songObj} key={songObj.songID} />
          ))}
        </div>
      )}
    </>
  );
};

export default Sidebar;
