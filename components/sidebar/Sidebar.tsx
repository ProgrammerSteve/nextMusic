"use client";

import React, { useState } from "react";
import SearchInput from "@/components/searchInput/SearchInput";
import { useAppDispatch, useAppSelector } from "@/utils/redux.hooks";
import { songList } from "@/store/music/music.types";
import { AiFillHome } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsFillPersonFill, BsArrowUp, BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineCalendar, AiOutlineClose } from "react-icons/ai";
import { MdDriveFolderUpload } from "react-icons/md";
import { RxLetterCaseCapitalize } from "react-icons/rx";

interface Props {
  isSidebarShown: boolean;
  handleToggleSidebar: () => void;
}

import SongListItem from "@/components/songListItem/SongListItem";
const Sidebar = ({ isSidebarShown, handleToggleSidebar }: Props) => {
  return (
    <>
      <div className="sidebar h-screen md:h-full bg-gray-800 text-white hidden md:flex flex-col justify-start items-center p-4 overflow-y-scroll scrollbar-hide absolute md:relative top-0  z-50">
        <div className="flex flex-col gap-4">
          <SearchInput placeholder={"Enter song title"} type={"name"} />
          <SearchInput placeholder={"Enter song author"} type={"composer"} />
        </div>
        {songList.map((songObj) => (
          <SongListItem songObj={songObj} key={songObj.songID} />
        ))}
      </div>

      {isSidebarShown && (
        <>
          <div className="sidebar h-screen md:h-full bg-gray-800 text-white flex md:hidden flex-col justify-start items-center p-4 overflow-y-scroll scrollbar-hide absolute md:relative top-0 z-50">
            <div className="flex flex-col gap-4">
              <SearchInput placeholder={"Enter song title"} type={"name"} />
              <SearchInput
                placeholder={"Enter song author"}
                type={"composer"}
              />
            </div>

            {songList.map((songObj) => (
              <SongListItem songObj={songObj} key={songObj.songID} />
            ))}
          </div>
          <div
            onClick={handleToggleSidebar}
            className="w-screen h-screen bg-[rgba(0,0,0,0.8)] absolute z-[49] top-0 left-0 right-0  flex justify-end items-start md:hidden "
          >
            <AiOutlineClose
              onClick={handleToggleSidebar}
              className="text-[4em] sm:text-[5em] md:text-[5em] mt-2 mr-2 text-[#dedee2] cursor-pointer select-none"
            />
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
