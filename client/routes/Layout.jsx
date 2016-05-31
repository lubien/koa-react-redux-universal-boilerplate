import React, { PropTypes } from 'react';

import { connect } from 'react-redux';
import { getLoggedInUser } from 'reducers/auth';

import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';
import Loading from 'react-redux-loading-bar';

const Layout = ({ children, auth }) => (
  <div>
    <Loading style={{ backgroundColor: '#2c3e50' }} />
    <Helmet
      titleTemplate="%s - Koa React Boilerplate"
    />
    <Navbar auth={auth} />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  auth: PropTypes.object.isRequired,
};

import reduxServerRequire from 'utils/redux-server-require';

export default reduxServerRequire(
  [getLoggedInUser],
)(connect(
  state => ({
    auth: state.auth,
  })
)(Layout));
