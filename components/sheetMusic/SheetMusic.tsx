"use client";

import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useAppSelector } from "@/utils/redux.hooks";
import { selectSongObj } from "@/store/music/music.selector";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const SheetMusic = () => {
  const songObj = useAppSelector(selectSongObj);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [pageScale, setPageScale] = useState(1);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    setPageNumber(1);
    setPageScale(1);
  }, [songObj]);

  const onDocumentLoadSuccess = (document: any) => {
    if (!document) return;
    setNumPages(document.numPages);
  };

  function handleZoomIn() {
    if (pageScale < 3) {
      setPageScale(pageScale + 0.2);
    }
  }

  function handleZoomOut() {
    if (pageScale > 0.3) {
      setPageScale(pageScale - 0.2);
    }
  }

  const goToPrevPage = () => {
    let newPageNumber = pageNumber - 1 <= 1 ? 1 : pageNumber - 1;
    setPageNumber(newPageNumber);
  };

  const goToNextPage = () => {
    if (!numPages) return;
    let newPageNumber = pageNumber + 1 >= numPages ? numPages : pageNumber + 1;
    setPageNumber(newPageNumber);
  };

  useEffect(() => {
    const fetchPdf = async () => {
      const fetchedPdfUrl = `${songObj.pdfUrl}`;
      setPdfUrl(fetchedPdfUrl);
    };

    fetchPdf();
  }, []);

  return (
    <div className="h-[100%] w-full md:w-auto flex-grow-[0] md:flex-grow-[1] bg-gray-900 flex flex-col overflow-clip">
      <nav className="bg-gray-950 text-white py-2 sm:py-0 flex gap-3 sm:gap-5 text-xs sm:text-base">
        <p className="select-none">
          Page {pageNumber || 1} of {numPages || 1}
        </p>
        <button onClick={goToPrevPage} className="previous select-none">
          Prev
        </button>
        <button onClick={goToNextPage} className="next select-none">
          Next
        </button>
        <button
          className="select-none"
          onClick={handleZoomIn}
          disabled={pageScale >= 3}
        >
          Zoom +
        </button>
        <button
          className="select-none"
          onClick={handleZoomOut}
          disabled={pageScale <= 0.3}
        >
          Zoom -
        </button>
      </nav>

      <Document
        className="h-auto page scrollbar-hide"
        file={`${songObj.pdfUrl}`}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={LoadingComponent}
      >
        <Page
          className="overflow-scroll scrollbar-hide"
          scale={pageScale}
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
};

export default SheetMusic;

const LoadingComponent = () => {
  return (
    <div className="h-full flex flex-col pt-8 justify-center items-center">
      <span className="text-white text-2xl mb-4">Loading...</span>
      <img className="h-[100px] w-[100px] animate-spin" src="/loading.svg" />
    </div>
  );
};
