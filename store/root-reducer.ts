import { combineReducers } from 'redux';
import { musicReducer } from './music/music.reducer';

import { MUSIC_INITIAL_STATE } from './music/music.reducer';

export const rootReducer = combineReducers({
  music: musicReducer,
});

export const rootInitialState = {
  music: MUSIC_INITIAL_STATE
}