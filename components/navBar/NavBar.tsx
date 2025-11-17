import SongDetails from "../songDetails/SongDetails";
import TimeControls from "../timeControls/TimeControls";
import MusicControls from "../musicControls/MusicControls";
import React, { ChangeEvent } from "react";
import type { Time } from "@/app/page";
import { AiOutlineMenu } from "react-icons/ai";
import { BiChevronDown, BiChevronUp, BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
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
  isNavCollapsed: boolean;
  toggleNavCollapsed: () => void;
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
  isNavCollapsed,
  toggleNavCollapsed,
}: Props) => {
  const pct = duration ? (seconds / duration) * 100 : 0;

  return (
    <>
      {/* ── Desktop navbar (always visible on md+) ── */}
      <div className="navbar bg-gray-950 border-b border-white/5 hidden md:flex items-center px-6">
        <div className="flex items-center justify-start gap-2 w-full">
          <SongDetails />
          <MusicControls
            isPlaying={isPlaying}
            isLoaded={isLoaded}
            playingButton={playingButton}
            handleFwdBtn={handleFwdBtn}
            handleBackBtn={handleBackBtn}
          />
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

      {/* ── Mobile collapsed (only when collapsed, hidden on md+) ── */}
      {isNavCollapsed && (
        <div className="bg-gray-950 border-b border-white/5 flex flex-col md:hidden">
          <div className="px-4 pt-3 pb-1 flex items-center gap-2">
            <button onClick={handleBackBtn} className="shrink-0 p-0.5" aria-label="Previous track">
              <BiSkipPrevious className="text-2xl text-gray-300" />
            </button>
            <button onClick={playingButton} disabled={!isLoaded} className="shrink-0" aria-label={isPlaying ? "Pause" : "Play"}>
              {isPlaying ? (
                <AiFillPauseCircle className="text-3xl text-white" />
              ) : (
                <AiFillPlayCircle className="text-3xl text-white" />
              )}
            </button>
            <button onClick={handleFwdBtn} className="shrink-0 p-0.5" aria-label="Next track">
              <BiSkipNext className="text-2xl text-gray-300" />
            </button>

            <div className="flex-1 relative h-8 flex items-center">
              <div className="absolute left-0 right-0 h-1 rounded-full bg-white/10" />
              <div className="absolute left-0 h-1 rounded-full bg-indigo-400" style={{ width: `${pct}%` }} />
              <div
                className="absolute w-2.5 h-2.5 rounded-full bg-indigo-400 pointer-events-none"
                style={{ left: `calc(${pct}% - 5px)` }}
              />
              <input
                type="range"
                min="0"
                max={duration ? duration : 0}
                value={seconds}
                className="absolute inset-0 w-full opacity-0 cursor-pointer"
                style={{ height: "100%" }}
                onChange={handleTimeBar}
                aria-label="Seek"
              />
            </div>

            <button
              onClick={handleToggleSidebar}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors shrink-0"
              aria-label="Toggle sidebar"
            >
              <AiOutlineMenu className="text-xl text-gray-400" />
            </button>
          </div>

          <button
            onClick={toggleNavCollapsed}
            className="w-full flex justify-center pb-1 hover:bg-white/5 transition-colors"
            aria-label="Expand controls"
          >
            <BiChevronDown className="text-lg text-gray-500" />
          </button>
        </div>
      )}

      {/* ── Mobile expanded (only when not collapsed, hidden on md+) ── */}
      {!isNavCollapsed && (
        <div className="navbar bg-gray-950 border-b border-white/5 flex flex-col px-4 md:hidden">
          <div className="flex flex-col items-center justify-start gap-2 w-full flex-1">
            <div className="flex items-center justify-between w-[90%] mt-2">
              <SongDetails />
              <div className="flex items-center">
                <MusicControls
                  isPlaying={isPlaying}
                  isLoaded={isLoaded}
                  playingButton={playingButton}
                  handleFwdBtn={handleFwdBtn}
                  handleBackBtn={handleBackBtn}
                />
                <button
                  onClick={handleToggleSidebar}
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors ml-1"
                  aria-label="Toggle sidebar"
                >
                  <AiOutlineMenu className="text-xl text-gray-400" />
                </button>
              </div>
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

          <button
            onClick={toggleNavCollapsed}
            className="w-full flex justify-center pb-1 hover:bg-white/5 transition-colors rounded-t"
            aria-label="Collapse navbar"
          >
            <BiChevronUp className="text-lg text-gray-500" />
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
