// eslint-disable import/no-extraneous-dependencies
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.common');

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
});
