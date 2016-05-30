const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, './client/entry.js'),
  output: {
    path: path.join(__dirname, './public/scripts/'),
    filename: 'bundle.js',
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
  ],
};
