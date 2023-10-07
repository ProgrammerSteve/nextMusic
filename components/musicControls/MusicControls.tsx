"use client";

import React from "react";

import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { BsArrowClockwise } from "react-icons/bs";

const color = "#50505d";

interface Props {
  isPlaying: boolean;
  isLoaded: boolean;
  playingButton: () => void;
  handleFwdBtn: () => void;
  handleBackBtn: () => void;
}

const MusicControls = ({
  isPlaying,
  playingButton,
  isLoaded,
  handleFwdBtn,
  handleBackBtn,
}: Props) => {
  return (
    <div>
      <button
        onClick={handleBackBtn}
        className="bg-none border-0 items-center justify-center"
      >
        <BiSkipPrevious className="text-[2em] sm:text-[3em] md:text-[3em] text-[#50505d]" />
      </button>
      {!isPlaying ? (
        <button
          className="bg-none border-0 items-center justify-center "
          onClick={playingButton}
          disabled={!isLoaded}
        >
          {!isLoaded ? (
            <BsArrowClockwise className="animate-spin text-[2em] sm:text-[3em] md:text-[3em] text-[#50505d]" />
          ) : (
            <AiFillPlayCircle className="text-[2em] sm:text-[3em] md:text-[3em] text-[#50505d]" />
          )}
        </button>
      ) : (
        <button
          className="bg-none border-0 items-center justify-center"
          onClick={playingButton}
        >
          <AiFillPauseCircle className="text-[2em] sm:text-[3em] md:text-[3em] text-[#50505d]" />
        </button>
      )}
      <button
        onClick={handleFwdBtn}
        className="bg-none border-0 items-center justify-center"
      >
        <BiSkipNext className="text-[2em] sm:text-[3em] md:text-[3em] text-[#50505d]" />
      </button>
    </div>
  );
};

export default MusicControls;
