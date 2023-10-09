"use client";

import { BsFillPersonFill } from "react-icons/bs";

interface Props {
  handleNavigate: () => void;
}

const NavLinks = ({ handleNavigate }: Props) => {
  return (
    <div className="grid place-content-center h-[150px]">
      <div onClick={handleNavigate} className="cursor-pointer">
        <BsFillPersonFill className="fill-gray-800 w-[40px] h-[40px]" />
      </div>
    </div>
  );
};

export default NavLinks;
