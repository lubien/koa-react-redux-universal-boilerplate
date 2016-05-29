import api from '../lib/api';
import { fromJS } from 'immutable';

export const SET_LOGGED_IN_USER = 'app/user/SET_LOGGED_IN_USER';

const INITIAL_STATE = fromJS({
  loggedIn: false,
});

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOGGED_IN_USER: {
      const { user } = action;

      if (!user.loggedIn) {
        return INITIAL_STATE;
      }

      return fromJS(user);
    }
    default: {
      return state;
    }
  }
}

export function getLoggedInUser() {
  return function fetchUserThunk(dispatch) {
    api.users.loggedIn()
      .then(user => dispatch({
        type: SET_LOGGED_IN_USER,
        user,
      }));
  };
}
