import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActionCreators from '../actions/user';

import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';

class App extends Component {
  componentDidMount() {
    this.props.userActions.getLoggedInUser();
  }

  render() {
    const { user, children } = this.props;

    return (
      <div>
        <Helmet
          titleTemplate="%s - Koa React Boilerplate"
          title="Index"
        />
        <Navbar user={user} />
        <div className="container">
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  user: ImmutablePropTypes.map.isRequired,
  userActions: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    user: state.get('user'),
  }),
  dispatch => ({
    userActions: bindActionCreators(userActionCreators, dispatch),
  })
)(App);
