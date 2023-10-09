"use client";

import React, { Fragment } from "react";
import { useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { songList } from "@/store/music/music.types";
import { loadSongById } from "@/store/music/music.action";
import { Howl } from "howler";

interface Props {
  placeholder: string;
  type: "name" | "composer";
  sound: Howl | null;
  closeSideBar: () => void;
}

const SearchInput = ({ placeholder, type, sound, closeSideBar }: Props) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const filteredPieces =
    query === ""
      ? songList
      : songList.filter((piece) => {
          return piece[type].toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="flex flex-col">
      <Combobox value={{ name: "", composer: "" }}>
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
