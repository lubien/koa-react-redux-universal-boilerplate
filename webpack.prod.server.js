const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const ExternalsPlugin = require('webpack-externals-plugin');

module.exports = {
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
  },
  devtool: false,
  entry: path.join(__dirname, './server/app.js'),
  output: {
    path: path.join(__dirname, './build/'),
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.jsx?/,
        loader: 'babel',
      },
      {
        test: /\.json/,
        loader: 'json',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new ExternalsPlugin({
      type: 'commonjs',
      include: path.join(__dirname, './node_modules/'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};
