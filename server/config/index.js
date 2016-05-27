const dotenv = require('dotenv');
dotenv.config({ silent: true });

const {
  NODE_ENV = 'development',
  SUPPORT_HTTPS = false,
  PROTOCOL_PREFIX = SUPPORT_HTTPS ? 'https' : 'http',
  PORT = 3000,
  HOST = '0.0.0.0',
  SESSIONID = 'koa:sess',
  BASE_URL = `${PROTOCOL_PREFIX}://${HOST}:${PORT}`,
  WEBPACK_BASE_URL = `${PROTOCOL_PREFIX}://${HOST}:8080`,
  MONGO_URL = 'mongodb://localhost:27017/koa-react-boilerplate',
  GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET,
} = process.env;

const config = {
  NODE_ENV, HOST, PORT, SESSIONID, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, BASE_URL,
  MONGO_URL,
  GITHUB_CALLBACK_URL: `${BASE_URL}/auth/github/callback`,
  is: {
    dev: NODE_ENV === 'development',
    prod: NODE_ENV === 'production',
  },
};

const specific = {};

specific.development = {
  WEBPACK_BASE_URL,
};
specific.production = {};

module.exports = Object.assign(config, specific[NODE_ENV]);
