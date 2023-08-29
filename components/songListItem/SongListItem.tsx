import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

const SongListItem = () => {


  const music = useSelector((state: RootState) => {
    return state.music
  })

  return (
    <div className="flex py-2 rounded-lg ">
      <div>
        <img className="rounded-[10%]" src="https://picsum.photos/80/50" />
      </div>
      <div className="flex flex-col justify-center ml-2">
        <h3 className="text-2xl text-[#564d4d] font-bold">{music.piece ? music.piece.name : 'null'}</h3>
        <p className=" text-[#959292]">{music.piece ? music.piece.composer : 'null'}</p>
      </div>
    </div>
  );
};

export default SongListItem;
