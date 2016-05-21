import React, { PropTypes } from 'react';
import store from '../store';
// TODO: figure how to do this w/o using store directly

const requireAuth = (Component) => () => {
  if (store.getState().get('user').get('loggedIn')) {
    return (<Component />);
  }
  // TODO: custom error components
  return (<div>Error 401: Unauthorized.</div>);
};

requireAuth.propTypes = {
  Component: PropTypes.node.isRequired,
};

export default requireAuth;
