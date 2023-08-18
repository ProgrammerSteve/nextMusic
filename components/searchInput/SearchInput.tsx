"use client";

import React from "react";

import { AiFillHome } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsFillPersonFill, BsArrowUp, BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdDriveFolderUpload } from "react-icons/md";
import { RxLetterCaseCapitalize } from "react-icons/rx";

interface Props {
  placeholder: string;
}

const SearchInput = ({ placeholder }: Props) => {
  return (
    <div className="flex flex-col items-start">
      <div className="relative">
        <input
          className="rounded-2xl pl-8 placeholder-black block h-[45px] leading-[45px]"
          type={"text"}
          placeholder={placeholder}
        ></input>
        <HiMagnifyingGlass className="block absolute h-[45px] top-0 translate-x-2" />
      </div>
    </div>
  );
};

export default SearchInput;
