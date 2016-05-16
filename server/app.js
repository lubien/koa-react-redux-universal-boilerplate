const Koa = require('koa');
const app = new Koa();
const config = require('./config/');

// General
const bodyParser = require('koa-bodyparser');
const convert = require('koa-convert');
const session = require('koa-generic-session');
const MongoStore = require('koa-generic-session-mongo');

app.use(bodyParser());
app.keys = [config.SESSIONID];
app.use(convert(session({
  store: new MongoStore()
})));

// Routes
const routes = require('./routes/');
for (let route in routes) {
  if (routes.hasOwnProperty(route)) {
    app
      .use(routes[route].middleware())
      .use(routes[route].allowedMethods());
  }
}

// Mongoose
const mongoose = require('mongoose');
mongoose.connect(config.MONGO_URL);
const db = mongoose.connection;
db.on('error', console.log.bind(console, 'DB Error:'));
app.context.db = db;

const {
  PORT, HOST
} = config;

app.listen(PORT, HOST, () => {
  console.log(`Server listening at ${HOST}:${PORT}`);
});
