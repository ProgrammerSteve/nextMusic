import React from "react";
import SongCard from "../../containers/songCard/SongCard.jsx";
import Sidebar from "../../containers/sidebar/Sidebar.jsx";

import { songs } from "../../utils/sampleSongs/sampleSongs.js";

import { BiCog } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsFillPersonFill, BsArrowUp, BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdDriveFolderUpload } from "react-icons/md";
import { RxLetterCaseCapitalize } from "react-icons/rx";

const Home = () => {
  return (
    <div className=" h-screen flex flex-col">
      <div className="h-[250px] bg-gray-600 flex justify-between items-center px-6">
        <div className="flex items-center gap-2">
          <BsMusicNoteBeamed className="fill-white w-[40px] h-[40px]" />
          <div className="italic font-bold text-3xl text-white">
            Music Library
          </div>
        </div>

        <div className="flex gap-2">
          <div className="rounded-xl border-white border-2 border-solid p-4 flex items-center justify-center">
            <AiOutlineCalendar className="fill-white w-[30px] h-[30px]" />
            <BsArrowUp className="fill-white stroke-white stroke-[1px] w-[20px] h-[30px] scale-x-[80%]" />
          </div>
          <div className="rounded-xl border-white border-2 border-solid p-4 flex items-center justify-center">
            <AiOutlineCalendar className="fill-white w-[30px] h-[30px]" />
            <BsArrowUp className="fill-white rotate-180 stroke-white stroke-[1px] w-[20px] h-[30px] scale-x-[80%]" />
          </div>
          <div className="rounded-xl border-white border-2 border-solid p-4 flex items-center justify-center">
            <RxLetterCaseCapitalize className="fill-white stroke-white text-white w-[30px] h-[30px]" />
            <BsArrowUp className="fill-white stroke-white stroke-[1px] w-[20px] h-[30px] scale-x-[80%]" />
          </div>
          <div className="rounded-xl border-white border-2 border-solid p-4 flex items-center justify-center">
            <RxLetterCaseCapitalize className="fill-white stroke-white text-white w-[30px] h-[30px]" />
            <BsArrowUp className="fill-white rotate-180 stroke-white stroke-[1px] w-[20px] h-[30px] scale-x-[80%]" />
          </div>

          <div className="flex flex-col rounded-xl border-white border-2 border-solid p-4">
            <label className="text-white block mb-[10px]">{`Duration (min)`}</label>
            <div className="relative">
              <input
                className="dual-slider fromSlider"
                value={0}
                min={0}
                max={100}
                type={"range"}
              ></input>
              <input
                className="dual-slider toSlider"
                value={600}
                min={0}
                max={600}
                type={"range"}
              ></input>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col items-start">
            <div className="relative">
              <input
                className="rounded-2xl pl-8 placeholder-black block h-[45px] leading-[45px]"
                type={"text"}
                placeholder="Enter song title"
              ></input>
              <HiMagnifyingGlass className="block absolute h-[45px] top-0 translate-x-2" />
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="relative">
              <input
                className="rounded-2xl pl-8 placeholder-black block h-[45px] leading-[45px]"
                type={"text"}
                placeholder="Enter song author"
              ></input>
              <HiMagnifyingGlass className="block absolute h-[45px] top-0 translate-x-2" />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <MdDriveFolderUpload className="fill-white w-[40px] h-[40px]" />
          <BsFillPersonFill className="fill-white w-[40px] h-[40px]" />
          <BiCog className="fill-white w-[40px] h-[40px]" />
        </div>
      </div>
      <div className="flex grow min-h-0">
        <Sidebar />
        <div className="grow flex flex-col gap-2">
          {songs.map((song, ind) => (
            <SongCard song={song} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
