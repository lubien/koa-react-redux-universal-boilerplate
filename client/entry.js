import React from 'react';
import ReactDOM from 'react-dom';
import { Router, match, browserHistory } from 'react-router';
import routes from './routes';

if (!module || module && !module.parent) {
  match({
    routes, history: browserHistory,
  }, (err, redirectLocation, renderProps) => {
    if (err) throw err;

    ReactDOM.render(
      <Router {...renderProps} />,
      document.getElementById('app')
    );
  });
}
