import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';

import userReducer from './reducers/user';
import { getLoggedInUser } from './actions/user';

const store = createStore(combineReducers({
  user: userReducer,
}),
  new Map({}),
  applyMiddleware(thunkMiddleware)
);

if (!module || module && !module.parent) {
  // TODO: figure out how to reuse server's login data
  store.dispatch(getLoggedInUser());
}

export default store;
