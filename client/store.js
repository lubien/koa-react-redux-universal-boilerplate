import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import auth from './reducers/auth';
import { routerReducer as routing } from 'react-router-redux';

const reducers = combineReducers({
  auth,
  routing,
});

let initialState = {};

const middleWares = [thunkMiddleware, promiseMiddleware()];
const composables = [
  applyMiddleware(...middleWares),
];

if (typeof window !== 'undefined' && window.__STORE__) { // eslint-disable-line
  initialState = JSON.parse(window.__STORE__); // eslint-disable-line

  if (process && process.env && process.env.NODE_ENV !== 'production') {
    // zalmoxisus/redux-devtools-extension
    // https://github.com/zalmoxisus/redux-devtools-extension#implementation
    composables.push(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );
  }
}

const store = createStore(reducers, initialState, compose(...composables));

export default store;
