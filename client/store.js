import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import userReducer from './reducers/user';

let initialState = {};

if (typeof window !== 'undefined' && window.__STORE__) { // eslint-disable-line
  initialState = JSON.parse(window.__STORE__); // eslint-disable-line
}

const store = createStore(combineReducers({
  user: userReducer,
}),
  initialState,
  applyMiddleware(thunkMiddleware)
);

export default store;
