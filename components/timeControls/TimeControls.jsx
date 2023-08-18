"use client";

import React from "react";

const TimeControls = ({
  currTime,
  time,
  duration,
  seconds,
  handleTimeBar,
  sound,
}) => {
  return (
    <div className="grow">
      <div className="my-0 mx-auto w-[95%] flex justify-between text-[#828282] text-sm">
        <p>
          {currTime.min.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
          :
          {currTime.sec.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </p>
        <p>
          {time.min.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
          :
          {time.sec.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </p>
      </div>

      <input
        type="range"
        min="0"
        max={duration / 1000}
        default="0"
        value={seconds}
        className="w-[95%] bg-[#27ae60]"
        onChange={handleTimeBar}
      />
    </div>
  );
};

export default TimeControls;
