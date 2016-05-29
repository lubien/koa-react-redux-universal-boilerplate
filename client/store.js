import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import user from './reducers/user';

let initialState = {};

if (typeof window !== 'undefined' && window.__STORE__) { // eslint-disable-line
  initialState = JSON.parse(window.__STORE__); // eslint-disable-line
}

const store = createStore(combineReducers({
  user,
}),
  initialState,
  applyMiddleware(thunkMiddleware)
);

export default store;
