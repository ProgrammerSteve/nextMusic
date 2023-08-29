import { Piece, classical_music_pieces } from '@/constants';
import { MUSIC_CASES } from './music.types';
import { AnyAction } from 'redux';

export type MusicState = {
  songUrl: string | null;
  piece: Piece | null;
}

const MUSIC_INITIAL_STATE: MusicState = {
  songUrl: null,
  piece: null
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
    default:
      return state;
  }
};