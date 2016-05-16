const {
  ENV = 'development',
  PORT = 3000,
  HOST = '0.0.0.0'
} = process.env;

const config = {
  ENV, HOST, PORT,
  is: {
    dev: ENV === 'development',
    prod: ENV === 'production'
  }
};

const specific = {};

specific.development = {
  'MONGO_URL': 'mongodb://localhost:27017/koa-react-boilerplate'
};
specific.production = {};

module.exports = Object.assign(config, specific[ENV]);
