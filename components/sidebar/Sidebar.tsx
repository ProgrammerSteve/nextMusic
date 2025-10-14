"use client";

import React from "react";
import SearchInput from "@/components/searchInput/SearchInput";
import { Howl } from "howler";
import { songList } from "@/store/music/music.types";
import { AiOutlineClose } from "react-icons/ai";
import SongListItem from "@/components/songListItem/SongListItem";

interface Props {
  isSidebarShown: boolean;
  handleToggleSidebar: () => void;
  sound: Howl | null;
}

const SidebarContent = ({
  sound,
  closeSideBar,
}: {
  sound: Howl | null;
  closeSideBar: () => void;
}) => (
  <>
    <div className="px-4 pt-5 pb-2">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
        Library
      </h2>
      <div className="flex flex-col gap-3">
        <SearchInput
          placeholder="Search by title..."
          type="name"
          closeSideBar={closeSideBar}
          sound={sound}
        />
        <SearchInput
          placeholder="Search by composer..."
          type="composer"
          closeSideBar={closeSideBar}
          sound={sound}
        />
      </div>
    </div>
    <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-4 my-3" />
    <div className="px-3 pb-4 flex flex-col gap-1">
      {songList.map((songObj) => (
        <SongListItem
          sound={sound}
          songObj={songObj}
          key={songObj.songID}
          closeSideBar={closeSideBar}
        />
      ))}
    </div>
  </>
);

const Sidebar = ({ isSidebarShown, handleToggleSidebar, sound }: Props) => {
  const closeSideBar = () => {
    setTimeout(() => {
      isSidebarShown && handleToggleSidebar();
    }, 250);
  };

  return (
    <>
      {/* Desktop sidebar */}
      <div className="sidebar h-full bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white hidden md:flex flex-col overflow-y-auto scrollbar-hide border-r border-gray-800/50">
        <SidebarContent sound={sound} closeSideBar={closeSideBar} />
      </div>

      {/* Mobile sidebar */}
      {isSidebarShown && (
        <>
          <div className="sidebar h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white flex md:hidden flex-col overflow-y-auto scrollbar-hide absolute top-0 z-50 shadow-2xl shadow-black/50">
            <div className="flex items-center justify-between px-4 pt-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Library
              </h2>
              <button
                onClick={handleToggleSidebar}
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Close sidebar"
              >
                <AiOutlineClose className="text-xl text-gray-400" />
              </button>
            </div>
            <div className="px-4 pt-3 pb-2">
              <div className="flex flex-col gap-3">
                <SearchInput
                  placeholder="Search by title..."
                  type="name"
                  closeSideBar={closeSideBar}
                  sound={sound}
                />
                <SearchInput
                  placeholder="Search by composer..."
                  type="composer"
                  closeSideBar={closeSideBar}
                  sound={sound}
                />
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-4 my-3" />
            <div className="px-3 pb-4 flex flex-col gap-1">
              {songList.map((songObj) => (
                <SongListItem
                  sound={sound}
                  songObj={songObj}
                  key={songObj.songID}
                  closeSideBar={closeSideBar}
                />
              ))}
            </div>
          </div>
          <div
            onClick={handleToggleSidebar}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[49] md:hidden"
          />
        </>
      )}
    </>
  );
};

export default Sidebar;
