import React, { PropTypes } from 'react';

import { connect } from 'react-redux';

import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';
import Loading from 'react-redux-loading-bar';

const App = ({ children, auth }) => (
  <div>
    <Loading style={{ backgroundColor: '#2c3e50' }} />
    <Helmet
      titleTemplate="%s - Koa React Boilerplate"
    />
    <Navbar auth={auth} />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    auth: state.auth,
  })
)(App);
