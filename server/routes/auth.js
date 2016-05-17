const router = require('koa-router');
const routes = router();
const controller = require('../controllers/auth');

routes.get('/login', controller.login);
routes.get('/auth/github/callback', controller.githubCallback);
routes.get('/logout', controller.logout);

module.exports = routes;
