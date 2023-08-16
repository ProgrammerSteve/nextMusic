import React from "react";

const SongDetails = () => {
  return (
    <div className="flex">
      <div>
        <img className="rounded-[10%]" src="https://picsum.photos/100/100" />
      </div>
      <div className="flex flex-col justify-center ml-2">
        <h3 className="text-3xl font-bold">Clair De Lune</h3>
        <p className=" text-[#4f4f4f]">Claude Debussy</p>
      </div>
    </div>
  );
};

export default SongDetails;
