import React from "react";
import { loadSongById } from "@/store/music/music.action";
import { Howl } from "howler";
import { SongObject } from "@/store/music/music.types";
import { useAppDispatch, useAppSelector } from "@/utils/redux.hooks";
import { selectSongObjID } from "@/store/music/music.selector";

interface Props {
  songObj: SongObject;
  closeSideBar: () => void;
  sound: Howl | null;
}

const SongListItem = ({ songObj, closeSideBar, sound }: Props) => {
  const selectedSongID = useAppSelector(selectSongObjID);
  const dispatch = useAppDispatch();
  const isActive = selectedSongID === songObj.songID;

  const handleClick = () => {
    if (sound) {
      sound.pause();
    }
    dispatch(loadSongById(songObj.songID));
    closeSideBar();
  };

  return (
    <div
      onClick={handleClick}
      className={`group flex items-center w-full py-2.5 px-3 rounded-xl cursor-pointer transition-all duration-200 ${
        isActive
          ? "bg-white/10 shadow-lg shadow-black/20"
          : "hover:bg-white/5"
      }`}
    >
      <img
        className={`rounded-lg h-[48px] w-[48px] object-cover flex-shrink-0 transition-all duration-200 ${
          isActive ? "ring-2 ring-indigo-500/50" : "ring-1 ring-white/10"
        }`}
        src={songObj.imageUrl ?? "https://picsum.photos/80/50"}
        alt={songObj.name}
      />
      <div className="flex flex-col justify-center ml-3 min-w-0">
        <h3
          className={`text-sm font-medium select-none truncate transition-colors ${
            isActive ? "text-white" : "text-gray-300 group-hover:text-white"
          }`}
        >
          {songObj.name ?? "Unknown"}
        </h3>
        <p className="text-xs select-none text-gray-500 truncate mt-0.5">
          {songObj.composer ?? "Unknown"}
        </p>
      </div>
      {isActive && (
        <div className="ml-auto flex-shrink-0 flex gap-0.5 items-end h-4">
          <span className="w-0.5 h-2 bg-indigo-400 rounded-full animate-pulse" />
          <span className="w-0.5 h-3 bg-indigo-400 rounded-full animate-pulse [animation-delay:150ms]" />
          <span className="w-0.5 h-1.5 bg-indigo-400 rounded-full animate-pulse [animation-delay:300ms]" />
        </div>
      )}
    </div>
  );
};

export default SongListItem;
