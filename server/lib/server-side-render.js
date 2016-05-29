import React from 'react';
import ReactDOM from 'react-dom/server';
import Helmet from 'react-helmet';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../client/store';
import routes from '../../client/routes';

import { SET_LOGGED_IN_USER } from '../../client/reducers/auth';

export default function serverSideRender(url, user = { loggedIn: false }) {
  return new Promise((fulfill, reject) => {
    match({
      routes, location: url,
    }, (err, redirectLocation, renderProps) => {
      if (err) reject(err);
      else if (!renderProps) {
        reject({ code: 404, msg: "Page doesn't exist" });
      } else if (renderProps.location.pathname === '/401') {
        reject({ code: 401, msg: 'Unauthorized' });
      } else {
        store.dispatch({
          type: SET_LOGGED_IN_USER,
          user,
        });

        const rendered = ReactDOM.renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );
        const head = Helmet.rewind();
        const state = store.getState();

        fulfill({ rendered, head, state });
      }
    });
  });
}
