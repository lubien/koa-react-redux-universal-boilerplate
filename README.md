# Koa React Redux Universal Boilerplate

A fullstack Koa + React + Redux Universal Boilerplate to speed up your development process.

At first was just a simple boilerplate for my next projects on [FreeCodeCamp](https://www.freecodecamp.com), but that escalated quickly.

## Features

* Koa 2 supporting `async-await` with Babel.
* Redux.
* React.
* React Router
* Universal rendering.
* Redux Devtools
* Dirty deeds done dirt cheap.

## Getting Started

Copy `.env.sample` to `.env` and edit as you need.

### Development

For development, you just need `MONGO_URL` and `GITHUB_CLIENT_(ID|SECRET)` env vars.

Run `npm run dev-server` and `npm run dev-client` in separate terminals so you'll the Koa and Webpack servers.

Dev-server uses `nodemon` to restart the server everytime you change some server stuff. Webpack does the same on the client, so no need to `F5` your life.

Now you can open `http://localhost:3000/`.

For a better experience, use [zalmoxisus/redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension#implementation) so you can see Redux's current state.

### Production

We are using `babel-node` and `webpack-dev-server` for development, but they are a no go for production. The solution was simple: build everything. We build our server into a `build/` folder and our client to `public/scripts/bundle.js`.

The build is made right after `npm install` so, let's say you use a PaaS like Heroku. After each commit the system will be rebuilt. Awesome ;)

Two important env vars you should look are `BASE_URL` and `SUPPORT_HTTPS`. `BASE_URL` uses the model `https://example.com` (no stripe at end). Why? Github auth callback needs your URL match exactly in both your server and in your app Github's config. `SUPPORT_HTTPS` is a bool value.

## License

[MIT](LICENSE.md)
