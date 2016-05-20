import React from 'react';
import ReactDOM from 'react-dom/server';
import Helmet from 'react-helmet';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../client/store';
import routes from '../../client/routes';

export default function serverSideRender(url) {
  return new Promise((fulfill, reject) => {
    match({
      routes, location: url,
    }, (err, redirectLocation, renderProps) => {
      if (err) reject(err);

      const rendered = ReactDOM.renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );
      const head = Helmet.rewind();

      fulfill({ rendered, head });
    });
  });
}
