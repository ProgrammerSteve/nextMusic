import { MUSIC_CASES } from './music.types';
import { AnyAction } from 'redux';

export type MusicState = {
  songUrl: string | null;
}

const MUSIC_INITIAL_STATE: MusicState = {
  songUrl: null
};

export const musicReducer = (state = MUSIC_INITIAL_STATE, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case MUSIC_CASES.LOAD_SONG:
      return {
        ...state,
        songUrl: payload
      };
    default:
      return state;
  }
};