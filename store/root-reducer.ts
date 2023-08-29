import { combineReducers } from 'redux';
import { musicReducer } from './music/music.reducer';


export const rootReducer = combineReducers({
  music: musicReducer,
});