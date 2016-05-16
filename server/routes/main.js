const router = require('koa-router');
const routes = router();
const {
  indexRoute
} = require('../controllers/main');

routes.get('/', indexRoute);

module.exports = routes;
