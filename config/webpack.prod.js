const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: { output: { comments: false }}
      })
    ]
  },
  performance: {
    maxEntrypointSize: 90000,
    maxAssetSize: 90000
  },
  plugins: [ new CleanWebpackPlugin() ]
});