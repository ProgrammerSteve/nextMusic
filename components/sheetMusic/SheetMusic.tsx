"use client";
// #view=fitH  is for fit Horizaontal
import React from "react";
// import clairDeLune from "../../public/pdfs/debussyclairdelune.pdf";
import { useAppSelector } from "@/utils/redux.hooks";
import { selectSongObj } from "@/store/music/music.selector";
const SheetMusic = () => {
  const songObj = useAppSelector(selectSongObj);
  return (
    <div className="h-[100%] w-full md:w-auto grow-0 md:grow bg-gray-900">
      {/* <object
        className="w-[100%] h-[100%]"
        type="application/pdf"
        data={"/pdfs/debussyclairdelune.pdf"}
      ></object> */}
      <iframe
        loading="lazy"
        className="w-[100%] h-[100%] bg-gray-900"
        src={`${songObj.pdfUrl}`}
        title="Sheet Music"
      ></iframe>
    </div>
  );
};

export default SheetMusic;
