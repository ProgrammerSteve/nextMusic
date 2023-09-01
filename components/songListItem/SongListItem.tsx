import { RootState } from "@/store/store";
import React from "react";

import { loadSongById } from "@/store/music/music.action";
//loadSongById
import { SongObject } from "@/store/music/music.types";
import { useAppDispatch } from "@/utils/redux.hooks";

interface Props {
  songObj: SongObject;
}
const SongListItem = ({ songObj }: Props) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(loadSongById(songObj.songID));
  };
  return (
    <div onClick={handleClick} className="flex py-2 rounded-lg ">
      <div>
        <img className="rounded-[10%]" src="https://picsum.photos/80/50" />
      </div>
      <div className="flex flex-col justify-center ml-2">
        <h3 className="text-2xl text-[#564d4d] font-bold">
          {songObj ? songObj.name : "null"}
        </h3>
        <p className=" text-[#959292]">{songObj ? songObj.composer : "null"}</p>
      </div>
    </div>
  );
};

export default SongListItem;
