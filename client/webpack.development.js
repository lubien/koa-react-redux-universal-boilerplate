const path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, './entry.js'),
  ],
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
  output: {
    path: path.join(__dirname, '../public/scripts/'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
