import React, { PropTypes } from 'react';

import { connect } from 'react-redux';

import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';

const App = ({ children, user }) => (
  <div>
    <Helmet
      titleTemplate="%s - Koa React Boilerplate"
    />
    <Navbar user={user} />
    <div className="container">
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    user: state.user,
  })
)(App);
