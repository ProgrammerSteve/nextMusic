"use client";

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useAppSelector } from "@/utils/redux.hooks";
import { selectSongObj } from "@/store/music/music.selector";
import {
  BiChevronLeft,
  BiChevronRight,
  BiZoomIn,
  BiZoomOut,
  BiExpand,
} from "react-icons/bi";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PDF_BASE_WIDTH = 612;

const SheetMusic = () => {
  const songObj = useAppSelector(selectSongObj);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [pageScale, setPageScale] = useState(1);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getFitScale = useCallback(() => {
    const width = containerRef.current?.clientWidth;
    if (!width) return 1;
    const fitScale = (width - 32) / PDF_BASE_WIDTH;
    return Math.round(Math.min(2, Math.max(0.3, fitScale)) * 10) / 10;
  }, []);

  // Measure container and set scale before browser paints
  useLayoutEffect(() => {
    setPageNumber(1);
    const fit = getFitScale();
    setPageScale(fit);
  }, [songObj, getFitScale]);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, left: 0 });
  };


  const onDocumentLoadSuccess = (document: any) => {
    if (!document) return;
    setNumPages(document.numPages);
  };

  function handleZoomIn() {
    if (pageScale < 3) {
      setPageScale((s) => Math.round((s + 0.1) * 10) / 10);
      scrollToTop();
    }
  }

  function handleZoomOut() {
    if (pageScale > 0.3) {
      setPageScale((s) => Math.round((s - 0.1) * 10) / 10);
      scrollToTop();
    }
  }

  const handleFitToWidth = () => {
    const fit = getFitScale();
    setPageScale(fit);
    scrollToTop();
  };

  const goToPrevPage = () => {
    setPageNumber((prev) => (prev - 1 <= 1 ? 1 : prev - 1));
    scrollToTop();
  };

  const goToNextPage = () => {
    if (!numPages) return;
    setPageNumber((prev) => (prev + 1 >= numPages ? numPages : prev + 1));
    scrollToTop();
  };

  useEffect(() => {
    setPdfUrl(`${songObj.pdfUrl}`);
  }, [songObj.pdfUrl]);

  const zoomPercent = Math.round(pageScale * 100);

  return (
    <div
      ref={containerRef}
      className="h-full w-full md:w-auto flex-grow-0 md:flex-grow bg-gray-900 flex flex-col overflow-hidden"
    >

      {/* Toolbar */}
      <nav className="bg-gray-950/80 backdrop-blur-sm border-b border-white/5 px-3 sm:px-4 py-2 flex items-center justify-between gap-2 flex-shrink-0">
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
          <button
            onClick={handleFitToWidth}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors ml-1"
            aria-label="Fit to width"
            title="Fit to width"
          >
            <BiExpand className="text-lg text-gray-300" />
          </button>
        </div>
      </nav>


      {/* Scrollable PDF Content */}
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div
        ref={scrollRef}
        className="no-scrollbar flex-1"
        style={{ overflow: "auto", msOverflowStyle: "none", scrollbarWidth: "none" }}
      >
        <div className="flex justify-center min-h-full">
          <Document
            className="pdf-document"
            file={`${songObj.pdfUrl}`}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<LoadingComponent />}
          >
            <Page
              className="pdf-page"
              scale={pageScale}
              pageNumber={pageNumber}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>
      </div>
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
