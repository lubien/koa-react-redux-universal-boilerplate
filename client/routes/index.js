import App from './App';

import { route as indexRoute } from './Index';
import { route as aboutRoute } from './About';
import { route as protectedRoute } from './Protected';

import usersRoutes from './users/';
import errorRoutes from './error/';

const routes = {
  path: '/', component: App, indexRoute,
  childRoutes: [
    aboutRoute,
    protectedRoute,
    usersRoutes,
    errorRoutes,
  ],
};

export default routes;
