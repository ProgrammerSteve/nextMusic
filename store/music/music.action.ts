import { Piece } from "@/constants";
import { MUSIC_CASES } from "./music.types";
import { createAction } from "@/utils/reducer.utils";
import { AnyAction, Dispatch } from "redux";
import { songList } from "./music.types";

export const loadSong = (songName: string): AnyAction => {
  return createAction(MUSIC_CASES.LOAD_SONG, songName)
}

export const selectSong = (piece: Piece): AnyAction => {
  return createAction(MUSIC_CASES.SELECT_SONG, piece)
}


export const loadSongById = (id: string): AnyAction => {
  let newSongObj = songList.find(songObj => songObj.songID === id)
  if (!newSongObj) return createAction("") //Triggers the DEFAULT case
  return createAction(MUSIC_CASES.LOAD_SONG_BY_ID, newSongObj)
}