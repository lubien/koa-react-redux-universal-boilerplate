import React from 'react';
import ReactDOM from 'react-dom';
import { Router, match, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';

import { SET_LOGGED_IN_USER } from './constants/user';
import api from './lib/api';

if (!module || module && !module.parent) {
  match({
    routes, history: browserHistory,
  }, (err, redirectLocation, renderProps) => {
    if (err) throw err;

    api.users.loggedIn()
      .then(user => {
        store.dispatch({
          type: SET_LOGGED_IN_USER,
          user,
        });

        ReactDOM.render(
          <Provider store={store}>
            <Router {...renderProps} />
          </Provider>,
          document.getElementById('app')
        );
      });
  });
}
