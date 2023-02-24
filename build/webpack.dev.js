const webpack = require('webpack');
const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 9000,
    open: true,
  },
});