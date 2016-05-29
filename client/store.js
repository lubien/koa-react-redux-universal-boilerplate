import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import user from './reducers/user';
import { routerReducer as routing } from 'react-router-redux';

const reducers = combineReducers({
  user,
  routing,
});

let initialState = {};

const middleWares = [thunkMiddleware];

if (typeof window !== 'undefined' && window.__STORE__) { // eslint-disable-line
  initialState = JSON.parse(window.__STORE__); // eslint-disable-line
}

const store = createStore(reducers, initialState,
  applyMiddleware(...middleWares)
);

export default store;
