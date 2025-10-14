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
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 h-[40px] text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-transparent transition-all"
            onChange={(event) => setQuery(event.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="w-full mt-1.5 rounded-xl absolute z-[99] overflow-hidden bg-gray-800 border border-white/10 shadow-xl shadow-black/40">
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
                      `cursor-pointer select-none py-2.5 px-4 text-sm transition-colors ${
                        active
                          ? "text-white bg-indigo-600"
                          : "text-gray-300"
                      }`
                    }
                  >
                    {type === "name"
                      ? `${piece.name} — ${piece.composer}`
                      : `${piece.composer} — ${piece.name}`}
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
