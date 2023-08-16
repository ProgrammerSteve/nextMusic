"use client";

import React from "react";
import clairDeLune from "../../public/pdfs/debussyclairdelune.pdf";

const SheetMusic = () => {
  return (
    <div className="h-[100%] grow bg-gray-800">
      <object
        className="w-[100%] h-[100%]"
        type="application/pdf"
        data={clairDeLune}
      ></object>
    </div>
  );
};

export default SheetMusic;
