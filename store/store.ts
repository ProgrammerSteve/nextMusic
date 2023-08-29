import { compose, createStore, applyMiddleware } from 'redux';
import { createLogger, ReduxLoggerOptions } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { rootReducer } from './root-reducer';
import { batchDispatchMiddleware } from 'redux-batched-actions';
import storage from 'redux-persist/lib/storage';
export type RootState = ReturnType<typeof rootReducer>

let reduxLoggerOptions: ReduxLoggerOptions = {
  predicate: (getState, action) => action,
  collapsed: true

};

const loggerMiddleware = createLogger(reduxLoggerOptions);
const middleWares = [
  thunk,
  batchDispatchMiddleware,
  // loggerMiddleware
].filter(Boolean);

const persistConfig = {
  key: 'root',
  storage: storage,
  blackList: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);