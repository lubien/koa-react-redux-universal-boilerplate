const router = require('koa-router');
const routes = router();
const controller = require('../controllers/main');

routes.get('*', controller.index);

module.exports = routes;
