import store from '../store';
// TODO: figure how to do this w/o using store directly

function isLoggedIn(nextState, replace) { //eslint-disable-line
  if (!store.getState().auth.loggedIn) {
    return replace('/error/401');
  }
}

export default isLoggedIn;
