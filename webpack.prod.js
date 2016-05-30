const webpack = require('webpack');
const AssetsWebpackPlugin = require('assets-webpack-plugin');
const path = require('path');
const pkg = require('./package.json');

const vendors = Object.keys(pkg.dependencies)
  .filter(el => /(react|redux)/.test(el) && el.indexOf('babel') === -1);

const CHUNK_FILE_NAME = '[name].[chunkhash].js';

module.exports = {
  entry: {
    app: path.join(__dirname, './client/entry.js'),
    vendor: vendors,
  },
  output: {
    path: path.join(__dirname, './public/scripts/'),
    filename: CHUNK_FILE_NAME,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
          compact: false,
          plugins: [['module-alias', [
            { src: 'client/components', expose: 'components' },
            { src: 'client/reducers', expose: 'reducers' },
            { src: 'client/utils', expose: 'utils' },
          ]]],
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      'process.env.isClient': 'true',
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', CHUNK_FILE_NAME),
    new AssetsWebpackPlugin({
      filename: 'webpack.assets.json',
      path: __dirname,
    }),
  ],
};
