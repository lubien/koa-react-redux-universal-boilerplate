import dotenv from 'dotenv';
dotenv.config();

const {
  ENV = 'development',
  PORT = 3000,
  HOST = 'localhost',
  SESSIONID = 'koa:sess',
  GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET,
} = process.env;

const config = {
  ENV, HOST, PORT, SESSIONID, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET,
  is: {
    dev: ENV === 'development',
    prod: ENV === 'production',
  },
};

const specific = {};

specific.development = {
  MONGO_URL: 'mongodb://localhost:27017/koa-react-boilerplate',
  GITHUB_CALLBACK_URL: `http://${HOST}:${PORT}/auth/github/callback`,
};
specific.production = {};

module.exports = Object.assign(config, specific[ENV]);
