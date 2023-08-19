"use client";

import SideBar from "../components/sidebar/Sidebar";
import SheetMusic from "../components/sheetMusic/SheetMusic";
import React, { useEffect, useState, ChangeEvent } from "react";
import debussy from "../public/music/Claire_De_Luna.mp3";
import useSound from "use-sound";
import NavBar from "../components/navBar/NavBar";

export type Time = {
  min: number;
  sec: number;
};

export default function Home() {
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
    const sec = duration ? duration / 1000 : 0;
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

  const handleTimeBar = (e: ChangeEvent<HTMLInputElement>) => {
    if (sound) sound.seek([Number(e.target.value)]);
  };

  const handleNavigate = async () => {
    await stop();
    console.log("");
  };

  return (
    <div className=" h-screen">
      <NavBar
        handleNavigate={handleNavigate}
        currTime={currTime}
        time={time}
        seconds={seconds}
        handleTimeBar={handleTimeBar}
        sound={sound}
        duration={duration}
        isPlaying={isPlaying}
        playingButton={playingButton}
      />

      <div className="flex main-body">
        <SideBar />
        <SheetMusic />
      </div>
    </div>
  );
}
