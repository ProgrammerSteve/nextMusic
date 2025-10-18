import SongDetails from "../songDetails/SongDetails";
import TimeControls from "../timeControls/TimeControls";
import MusicControls from "../musicControls/MusicControls";
import React, { ChangeEvent } from "react";
import type { Time } from "@/app/page";
import { AiOutlineMenu } from "react-icons/ai";
import { Howl } from "howler";

interface Props {
  handleNavigate: () => void;
  handleToggleSidebar: () => void;
  currTime: Time;
  time: Time;
  seconds: number;
  handleTimeBar: (e: ChangeEvent<HTMLInputElement>) => void;
  sound: Howl | null;
  duration: number | null;
  isPlaying: boolean;
  isLoaded: boolean;
  playingButton: () => void;
  handleFwdBtn: () => void;
  handleBackBtn: () => void;
}

const NavBar = ({
  currTime,
  time,
  seconds,
  handleTimeBar,
  sound,
  duration,
  isPlaying,
  isLoaded,
  playingButton,
  handleToggleSidebar,
  handleFwdBtn,
  handleBackBtn,
}: Props) => {
  return (
    <div className="navbar bg-gray-950 border-b border-white/5 flex items-center px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-center justify-start gap-2 w-full">
        {/* Mobile menu button */}
        <div className="h-[20px] w-full flex md:hidden justify-end items-center">
          <button
            onClick={handleToggleSidebar}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle sidebar"
          >
            <AiOutlineMenu className="text-xl text-gray-400" />
          </button>
        </div>

        <div className="flex items-center justify-between w-[90%] md:w-auto">
          <SongDetails />
          <MusicControls
            isPlaying={isPlaying}
            isLoaded={isLoaded}
            playingButton={playingButton}
            handleFwdBtn={handleFwdBtn}
            handleBackBtn={handleBackBtn}
          />
        </div>

        <TimeControls
          currTime={currTime}
          time={time}
          seconds={seconds}
          handleTimeBar={handleTimeBar}
          sound={sound}
          duration={duration}
        />
      </div>
    </div>
  );
};

export default NavBar;
