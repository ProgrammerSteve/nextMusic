import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
const SongCard = ({ song }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const handleToggle = () => {
    setToggleDropdown(!toggleDropdown);
  };
  return (
    <div className=" rounded-2xl border-solid border-black border-2 shadow-xl bg-white flex justify-between items-center">
      <Link to="/song" className="h-full">
        <div
          className={`flex ${
            toggleDropdown ? `flex-col items-center px-4` : `flex-row`
          } p-2`}
        >
          <div>
            <img
              className="rounded-[10%]"
              src="https://picsum.photos/100/100"
            />
          </div>
          <div className="flex flex-col justify-center ml-2">
            <h3 className="text-3xl font-bold">{song.title}</h3>
            <p className=" text-[#4f4f4f]">{song.author}</p>
          </div>
        </div>
      </Link>
      <div
        className={`grow h-full py-2 px-4 border-l-[1px] border-r-[1px] border-solid border-black ${
          toggleDropdown ? `grid justify-evenly` : `hidden`
        }  grid-cols-5 gap-2 `}
      >
        {Object.keys(song.tags).map((category) => {
          return (
            <div className="min-h-[60px] ">
              <p className="font-semibold">{category}</p>
              {song.tags[category].map((tag) => {
                return <p className="text-gray-600">{tag}</p>;
              })}
            </div>
          );
        })}
      </div>
      <div onClick={handleToggle} className="px-4">
        <AiOutlineDown
          className={`w-[30px] h-[30px] cursor-pointer ${
            toggleDropdown ? `rotate-180` : `rotate-0`
          }`}
        />
      </div>
    </div>
  );
};

export default SongCard;
