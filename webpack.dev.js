const webpack = require('webpack');
const path = require('path');
const config = require('./server/config');

module.exports = {
  entry: [
    `webpack-dev-server/client?${config.WEBPACK_BASE_URL}/`,
    'webpack/hot/only-dev-server',
    path.join(__dirname, './client/entry.js'),
  ],
  output: {
    path: path.join(__dirname, '../public/scripts/'),
    filename: 'bundle.js',
    publicPath: `${config.WEBPACK_BASE_URL}/`,
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
          plugins: [['resolver', {
            resolveDirs: ['./client'],
          }]],
        },
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
