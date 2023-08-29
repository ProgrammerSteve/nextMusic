"use client";

import React from "react";

import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customazing the icons

const color = "#50505d";

interface Props {
  isPlaying: boolean;
  playingButton: () => void;
}

const MusicControls = ({ isPlaying, playingButton }: Props) => {
  return (
    <div>
      <button className="bg-none border-0 items-center justify-center">
        <BiSkipPrevious className="text-[2em] sm:text-[3em] md:text-[3em] text-[#50505d]" />
      </button>
      {!isPlaying ? (
        <button
          className="bg-none border-0 items-center justify-center"
          onClick={playingButton}
        >
          <AiFillPlayCircle className="text-[2em] sm:text-[3em] md:text-[3em] text-[#50505d]" />
        </button>
      ) : (
        <button
          className="bg-none border-0 items-center justify-center"
          onClick={playingButton}
        >
          <AiFillPauseCircle className="text-[2em] sm:text-[3em] md:text-[3em] text-[#50505d]" />
        </button>
      )}
      <button className="bg-none border-0 items-center justify-center">
        <BiSkipNext className="text-[2em] sm:text-[3em] md:text-[3em] text-[#50505d]" />
      </button>
    </div>
  );
};

export default MusicControls;
