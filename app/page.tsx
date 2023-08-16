import Image from "next/image";
import SongPlayer from "../containers/songPlayer/SongPlayer";
import SideBar from "../containers/sidebar/Sidebar";
import SheetMusic from "../components/sheetMusic/SheetMusic";

export default function Home() {
  return (
    <div className="bg-blue-500 h-screen flex flex-col">
      <SongPlayer />
      <div className="flex grow min-h-0">
        <SideBar />
        <SheetMusic />
      </div>
    </div>
  );
}
