import apiRouterFactory from './lib/api-router-factory';
const routes = apiRouterFactory('/users');
import * as controller from '../controllers/user';

routes.get('/logged-in', controller.loggedIn);
routes.get('/all', controller.all);

module.exports = routes;
