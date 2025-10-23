"use client";

import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useAppSelector } from "@/utils/redux.hooks";
import { selectSongObj } from "@/store/music/music.selector";
import {
  BiChevronLeft,
  BiChevronRight,
  BiZoomIn,
  BiZoomOut,
} from "react-icons/bi";

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
    if (pageScale < 3) setPageScale(pageScale + 0.2);
  }

  function handleZoomOut() {
    if (pageScale > 0.3) setPageScale(pageScale - 0.2);
  }

  const goToPrevPage = () => {
    setPageNumber((prev) => (prev - 1 <= 1 ? 1 : prev - 1));
  };

  const goToNextPage = () => {
    if (!numPages) return;
    setPageNumber((prev) => (prev + 1 >= numPages ? numPages : prev + 1));
  };

  useEffect(() => {
    setPdfUrl(`${songObj.pdfUrl}`);
  }, []);

  const zoomPercent = Math.round(pageScale * 100);

  return (
    <div className="h-full w-full md:w-auto flex-grow-0 md:flex-grow bg-gray-900 flex flex-col overflow-clip">
      {/* Toolbar */}
      <nav className="bg-gray-950/80 backdrop-blur-sm border-b border-white/5 px-3 sm:px-4 py-2 flex items-center justify-between gap-2">
        {/* Pagination */}
        <div className="flex items-center gap-1">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className="p-1.5 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
            aria-label="Previous page"
          >
            <BiChevronLeft className="text-lg text-gray-300" />
          </button>
          <span className="text-xs sm:text-sm text-gray-400 select-none tabular-nums px-1.5">
            <span className="text-gray-200">{pageNumber || 1}</span>
            <span className="mx-1">/</span>
            {numPages || 1}
          </span>
          <button
            onClick={goToNextPage}
            disabled={!numPages || pageNumber >= numPages}
            className="p-1.5 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
            aria-label="Next page"
          >
            <BiChevronRight className="text-lg text-gray-300" />
          </button>
        </div>

        {/* Zoom */}
        <div className="flex items-center gap-1">
          <button
            onClick={handleZoomOut}
            disabled={pageScale <= 0.3}
            className="p-1.5 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
            aria-label="Zoom out"
          >
            <BiZoomOut className="text-lg text-gray-300" />
          </button>
          <span className="text-xs text-gray-500 select-none tabular-nums min-w-[40px] text-center">
            {zoomPercent}%
          </span>
          <button
            onClick={handleZoomIn}
            disabled={pageScale >= 3}
            className="p-1.5 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
            aria-label="Zoom in"
          >
            <BiZoomIn className="text-lg text-gray-300" />
          </button>
        </div>
      </nav>

      {/* PDF Content */}
      <Document
        className="h-auto page scrollbar-hide"
        file={`${songObj.pdfUrl}`}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<LoadingComponent />}
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

const LoadingComponent = () => (
  <div className="h-full flex flex-col items-center justify-center pt-12 gap-4">
    <div className="w-10 h-10 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
    <span className="text-sm text-gray-500">Loading sheet music...</span>
  </div>
);
