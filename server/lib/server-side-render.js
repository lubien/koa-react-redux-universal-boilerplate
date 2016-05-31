import React from 'react';
import ReactDOM from 'react-dom/server';
import Helmet from 'react-helmet';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../client/store';
import routes from '../../client/routes/index';

export default function serverSideRender(url, user = { loggedIn: false }) {
  store.dispatch({
    type: 'app/auth/GET_LOGGED_IN_USER_FULFILLED',
    payload: user,
  });

  return new Promise((fulfill, reject) => {
    match({
      routes, location: url,
    }, async function serverSideMatchCallback(err, redirectLocation, renderProps) {
      if (err) reject(err);
      else if (!renderProps) {
        reject({ code: 404, msg: "Page doesn't exist" });
      } else if (renderProps.location.pathname === '/error/401') {
        reject({ code: 401, msg: 'Unauthorized' });
      } else {
        const actions = renderProps.components
          .filter(component => component && component.requiredActions)
          .map(component => component.requiredActions)
          .reduce((a, b) => a.concat(b), []);

        const actionsWithoutGetUser = actions.filter(func => func.name !== 'getLoggedInUser');

        for (const action of actionsWithoutGetUser) {
          await store.dispatch(action());
        }

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
