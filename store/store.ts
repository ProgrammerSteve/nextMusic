import { compose, createStore, applyMiddleware, AnyAction, Store, Middleware } from 'redux';
import { createLogger, ReduxLoggerOptions } from 'redux-logger';

import thunk from 'redux-thunk';
import { rootReducer } from './root-reducer';
import { batchDispatchMiddleware } from 'redux-batched-actions';

import { createWrapper, Context } from 'next-redux-wrapper';

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;


// BINDING MIDDLEWARE
const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

let reduxLoggerOptions: ReduxLoggerOptions = {
  predicate: (getState, action) => action,
  collapsed: true
};
const loggerMiddleware = createLogger(reduxLoggerOptions);



const middleWares = [
  thunk,
  batchDispatchMiddleware,
].filter(Boolean);

if (process.env.NODE_ENV !== 'production') middleWares.push(loggerMiddleware)

export const store = createStore(rootReducer, bindMiddleware(middleWares));

// Create the store using the persisted reducer and middleware
export const makeStore = (context: Context): Store => {
  return createStore(rootReducer, bindMiddleware(middleWares));
};

export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });
