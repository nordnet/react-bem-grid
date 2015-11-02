var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DEBUG = process.env.NODE_ENV !== 'production';

var plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new HtmlWebpackPlugin({
    title: 'React BEM grid documentation',
    minify: false,
  }),
];

if (DEBUG) {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        DEBUG: DEBUG
      }
    })
  );
} else {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.NoErrorsPlugin()
  );
}

module.exports = plugins;
