import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

const SongDetails = () => {

  const music = useSelector((state: RootState) => {
    return state.music
  })

  return (
    <div className="flex py-2 rounded-lg ">
      <div>
        <img className="rounded-[10%]" src="https://picsum.photos/100/100" />
      </div>
      <div className="flex flex-col justify-center ml-2">
        <h3 className="text-3xl text-[#564d4d] font-bold">{music.piece ? music.piece.name : ''}</h3>
        <p className=" text-[#959292]">{music.piece ? music.piece.composer : ''}</p>
      </div>
    </div>
  );
};

export default SongDetails;
