import 'isomorphic-fetch';

let baseUrl = '';

if (!process.env.isClient) {
  const { BASE_URL } = require('../../server/config/'); // eslint-disable-line
  baseUrl = BASE_URL;
}

function retreive(url, reqOpts = {}) {
  const opts = Object.assign({
    credentials: 'same-origin',
  }, reqOpts);

  return fetch(`${baseUrl}/api${url}`, opts).then(r => r.json());
}

const api = {};

api.users = {
  loggedIn() { return retreive('/users/logged-in'); },
  all() { return retreive('/users/all'); },
};

export default api;
