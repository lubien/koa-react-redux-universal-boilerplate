import { route as listRoute } from './List';

const routes = {
  path: 'users',
  childRoutes: [listRoute],
};

export default routes;
