import webpack from 'webpack';
import common from './webpack.common';
import path from 'path';
import config from './config';

module.exports = {
  entry: {
    app: [
      `webpack-dev-server/client?http://${config.host}:${config.port}`,
      'webpack/hot/only-dev-server',
      './app/client/entry.js'
    ]
  },
  output: {
    path: path.join(__dirname, '../../../build'),
    filename: '[name].js',
    publicPath: `/build/`
  },
  resolve: common.resolve,
  module: {
    noParse: common.module.noParse,
    loaders: [
      ...common.module.loaders,
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        include: [path.join(__dirname, '../'), path.join(__dirname, 'config')],
        exclude: [path.join(__dirname, '../node_modules'), path.join(__dirname, '../vendor')]
      }
    ]
  },
  devtool: 'cheap-eval-source-map',
  plugins: [
    ...common.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      'process.env.BABEL_ENV': '"development"'
    })
  ]
};
