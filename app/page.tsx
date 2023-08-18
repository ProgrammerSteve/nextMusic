"use client";

import Image from "next/image";
import SongPlayer from "../containers/songPlayer/SongPlayer";
import SideBar from "../containers/sidebar/Sidebar";
import SheetMusic from "../components/sheetMusic/SheetMusic";
import NavLinks from "../components/navLinks/NavLinks";

export default function Home() {
  return (
    <div className=" h-screen">
      <NavBar />

      <div className="flex main-body">
        <SideBar />
        <SheetMusic />
      </div>
    </div>
  );
}

const NavBar = () => {
  const handleNavigate = () => {
    console.log("");
  };

  return (
    <div className="h-[150px] bg-gray-200 flex items-center justify-between px-4">
      <SongPlayer />
      <NavLinks handleNavigate={handleNavigate} />
    </div>
  );
};
