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
  return (
    <div className="w-[90%] md:w-auto grow-0 md:grow flex items-center gap-3">
      <span className="text-xs text-gray-500 tabular-nums min-w-[36px] text-right">
        {formatTime(currTime)}
      </span>
      <div className="relative flex-1 group">
        <input
          type="range"
          min="0"
          max={duration ? duration : 0}
          value={seconds}
          className="time-slider w-full cursor-pointer"
          onChange={handleTimeBar}
        />
      </div>
      <span className="text-xs text-gray-500 tabular-nums min-w-[36px]">
        {formatTime(time)}
      </span>
    </div>
  );
};

export default TimeControls;
