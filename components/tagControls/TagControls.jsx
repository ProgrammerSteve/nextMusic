import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const TagControls = ({ title, type, songTags, songTagOptions, handlers }) => {
  const [selected, setSelected] = useState(songTagOptions[type][0]);

  const handleForm = (e) => {
    console.log("form handled...");

    e.preventDefault();
    let isInTags = songTags[type].includes(selected);

    if (isInTags) {
      return;
    }
    handlers.addToTags(type, selected);
  };

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const handleRemoveTag = (tagName) => {
    handlers.removeFromTags(type, tagName);
  };

  return (
    <div className="py-2">
      <p className="font-semibold text-2xl">{title}:</p>
      <p>Tags:</p>
      <div className="flex flex-wrap gap-2">
        {songTags[type].map((tag, ind) => (
          <div
            key={`${type}-tag-${tag}`}
            className="bg-gray-300 text-black p-1 rounded-2xl flex items-center justify-center"
          >
            <div>{tag}</div>

            <div
              className="pl-1 cursor-pointer"
              onClick={handleRemoveTag.bind(this, tag)}
            >
              <AiOutlineClose />
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleForm} className="flex justify-evenly pt-2">
        <select
          className="w-[78%] bg-black text-white"
          onChange={handleSelect}
          value={selected}
        >
          {songTagOptions[type].map((option, ind) => {
            let isPicked = songTags[type].includes(option);
            return isPicked ? (
              <option key={`${type}-option-disabled-${ind}`} disabled>
                {option}
              </option>
            ) : (
              <option key={`${type}-option-${ind}`}>{option}</option>
            );
          })}
        </select>
        <button type="submit" className="w-[18%] rounded-2xl bg-gray-700">
          Add
        </button>
      </form>
    </div>
  );
};

export default TagControls;
