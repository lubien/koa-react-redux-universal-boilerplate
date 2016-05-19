import dotenv from 'dotenv';
dotenv.config();

const {
  ENV = 'development',
  PORT = 3000,
  HOST = 'localhost',
  SESSIONID = 'koa:sess',
  BASE_URL = `http://${HOST}:${PORT}`,
  WEBPACK_BASE_URL = `http://${HOST}:8080`,
  GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET,
} = process.env;

const config = {
  ENV, HOST, PORT, SESSIONID, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, BASE_URL,
  is: {
    dev: ENV === 'development',
    prod: ENV === 'production',
  },
};

const specific = {};

specific.development = {
  WEBPACK_BASE_URL,
  MONGO_URL: 'mongodb://localhost:27017/koa-react-boilerplate',
  GITHUB_CALLBACK_URL: `${BASE_URL}/auth/github/callback`,
};
specific.production = {};

module.exports = Object.assign(config, specific[ENV]);
