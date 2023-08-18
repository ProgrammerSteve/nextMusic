import React from "react";

import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customazing the icons

const color = "#50505d";

const MusicControls = ({ isPlaying, playingButton }) => {
  return (
    <div>
      <button className="bg-none border-0 items-center justify-center">
        <IconContext.Provider value={{ size: "3em", color: color }}>
          <BiSkipPrevious />
        </IconContext.Provider>
      </button>
      {!isPlaying ? (
        <button
          className="bg-none border-0 items-center justify-center"
          onClick={playingButton}
        >
          <IconContext.Provider value={{ size: "3em", color: color }}>
            <AiFillPlayCircle />
          </IconContext.Provider>
        </button>
      ) : (
        <button
          className="bg-none border-0 items-center justify-center"
          onClick={playingButton}
        >
          <IconContext.Provider value={{ size: "3em", color: color }}>
            <AiFillPauseCircle />
          </IconContext.Provider>
        </button>
      )}
      <button className="bg-none border-0 items-center justify-center">
        <IconContext.Provider value={{ size: "3em", color: color }}>
          <BiSkipNext />
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default MusicControls;
