"use client";

import React, { Fragment } from "react";

import { AiFillHome } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsFillPersonFill, BsArrowUp, BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdDriveFolderUpload } from "react-icons/md";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { classical_music_pieces } from "@/constants";
import { useState } from "react";
import {Combobox, Transition} from '@headlessui/react'

interface Props {
  placeholder: string;
}

const SearchInput = ({ placeholder }: Props) => {


  const [query, setQuery] = useState('')

  const filteredPieces =
    query === ''
    ? classical_music_pieces
    : classical_music_pieces.filter((piece) => {
      return piece.toLowerCase().includes(query.toLowerCase())
    })


  return (
    <div className="flex flex-col items-start">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Input
            placeholder={placeholder}
            className="rounded-2xl pl-8 placeholder-black block h-[45px] leading-[45px] text-black"
            onChange={(event) => setQuery(event.target.value)}
          >
          </Combobox.Input>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {filteredPieces.map((piece) => (
                <Combobox.Option key={piece} value={piece} className={({active}) => `relative search__option ${active ? 'text-white bg-blue-700' : 'text-gray-900 bg-white'}`} >
                  {piece}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchInput;

{/* <input
  className="rounded-2xl pl-8 placeholder-black block h-[45px] leading-[45px]"
  type={"text"}
  placeholder={placeholder}
></input> */}
{/* <HiMagnifyingGlass className="block absolute h-[45px] top-0 translate-x-2" /> */}