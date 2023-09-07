import { Piece, classical_music_pieces } from '@/constants';
import { MUSIC_CASES } from './music.types';
import { AnyAction } from 'redux';
import { songList, SongObject } from './music.types';

export type MusicState = {
  songObject: SongObject,
  songUrl: string | null;
  piece: Piece | null;
}

export const MUSIC_INITIAL_STATE: MusicState = {
  songObject: songList[0],
  songUrl: null,
  piece: null,
};

export const musicReducer = (state = MUSIC_INITIAL_STATE, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case MUSIC_CASES.LOAD_SONG:
      return {
        ...state,
        songUrl: payload
      };
    case MUSIC_CASES.SELECT_SONG:
      return {
        ...state,
        piece: payload
      }
    case MUSIC_CASES.LOAD_SONG_BY_ID:
      return {
        ...state,
        songObject: payload
      }
    default:
      return state;
  }
};