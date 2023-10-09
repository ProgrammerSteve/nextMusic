"use client";

import React from "react";
import SearchInput from "@/components/searchInput/SearchInput";
import { Howl } from "howler";
import { songList } from "@/store/music/music.types";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  isSidebarShown: boolean;
  handleToggleSidebar: () => void;
  sound: Howl | null;
}

import SongListItem from "@/components/songListItem/SongListItem";
const Sidebar = ({ isSidebarShown, handleToggleSidebar, sound }: Props) => {
  const closeSideBar = () => {
    setTimeout(() => {
      isSidebarShown && handleToggleSidebar();
    }, 250);
  };
  return (
    <>
      <div className="sidebar h-screen md:h-full bg-gray-800 text-white hidden md:flex flex-col justify-start items-center p-4 overflow-y-scroll scrollbar-hide absolute md:relative top-0  z-50">
        <div className="flex flex-col gap-4 pb-4">
          <SearchInput
            placeholder={"Enter song title"}
            type={"name"}
            closeSideBar={closeSideBar}
            sound={sound}
          />
          <SearchInput
            placeholder={"Enter song author"}
            type={"composer"}
            closeSideBar={closeSideBar}
            sound={sound}
          />
        </div>
        {songList.map((songObj) => (
          <SongListItem
            sound={sound}
            songObj={songObj}
            key={songObj.songID}
            closeSideBar={closeSideBar}
          />
        ))}
      </div>

      {isSidebarShown && (
        <>
          <div className="sidebar h-screen md:h-full bg-gray-800 text-white flex md:hidden flex-col justify-start items-center p-4 overflow-y-scroll scrollbar-hide absolute md:relative top-0 z-50">
            <div className="flex flex-col gap-4  pb-4">
              <SearchInput
                placeholder={"Enter song title"}
                type={"name"}
                closeSideBar={closeSideBar}
                sound={sound}
              />
              <SearchInput
                placeholder={"Enter song author"}
                type={"composer"}
                closeSideBar={closeSideBar}
                sound={sound}
              />
            </div>

            {songList.map((songObj) => (
              <SongListItem
                sound={sound}
                songObj={songObj}
                key={songObj.songID}
                closeSideBar={closeSideBar}
              />
            ))}
          </div>
          <div
            onClick={handleToggleSidebar}
            className="w-screen h-screen bg-[rgba(0,0,0,0.8)] absolute z-[49] top-0 left-0 right-0  flex justify-end items-start md:hidden "
          >
            <AiOutlineClose
              onClick={handleToggleSidebar}
              className="text-[2em] sm:text-[3em] md:text-[4em] mt-2 mr-2 text-[#dedee2] cursor-pointer select-none"
            />
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
