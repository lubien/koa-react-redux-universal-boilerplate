import React from 'react';
import ReactDOM from 'react-dom';
import { Router, match, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';

if (!module || module && !module.parent) {
  match({
    routes, history: browserHistory,
  }, (err, redirectLocation, renderProps) => {
    if (err) throw err;

    ReactDOM.render(
      <Provider store={store}>
        <Router {...renderProps} />
      </Provider>,
      document.getElementById('app')
    );
  });
}
