import api from '../lib/api';

export const SET_LOGGED_IN_USER = 'app/auth/SET_LOGGED_IN_USER';

const INITIAL_STATE = {
  loggedIn: false,
};

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOGGED_IN_USER: {
      const { user } = action;

      if (!user.loggedIn) {
        return INITIAL_STATE;
      }

      return user;
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
