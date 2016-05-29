import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import {
  loadingBarReducer as loadingBar,
  loadingBarMiddleware,
} from 'react-redux-loading-bar';

import auth from './reducers/auth';
import users from './reducers/users';
import { routerReducer as routing } from 'react-router-redux';

const reducers = combineReducers({
  auth,
  users,
  routing,
  loadingBar,
});

let initialState = {};

const middleWares = [thunkMiddleware, promiseMiddleware(), loadingBarMiddleware()];
const composables = [
  applyMiddleware(...middleWares),
];

if (typeof window !== 'undefined' && window.__STORE__) { // eslint-disable-line
  initialState = JSON.parse(window.__STORE__); // eslint-disable-line

  if (process && process.env && process.env.NODE_ENV !== 'production') {
    // zalmoxisus/redux-devtools-extension
    // https://github.com/zalmoxisus/redux-devtools-extension#implementation
    if (window.devToolsExtension) {
      composables.push(window.devToolsExtension());
    }
  }
}

const store = createStore(reducers, initialState, compose(...composables));

export default store;
