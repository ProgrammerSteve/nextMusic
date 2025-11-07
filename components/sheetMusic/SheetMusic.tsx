"use client";

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
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
  const [pageScale, setPageScale] = useState(1);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const scrollStart = useRef({ left: 0, top: 0 });

  const pdfRenderedWidth = Math.ceil(PDF_BASE_WIDTH * pageScale);

  const handlePointerDown = (e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    dragStart.current = { x: e.clientX, y: e.clientY };
    scrollStart.current = { left: el.scrollLeft, top: el.scrollTop };
    el.setPointerCapture(e.pointerId);
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    scrollRef.current.scrollLeft = scrollStart.current.left - dx;
    scrollRef.current.scrollTop = scrollStart.current.top - dy;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.releasePointerCapture(e.pointerId);
      scrollRef.current.style.cursor = "grab";
      scrollRef.current.style.userSelect = "";
    }
  };

  const getFitScale = useCallback(() => {
    const width = containerRef.current?.clientWidth;
    if (!width) return 1;
    const fitScale = (width - 32) / PDF_BASE_WIDTH;
    return Math.round(Math.min(2, Math.max(0.3, fitScale)) * 10) / 10;
  }, []);

  useLayoutEffect(() => {
    setPageNumber(1);
    const fit = getFitScale();
    setPageScale(fit);
  }, [songObj, getFitScale]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      const overflowX = el.scrollWidth - el.clientWidth;
      el.scrollTop = 0;
      el.scrollLeft = overflowX > 0 ? overflowX / 2 : 0;
    });
  }, [pageScale, pageNumber]);

  const onDocumentLoadSuccess = (doc: any) => {
    if (!doc) return;
    setNumPages(doc.numPages);
  };

  function handleZoomIn() {
    if (pageScale < 3) setPageScale((s) => Math.round((s + 0.1) * 10) / 10);
  }
  function handleZoomOut() {
    if (pageScale > 0.3) setPageScale((s) => Math.round((s - 0.1) * 10) / 10);
  }
  const handleFitToWidth = () => setPageScale(getFitScale());
  const goToPrevPage = () => setPageNumber((p) => (p - 1 <= 1 ? 1 : p - 1));
  const goToNextPage = () => {
    if (!numPages) return;
    setPageNumber((p) => (p + 1 >= numPages ? numPages : p + 1));
  };

  useEffect(() => {}, [songObj.pdfUrl]);

  const zoomPercent = Math.round(pageScale * 100);

  return (
    <div ref={containerRef} className="h-full w-full md:w-auto flex-grow-0 md:flex-grow bg-gray-900 flex flex-col overflow-hidden">
      <nav className="bg-gray-950/80 backdrop-blur-sm border-b border-white/5 px-3 sm:px-4 py-2 flex items-center justify-between gap-2 flex-shrink-0">
        <div className="flex items-center gap-1">
          <button onClick={goToPrevPage} disabled={pageNumber <= 1} className="p-1.5 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors" aria-label="Previous page">
            <BiChevronLeft className="text-lg text-gray-300" />
          </button>
          <span className="text-xs sm:text-sm text-gray-400 select-none tabular-nums px-1.5">
            <span className="text-gray-200">{pageNumber || 1}</span>
            <span className="mx-1">/</span>
            {numPages || 1}
          </span>
          <button onClick={goToNextPage} disabled={!numPages || pageNumber >= numPages} className="p-1.5 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors" aria-label="Next page">
            <BiChevronRight className="text-lg text-gray-300" />
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={handleZoomOut} disabled={pageScale <= 0.3} className="p-1.5 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors" aria-label="Zoom out">
            <BiZoomOut className="text-lg text-gray-300" />
          </button>
          <span className="text-xs text-gray-500 select-none tabular-nums min-w-[40px] text-center">{zoomPercent}%</span>
          <button onClick={handleZoomIn} disabled={pageScale >= 3} className="p-1.5 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors" aria-label="Zoom in">
            <BiZoomIn className="text-lg text-gray-300" />
          </button>
          <button onClick={handleFitToWidth} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors ml-1" aria-label="Fit to width" title="Fit to width">
            <BiExpand className="text-lg text-gray-300" />
          </button>
        </div>
      </nav>

      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflow: "auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          cursor: "grab",
          WebkitOverflowScrolling: "touch",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div style={{ width: `max(100%, ${pdfRenderedWidth}px)`, minHeight: "100%" }}>
          <Document
            className="pdf-document"
            file={songObj.pdfUrl}
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

      <style jsx>{`
        div :global(.pdf-document),
        div :global(.react-pdf__Document) {
          margin: 0 auto;
          width: fit-content;
        }
      `}</style>
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
