"use client";
// #view=fitH  is for fit Horizaontal
import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
// import clairDeLune from "../../public/pdfs/debussyclairdelune.pdf";
import { useAppSelector } from "@/utils/redux.hooks";
import { selectSongObj } from "@/store/music/music.selector";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const SheetMusic = () => {
  const songObj = useAppSelector(selectSongObj);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    const fetchPdf = async () => {
      const fetchedPdfUrl = `${songObj.pdfUrl}`;
      setPdfUrl(fetchedPdfUrl);
    };

    fetchPdf();
  }, []);

  return (
    <div className="h-[100%] w-full md:w-auto grow-0 md:grow bg-gray-900 overflow-clip">
      {/* <object
        className="w-[100%] h-[100%]"
        type="application/pdf"
        data={"/pdfs/debussyclairdelune.pdf"}
      ></object> */}
      {/* <iframe
        loading="lazy"
        className="w-[100%] h-[100%] bg-gray-900"
        src={`${songObj.pdfUrl}`}
        title="Sheet Music"
      ></iframe> */}

      <Document className="h-full" file={`${songObj.pdfUrl}`}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default SheetMusic;
