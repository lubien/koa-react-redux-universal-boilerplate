const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const vendors = fs.readdirSync(path.resolve(__dirname, './node_modules'))
  .map((ext, mod) => {
    ext[mod] = `commonjs ${mod}`;
    return ext;
  }, {});

module.exports = {
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
  },
  devtool: false,
  entry: path.join(__dirname, './server/app.js'),
  externals: vendors,
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
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};
