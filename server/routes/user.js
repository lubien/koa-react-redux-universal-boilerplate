import apiRouterFactory from './lib/api-router-factory';
const routes = apiRouterFactory('/users');
import * as controller from '../controllers/user';
import isLoggedIn from '../lib/is-logged-in';

routes.get('/secret', isLoggedIn, controller.secret);
routes.get('/logged-in', controller.loggedIn);
routes.get('/all', controller.all);

module.exports = routes;
