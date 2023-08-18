"use client";

import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import debussy from "../../public/music/Claire_De_Luna.mp3";
import SongDetails from "../../components/songDetails/SongDetails";
import TimeControls from "../../components/timeControls/TimeControls";
import MusicControls from "../../components/musicControls/MusicControls";

import { AiFillHome } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsFillPersonFill, BsArrowUp, BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdDriveFolderUpload } from "react-icons/md";
import { RxLetterCaseCapitalize } from "react-icons/rx";

{
  /* <MdDriveFolderUpload className="fill-white w-[40px] h-[40px]" />
<BsFillPersonFill className="fill-white w-[40px] h-[40px]" /> */
}
const SongPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop, pause, duration, sound }] = useSound(debussy);
  const [seconds, setSeconds] = useState(0);

  const [currTime, setCurrTime] = useState({
    min: 0,
    sec: 0,
  });
  const [time, setTime] = useState({
    min: 0,
    sec: 0,
  });

  useEffect(() => {
    const sec = duration / 1000;
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec - min * 60);
    const time = {
      min: min,
      sec: secRemain,
    };
    setTime(time);
  }, [sound]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };

  const handleTimeBar = (e) => {
    if (sound) sound.seek([Number(e.target.value)]);
  };

  const handleNavigate = async () => {
    await stop();
    console.log("");
  };

  return (
    <>
      <div className="flex items-center justify-start gap-2 font-sans text-center w-[50%]">
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

      <div className="grid place-content-center h-[150px]">
        <div onClick={handleNavigate} className="cursor-pointer">
          {/* <AiFillHome className="w-[40px] h-[40px] fill-gray-800" /> */}
          <BsFillPersonFill className="fill-gray-800 w-[40px] h-[40px]" />
        </div>
      </div>
    </>
  );
};

export default SongPlayer;
