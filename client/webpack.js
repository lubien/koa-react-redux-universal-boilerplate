const webpack = require('webpack');
const path = require('path');
const config = require('../server/config');

const entry = [
  path.join(__dirname, './entry.js'),
];

const output = {
  path: path.join(__dirname, '../public/scripts/'),
  filename: 'bundle.js',
};

const plugins = [];

if (config.is.dev) {
  entry.unshift('webpack/hot/only-dev-server');
  entry.unshift(`webpack-dev-server/client?${config.WEBPACK_BASE_URL}/`);

  output.publicPath = `${config.WEBPACK_BASE_URL}/`;

  plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (config.is.prod) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
  plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"',
  }));
}

module.exports = {
  entry, plugins, output,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
