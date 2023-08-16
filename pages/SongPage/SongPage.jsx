import React from "react";
import SongPlayer from "../../containers/songPlayer/SongPlayer.jsx";
import SheetMusic from "../../components/sheetMusic/SheetMusic.jsx";
import Sidebar from "../../containers/sidebar/Sidebar.jsx";
const SongPage = () => {
  return (
    <div className="bg-red-500 h-screen flex flex-col">
      <SongPlayer />
      <div className="flex grow min-h-0">
        <Sidebar />
        <SheetMusic />
      </div>
    </div>
  );
};

export default SongPage;
