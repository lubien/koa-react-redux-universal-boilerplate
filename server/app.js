const Koa = require('koa');
const app = new Koa();
const config = require('./config/');

// General
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

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
