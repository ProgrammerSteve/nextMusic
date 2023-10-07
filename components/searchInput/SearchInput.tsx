"use client";

import React, { Fragment } from "react";
import { SongObject } from "@/store/music/music.types";

import { AiFillHome } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsFillPersonFill, BsArrowUp, BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdDriveFolderUpload } from "react-icons/md";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { classical_music_pieces } from "@/constants";
import { useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { bindActionCreators } from "redux";
import { selectSong } from "@/store/music/music.action";
import { songList } from "@/store/music/music.types";
import { loadSongById } from "@/store/music/music.action";
import { Howl, Howler } from "howler";

interface Props {
  placeholder: string;
  type: "name" | "composer";

  sound: Howl | null;
  closeSideBar: () => void;
}

const SearchInput = ({ placeholder, type, sound, closeSideBar }: Props) => {
  const dispatch = useDispatch();

  // {
  //   name: "Scherzo",
  //   composer: "Frédéric Chopin",
  //   imageUrl: "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  //   songUrl: pathToScherzoMp3,
  //   pdfUrl: pathToScherzoPdf,
  //   songID: '00004'
  // },

  const [query, setQuery] = useState("");

  const filteredPieces =
    query === ""
      ? songList
      : songList.filter((piece) => {
          return piece[type].toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="flex flex-col">
      <Combobox
        value={{ name: "", composer: "" }}
        onChange={(e) => dispatch(selectSong(e))}
      >
        <div className="relative">
          <Combobox.Input
            placeholder={placeholder}
            className="rounded-2xl pl-8 placeholder-black block h-[45px] leading-[45px] text-black"
            onChange={(event) => setQuery(event.target.value)}
          ></Combobox.Input>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="items-center w-full mt-1 rounded absolute z-[99]">
              {filteredPieces.map((piece) => {
                const handleClick = () => {
                  if (sound) {
                    sound.pause();
                  }
                  dispatch(loadSongById(piece.songID));
                  closeSideBar();
                };

                return (
                  <Combobox.Option
                    key={piece.name}
                    value={piece}
                    onClick={handleClick}
                    className={({ active }) =>
                      ` relative search__option ${
                        active
                          ? "text-white bg-blue-700 cursor-pointer"
                          : "text-gray-900 bg-white cursor-pointer"
                      }`
                    }
                  >
                    {type === "name"
                      ? `${piece.name} - ${piece.composer}`
                      : `${piece.composer} - ${piece.name}`}
                  </Combobox.Option>
                );
              })}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchInput;

{
  /* <input
  className="rounded-2xl pl-8 placeholder-black block h-[45px] leading-[45px]"
  type={"text"}
  placeholder={placeholder}
></input> */
}
{
  /* <HiMagnifyingGlass className="block absolute h-[45px] top-0 translate-x-2" /> */
}
