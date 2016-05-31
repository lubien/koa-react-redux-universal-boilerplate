import api from 'utils/api';

const GET_LOGGED_IN_USER = 'app/auth/GET_LOGGED_IN_USER';
const GET_LOGGED_IN_USER_FULFILLED = 'app/auth/GET_LOGGED_IN_USER_FULFILLED';

const INITIAL_STATE = {
  loggedIn: false,
};

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_LOGGED_IN_USER_FULFILLED: {
      const user = action.payload;

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
  return {
    type: GET_LOGGED_IN_USER,
    payload: api.users.loggedIn(),
  };
}
