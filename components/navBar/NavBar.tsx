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
    <div className="navbar bg-gray-200 flex items-center justify-start px-4">
      <div className="flex flex-col md:flex-row items-center justify-start gap-2 font-sans text-center w-[100%]">
        <div className="h-[20px] w-full flex md:hidden justify-end items-center ">
          <AiOutlineMenu
            onClick={handleToggleSidebar}
            className="text-[2em] sm:text-[3em] md:text-[3em] text-[#50505d]"
          />
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
