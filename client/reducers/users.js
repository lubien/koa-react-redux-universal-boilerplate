import api from '../lib/api';

const LOAD_ALL_USERS = 'app/users/LOAD_ALL_USERS';
const LOAD_ALL_USERS_FULFILLED = 'app/users/LOAD_ALL_USERS_FULFILLED';
const CLEAR_ALL_USERS = 'app/users/CLEAR_ALL_USERS';

const initialState = {
  list: [],
};

export default function usersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_ALL_USERS_FULFILLED: {
      return {
        ...state,
        list: action.payload,
      };
    }
    case CLEAR_ALL_USERS: {
      return {
        ...state,
        list: [],
      };
    }
    default: {
      return state;
    }
  }
}

export function loadAllUsers() {
  return {
    type: LOAD_ALL_USERS,
    payload: api.users.all(),
  };
}

export function clearAllUsers() {
  return {
    type: CLEAR_ALL_USERS,
  };
}
