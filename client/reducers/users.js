import api from '../lib/api';

const LOAD_ALL_USERS = 'app/users/LOAD_ALL_USERS';

const initialState = {
  list: [],
};

export default function usersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${LOAD_ALL_USERS}_FULFILLED`: {
      console.log('here', action);
      return {
        ...state,
        list: action.payload,
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
