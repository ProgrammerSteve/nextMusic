import Image from "next/image";
import SongPlayer from "../containers/songPlayer/SongPlayer";
import SideBar from "../containers/sidebar/Sidebar";
import SheetMusic from "../components/sheetMusic/SheetMusic";

export default function Home() {
  return (
    <div className=" h-screen">
      <div className="h-[150px] bg-gray-200 flex items-center justify-between px-4">
        <SongPlayer />
      </div>

      <div className="flex main-body">
        <SideBar />
        <SheetMusic />
      </div>
    </div>
  );
}
