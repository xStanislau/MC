// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.common');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    publicPath: '/',
    historyApiFallback: true,
    open: true,
    hot: true,
  },
});
