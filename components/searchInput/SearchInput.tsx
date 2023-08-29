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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface Props {
  placeholder: string;
  type: "name" | "composer";
}

const SearchInput = ({ placeholder, type }: Props) => {

  // const dispatch = useDispatch()
  // const state = useSelector((state: RootState) => {
  //   return state.music;
  // })


  const [query, setQuery] = useState('')

  const filteredPieces =
    query === ''
    ? classical_music_pieces
    : classical_music_pieces.filter((piece) => {
      return piece[type].toLowerCase().includes(query.toLowerCase())
    })


  return (
    <div className="flex flex-col">
      <Combobox>
        <div className="relative">
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
            <Combobox.Options
              className='items-center w-[210px] mt-1 rounded'
             >
              {filteredPieces.map((piece) => (
                <Combobox.Option key={piece.name} value={piece.name} className={({active}) => `relative search__option ${active ? 'text-white bg-blue-700' : 'text-gray-900 bg-white'}`} >
                  { type === 'name' ? `${piece.name} - ${piece.composer}` : `${piece.composer} - ${piece.name}` }
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