const Koa = require('koa');
const app = new Koa();
const config = require('./config/');

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

const routes = require('./routes/');
for (let route in routes) {
  if (routes.hasOwnProperty(route)) {
    app
      .use(routes[route].middleware())
      .use(routes[route].allowedMethods());
  }
}

const {
  PORT, HOST
} = config;

app.listen(PORT, HOST, () => {
  console.log(`Server listening at ${HOST}:${PORT}`);
});
