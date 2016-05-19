import Koa from 'koa';
const app = new Koa();
import config from './config/';
import path from 'path';

// General
import bodyParser from 'koa-bodyparser';
import convert from 'koa-convert';
import session from 'koa-generic-session';
import MongoStore from 'koa-generic-session-mongo';

app.use(bodyParser());
app.keys = [config.SESSIONID];
app.use(convert(session({
  store: new MongoStore(),
})));

// Passport
import passport from './lib/passport';
import loggedInMiddleware from './lib/logged-in-middleware';
app.use(passport.initialize());
app.use(passport.session());
app.use(loggedInMiddleware());

// Views
import views from 'koa-views';
app.use(views(path.join(__dirname, 'views/'), {
  extension: 'pug',
}));

// Routes
import routes from './routes/';
routes.map(
  route => app
    .use(route.middleware())
    .use(route.allowedMethods())
);

// Mongoose
import mongoose from 'mongoose';
mongoose.connect(config.MONGO_URL);
const db = mongoose.connection;
db.on('error', console.log.bind(console, 'DB Error:'));
app.context.db = db;

app.listen(config.PORT, config.HOST, () => {
  console.log(`Server listening at ${config.HOST}:${config.PORT}`);
});
