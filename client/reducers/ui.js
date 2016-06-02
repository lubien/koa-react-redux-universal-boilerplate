const TOGGLE_NAVBAR = 'app/ui/TOGGLE_NAVBAR';

const initialState = {
  navbar: false,
};

export default function uiReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_NAVBAR: {
      return {
        ...state,
        navbar: !state.navbar,
      };
    }
    default: {
      return state;
    }
  }
}

export function toggleNavbar() {
  return {
    type: TOGGLE_NAVBAR,
  };
}
