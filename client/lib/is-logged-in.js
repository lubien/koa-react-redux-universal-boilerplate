import store from '../store';
// TODO: figure how to do this w/o using store directly

function isLoggedIn(nextState, replace) { //eslint-disable-line
  if (!store.getState().get('user').get('loggedIn')) {
    return replace('/401');
  }
}

export default isLoggedIn;
