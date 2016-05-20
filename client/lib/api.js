import 'isomorphic-fetch';

function retreive(url, reqOpts = {}) {
  const opts = Object.assign({
    credentials: 'same-origin',
  }, reqOpts);

  return fetch(`/api${url}`, opts).then(r => r.json());
}

const api = {};

api.users = {
  loggedIn() { return retreive('/users/logged-in'); },
};

export default api;
