import Router from 'koa-router';

function apiRouterFactory(prefix = '') {
  return new Router({
    prefix: `/api${prefix}`,
  });
}

export default apiRouterFactory;
