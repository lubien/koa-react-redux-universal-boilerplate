const webpack = require('webpack');
const path = require('path');
const config = require('./server/config');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?${config.WEBPACK_BASE_URL}/`,
    'webpack/hot/only-dev-server',
    path.join(__dirname, './client/entry.js'),
  ],
  output: {
    path: path.join(__dirname, './public/scripts/'),
    filename: 'bundle.js',
    publicPath: `${config.WEBPACK_BASE_URL}/`,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        plugins: ['react-hot-loader/babel'],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.isClient': 'true',
    }),
  ],
};
