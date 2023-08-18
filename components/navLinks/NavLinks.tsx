"use client";

import { AiFillHome } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsFillPersonFill, BsArrowUp, BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdDriveFolderUpload } from "react-icons/md";
import { RxLetterCaseCapitalize } from "react-icons/rx";

interface Props {
  handleNavigate: () => void;
}

const NavLinks = ({ handleNavigate }: Props) => {
  return (
    <div className="grid place-content-center h-[150px]">
      <div onClick={handleNavigate} className="cursor-pointer">
        {/* <AiFillHome className="w-[40px] h-[40px] fill-gray-800" /> */}
        <BsFillPersonFill className="fill-gray-800 w-[40px] h-[40px]" />
      </div>
    </div>
  );
};

export default NavLinks;
