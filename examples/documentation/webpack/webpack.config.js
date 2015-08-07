var path = require('path');
var util = require('util');
var webpack = require('webpack');

var pkg = require('./../package.json');

var port = pkg.config.dev_server.port;
var host = pkg.config.dev_server.host;

var DEBUG = process.env.NODE_ENV !== 'production';

var entry = [
  './index',
];

if (DEBUG) {
  entry.push(
    'webpack-dev-server/client?' + util.format('http://%s:%d', host, port),
    'webpack/hot/only-dev-server');
}

var plugins = require('./plugins');

module.exports = {
  context: path.join(__dirname, './../src'),
  devtool:  DEBUG ? 'inline-source-map' : 'hidden-source-map',
  entry: entry,
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: plugins,
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
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  }
};
