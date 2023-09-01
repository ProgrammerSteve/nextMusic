import { MusicState } from "./music.reducer";
import { RootState } from "../store";
import { createSelector } from 'reselect';

const selectMusicReducer = (state: RootState): MusicState => state.music;
export const selectSong = createSelector([selectMusicReducer], (musicSlice) => musicSlice.songUrl)
export const selectedSong = createSelector([selectMusicReducer], (musicSlice) => musicSlice.piece)
export const selectSongObj = createSelector([selectMusicReducer], (musicSlice) => musicSlice.songObject)