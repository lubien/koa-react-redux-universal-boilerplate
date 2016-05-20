import api from '../lib/api';

import {
  SET_LOGGED_IN_USER,
} from '../constants/user';

export function getLoggedInUser() {
  return function fetchUserThunk(dispatch) {
    api.users.loggedIn()
      .then(user => dispatch({
        type: SET_LOGGED_IN_USER,
        user,
      }));
  };
}
