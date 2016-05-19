import router from 'koa-router';
const routes = router();
import controller from '../controllers/react';

routes.get('*', controller.index);

module.exports = routes;
