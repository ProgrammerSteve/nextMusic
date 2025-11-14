"use client";

import React, { ChangeEvent } from "react";
import type { Time } from "@/app/page";
import { Howl } from "howler";

interface Props {
  currTime: Time;
  time: Time;
  seconds: number;
  handleTimeBar: (e: ChangeEvent<HTMLInputElement>) => void;
  sound: Howl | null;
  duration: number | null;
}

const formatTime = (t: Time) =>
  `${t.min.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false })}:${t.sec.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false })}`;

const TimeControls = ({
  currTime,
  time,
  duration,
  seconds,
  handleTimeBar,
}: Props) => {
  const pct = duration ? (seconds / duration) * 100 : 0;

  return (
    <div className="w-[90%] md:w-auto grow-0 md:grow flex items-center gap-3">
      <span className="text-xs text-gray-500 tabular-nums min-w-[36px] text-right">
        {formatTime(currTime)}
      </span>
      <div className="relative flex-1 h-10 flex items-center">
        {/* Visual track background */}
        <div className="absolute left-0 right-0 h-1 rounded-full bg-white/10" />
        {/* Visual filled track */}
        <div
          className="absolute left-0 h-1 rounded-full bg-indigo-400"
          style={{ width: `${pct}%` }}
        />
        {/* Visual thumb */}
        <div
          className="absolute w-3 h-3 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/30 pointer-events-none"
          style={{ left: `calc(${pct}% - 6px)` }}
        />
        {/* Invisible native input on top for interaction */}
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
      <span className="text-xs text-gray-500 tabular-nums min-w-[36px]">
        {formatTime(time)}
      </span>
    </div>
  );
};

export default TimeControls;
