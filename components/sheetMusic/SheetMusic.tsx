"use client";

import React from "react";
// import clairDeLune from "../../public/pdfs/debussyclairdelune.pdf";

const SheetMusic = () => {
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
        src={"/pdfs/debussyclairdelune.pdf#view=fitH"}
        title="Sheet Music"
      ></iframe>
    </div>
  );
};

export default SheetMusic;
