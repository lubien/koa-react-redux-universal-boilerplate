import { fromJS } from 'immutable';
import {
  SET_LOGGED_IN_USER,
} from '../constants/user';

export const INITIAL_STATE = fromJS({
  loggedIn: false,
});

function userReducer(state = INITIAL_STATE, action) {
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

export default userReducer;
