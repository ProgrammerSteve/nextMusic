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
        <img
          className="rounded-[10%] w-[40px] sm:w-[75px] md:w-[100px] h-[40px] sm:h-[75px] md:h-[100px]"
          src="https://picsum.photos/100/100"
        />
      </div>
      <div className="flex flex-col justify-center ml-2">
        <h3 className="text-base sm:text-xl md:text-3xl text-[#564d4d] font-bold">
          {music.piece ? music.piece.name : ''}
        </h3>
        <p className="text-sm sm:text-base text-[#959292]">{music.piece ? music.piece.composer : ''}</p>
      </div>
    </div>
  );
};

export default SongDetails;
