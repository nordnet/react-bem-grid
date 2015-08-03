var path = require('path');
var util = require('util');
var webpack = require('webpack');

var pkg = require('./../package.json');

var port = pkg.config.dev_server.port;
var host = pkg.config.dev_server.host;

module.exports = {
  context: path.join(__dirname, '../src'),
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?' + util.format('http://%s:%d', host, port),
    'webpack/hot/only-dev-server',
    './index',
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    alias: {
      'react-bem-grid': path.join(__dirname, '../../../dist'),
      'react': path.join(__dirname, '../node_modules/react'),
    },
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, '../../../dist'),
    }, {
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, '../src'),
    }]
  }
};
