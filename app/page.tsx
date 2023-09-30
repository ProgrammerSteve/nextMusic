"use client";

import SideBar from "../components/sidebar/Sidebar";
import SheetMusic from "../components/sheetMusic/SheetMusic";
import React, { useEffect, useState, ChangeEvent } from "react";
import NavBar from "../components/navBar/NavBar";
import { Howl, Howler } from "howler";
import { songList } from "@/store/music/music.types";
import { useAppDispatch, useAppSelector } from "@/utils/redux.hooks";
import { selectSongObj } from "@/store/music/music.selector";

export type Time = {
  min: number;
  sec: number;
};

export default function Home() {
  const dispatch = useAppDispatch();
  const songObj = useAppSelector(selectSongObj);
  // const songUrl = path.join(__dirname, "..", songObj?.songUrl || "");
  useEffect(() => {
    console.log("songObj:", songObj);
  }, []);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Howl | null>(null);
  const [duration, setDuration] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isSidebarShown, setIsSidebarShown] = useState(false);
  const handleToggleSidebar = () => setIsSidebarShown(!isSidebarShown);
  const [currTime, setCurrTime] = useState({
    min: 0,
    sec: 0,
  });
  const [time, setTime] = useState({
    min: 0,
    sec: 0,
  });

  useEffect(() => {
    const songUrl = songObj?.songUrl || "";
    // Initialize the Howl instance
    const newSound = new Howl({
      src: [songUrl],
      html5: true,

      onplay: () => {
        setIsPlaying(true);
        setDuration(newSound.duration());
        const updateInterval = setInterval(() => {
          const seekTime = newSound.seek();
          setSeconds(Math.floor(seekTime));
          const min = Math.floor(seekTime / 60);
          const sec = Math.floor(seekTime % 60);
          setCurrTime({ min, sec });
        }, 1000);
        newSound.on("end", () => {
          setIsPlaying(false);
          clearInterval(updateInterval);
        });
        newSound.on("pause", () => {
          clearInterval(updateInterval);
        });
      },
      onpause: () => {
        setIsPlaying(false);
      },
      onend: () => {
        setIsPlaying(false);
      },
    });
    setSound(newSound);

    return () => {
      if (newSound) {
        newSound.stop();
        newSound.unload();
        setSeconds(0);
        setDuration(0);
        setCurrTime({ min: 0, sec: 0 });
      }
    };
  }, [songObj]);

  const playingButton = () => {
    if (sound) {
      if (isPlaying) {
        sound.pause();
      } else {
        sound.play();
      }
    }
  };

  const handleTimeBar = (e: ChangeEvent<HTMLInputElement>) => {
    if (sound) {
      const seekTime = (Number(e.target.value) / 100) * sound.duration();
      sound.seek(seekTime);
    }
  };

  const handleNavigate = async () => {
    sound?.stop();
    sound?.unload();
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
        handleToggleSidebar={handleToggleSidebar}
      />

      <div className="flex main-body overflow-clip">
        <SideBar
          isSidebarShown={isSidebarShown}
          handleToggleSidebar={handleToggleSidebar}
        />
        <SheetMusic />
      </div>
    </div>
  );
}
