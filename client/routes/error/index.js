import { route as error401Route } from './401';

const routes = {
  path: 'error',
  childRoutes: [error401Route],
};

export default routes;
