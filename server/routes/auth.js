import router from 'koa-router';
const routes = router();
import controller from '../controllers/auth';

routes.get('/login', controller.login);
routes.get('/auth/github/callback', controller.githubCallback);
routes.get('/logout', controller.logout);

module.exports = routes;
