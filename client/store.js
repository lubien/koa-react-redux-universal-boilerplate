import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';

import userReducer from './reducers/user';

const store = createStore(combineReducers({
  user: userReducer,
}),
  new Map({}),
  applyMiddleware(thunkMiddleware)
);

export default store;
