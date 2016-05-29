import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import user from './reducers/user';
import { routerReducer as routing } from 'react-router-redux';

let initialState = {};

if (typeof window !== 'undefined' && window.__STORE__) { // eslint-disable-line
  initialState = JSON.parse(window.__STORE__); // eslint-disable-line
}

const store = createStore(combineReducers({
  user,
  routing,
}),
  initialState,
  applyMiddleware(thunkMiddleware)
);

export default store;
