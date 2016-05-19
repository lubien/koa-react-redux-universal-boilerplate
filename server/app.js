const dotenv = require('dotenv');
dotenv.config();
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
  store: new MongoStore(),
})));

// Passport
const passport = require('./lib/passport');
const loggedInMiddleware = require('./lib/logged-in-middleware');
app.use(passport.initialize());
app.use(passport.session());
app.use(loggedInMiddleware());

// Routes
const routes = require('./routes/');
routes.map(
  route => app
    .use(route.middleware())
    .use(route.allowedMethods())
);

// Mongoose
const mongoose = require('mongoose');
mongoose.connect(config.MONGO_URL);
const db = mongoose.connection;
db.on('error', console.log.bind(console, 'DB Error:'));
app.context.db = db;

app.listen(config.PORT, config.HOST, () => {
  console.log(`Server listening at ${config.HOST}:${config.PORT}`);
});
