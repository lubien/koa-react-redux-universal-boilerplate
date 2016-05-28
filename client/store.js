import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';

import userReducer from './reducers/user';

let initialState = {};

if (typeof window !== 'undefined' && window.__STORE__) { // eslint-disable-line
  initialState = JSON.parse(window.__STORE__); // eslint-disable-line
}

const store = createStore(combineReducers({
  user: userReducer,
}),
  fromJS(initialState),
  applyMiddleware(thunkMiddleware)
);

export default store;
