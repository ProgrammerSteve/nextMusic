import { MUSIC_CASES } from "./music.types";
import { createAction } from "@/utils/reducer.utils";
import { AnyAction, Dispatch } from "redux";


export const loadSong = (songName: string): AnyAction => {
  return createAction(MUSIC_CASES.LOAD_SONG, songName)
}