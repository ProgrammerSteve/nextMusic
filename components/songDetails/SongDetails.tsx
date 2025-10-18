import React from "react";
import { useAppSelector } from "@/utils/redux.hooks";
import { selectSongObj } from "@/store/music/music.selector";

const SongDetails = () => {
  const songObj = useAppSelector(selectSongObj);

  return (
    <div className="flex items-center py-2 gap-3">
      <img
        className="rounded-lg w-[40px] sm:w-[60px] md:w-[72px] h-[40px] sm:h-[60px] md:h-[72px] object-cover ring-1 ring-white/10 shadow-lg shadow-black/30"
        src={songObj.imageUrl ?? "https://picsum.photos/100/100"}
        alt={songObj?.name ?? "Album art"}
      />
      <div className="flex flex-col justify-center min-w-0">
        <h3 className="text-sm sm:text-base md:text-lg text-white font-semibold truncate">
          {songObj?.name ?? ""}
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 truncate">
          {songObj?.composer ?? ""}
        </p>
      </div>
    </div>
  );
};

export default SongDetails;
