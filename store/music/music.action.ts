import { Piece } from "@/constants";
import { MUSIC_CASES } from "./music.types";
import { createAction } from "@/utils/reducer.utils";
import { AnyAction, Dispatch } from "redux";


export const loadSong = (songName: string): AnyAction => {
  return createAction(MUSIC_CASES.LOAD_SONG, songName)
}

export const selectSong = (piece: Piece): AnyAction => {
  return createAction(MUSIC_CASES.SELECT_SONG, piece)
}