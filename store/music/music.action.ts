import { MUSIC_CASES } from "./music.types";
import { createAction } from "@/utils/reducer.utils";
import { AnyAction } from "redux";
import { songList } from "./music.types";

/**
 * A Redux action that Loads the song based on the songName inputted into the function
 * @param songName The urlpath to the songName
 * @returns {AnyAction}
*/
export const loadSong = (songName: string): AnyAction => {
  return createAction(MUSIC_CASES.LOAD_SONG, songName)
}

/**
 * 
 * @param id 
 * @returns {AnyAction}
 */
export const loadSongById = (id: string): AnyAction => {
  let newSongObj = songList.find(songObj => songObj.songID === id)
  if (!newSongObj) return createAction("") //Triggers the DEFAULT case
  return createAction(MUSIC_CASES.LOAD_SONG_BY_ID, newSongObj)
}