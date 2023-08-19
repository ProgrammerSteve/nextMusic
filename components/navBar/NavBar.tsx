import NavLinks from "../navLinks/NavLinks";
import SongDetails from "../songDetails/SongDetails";
import TimeControls from "../timeControls/TimeControls";
import MusicControls from "../musicControls/MusicControls";
import React, { ChangeEvent } from "react";
import type { Time } from "@/app/page";

interface Props {
  handleNavigate: () => void;
  currTime: Time;
  time: Time;
  seconds: number;
  handleTimeBar: (e: ChangeEvent<HTMLInputElement>) => void;
  sound: any;
  duration: number | null;
  isPlaying: boolean;
  playingButton: () => void;
}

const NavBar = ({
  handleNavigate,
  currTime,
  time,
  seconds,
  handleTimeBar,
  sound,
  duration,
  isPlaying,
  playingButton,
}: Props) => {
  return (
    <div className="navbar bg-gray-200 flex items-center justify-start px-4">
      <div className="flex items-center justify-start gap-2 font-sans text-center w-[60%]">
        <SongDetails />

        <TimeControls
          currTime={currTime}
          time={time}
          seconds={seconds}
          handleTimeBar={handleTimeBar}
          sound={sound}
          duration={duration}
        />
        <MusicControls isPlaying={isPlaying} playingButton={playingButton} />
      </div>
      {/* <NavLinks handleNavigate={handleNavigate} /> */}
    </div>
  );
};

export default NavBar;
