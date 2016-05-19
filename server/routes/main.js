import router from 'koa-router';
const routes = router();
import controller from '../controllers/main';

routes.get('*', controller.index);

module.exports = routes;
