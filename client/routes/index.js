import App from './App';

import { route as indexRoute } from './Index';
import { route as aboutRoute } from './About';
import { route as protectedRoute } from './Protected';

import errorRoutes from './error/';

const routes = {
  path: '/', component: App, indexRoute,
  childRoutes: [
    aboutRoute,
    protectedRoute,
    errorRoutes,
  ],
};

export default routes;
