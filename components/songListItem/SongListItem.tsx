import { RootState } from "@/store/store";
import React from "react";

import { loadSongById } from "@/store/music/music.action";
//loadSongById
import { SongObject } from "@/store/music/music.types";
import { useAppDispatch, useAppSelector } from "@/utils/redux.hooks";
import { selectSongObjID } from "@/store/music/music.selector";
//selectSongObj

interface Props {
  songObj: SongObject;
}
const SongListItem = ({ songObj }: Props) => {
  const selectedSongID = useAppSelector(selectSongObjID);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(loadSongById(songObj.songID));
  };
  return (
    <div
      onClick={handleClick}
      className={`flex mt-3 w-full py-2 px-2 rounded-lg cursor-pointer  ${
        selectedSongID === songObj.songID ? "bg-gray-600" : "bg-gray-900"
      }`}
    >
      <div>
        <img className="rounded-[10%]" src="https://picsum.photos/80/50" />
      </div>
      <div className="flex flex-col justify-center ml-2">
        <h3
          className={`text-xl   select-none        ${
            selectedSongID === songObj.songID
              ? "text-[#b9a2a2]"
              : "text-[#564d4d]"
          }         font-bold`}
        >
          {songObj ? songObj.name : "null"}
        </h3>
        <p className="select-none text-[#959292]">
          {songObj ? songObj.composer : "null"}
        </p>
      </div>
    </div>
  );
};

export default SongListItem;
