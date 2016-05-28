import React, { PropTypes } from 'react';
import store from '../store';
// TODO: figure how to do this w/o using store directly

import Error from '../components/Error';

const requireAuth = (Component) => () => {
  if (store.getState().get('user').get('loggedIn')) {
    return (<Component />);
  }
  return (<Error code={401} reason={'Must be logged in.'} />);
};

requireAuth.propTypes = {
  Component: PropTypes.node.isRequired,
};

export default requireAuth;
