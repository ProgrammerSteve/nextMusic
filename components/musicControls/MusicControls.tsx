"use client";

import React from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { BsArrowClockwise } from "react-icons/bs";

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
    <div className="flex items-center gap-1">
      <button
        onClick={handleBackBtn}
        className="p-1 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Previous track"
      >
        <BiSkipPrevious className="text-2xl sm:text-3xl text-gray-300 hover:text-white transition-colors" />
      </button>

      <button
        className="p-1 rounded-full hover:bg-white/10 transition-colors"
        onClick={playingButton}
        disabled={!isLoaded}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {!isLoaded ? (
          <BsArrowClockwise className="animate-spin text-2xl sm:text-3xl text-gray-500" />
        ) : isPlaying ? (
          <AiFillPauseCircle className="text-3xl sm:text-4xl text-white drop-shadow-lg" />
        ) : (
          <AiFillPlayCircle className="text-3xl sm:text-4xl text-white drop-shadow-lg" />
        )}
      </button>

      <button
        onClick={handleFwdBtn}
        className="p-1 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Next track"
      >
        <BiSkipNext className="text-2xl sm:text-3xl text-gray-300 hover:text-white transition-colors" />
      </button>
    </div>
  );
};

export default MusicControls;
