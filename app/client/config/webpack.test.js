import webpack from 'webpack';
import path from 'path';

const commonConfig = {
  resolve: {
    // root: path.join(__dirname, 'bower_components'),
    extensions: ['', '.js', '.json', '.jsx', '.css', '.scss'],
    alias: {
      client: path.join(__dirname, '../'),
      common: path.join(__dirname, '../common'),
      cc: path.join(__dirname, '../common/components'),
      modules: path.join(__dirname, '../modules'),
      utils: path.join(__dirname, '../utils'),
      fw: path.join(__dirname, '../modules/framework'),
      blog: path.join(__dirname, '../modules/blog'),
      example: path.join(__dirname, '../modules/example'),
      admin: path.join(__dirname, '../modules/admin'),
      auth: path.join(__dirname, '../modules/auth'),
      request: path.join(__dirname, '../utils/request'),
    }
  },
  devtool: 'inline-source-map',
  externals: {
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  module: {
    noParse: [
      path.join(__dirname, "../node_modules", "codemirror/mode/rpm/changes/index.html"),
      path.join(__dirname, "../node_modules", "emmet-codemirror/dist"),
      path.join(__dirname, "../node_modules", "to-markdown/dist/to-markdown.js")
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        include: [path.join(__dirname, '../'), path.join(__dirname, 'config')],
        exclude: [path.join(__dirname, '../node_modules'), path.join(__dirname, '../vendor')]
      }, {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=2&localIdentName=[local]!autoprefixer-loader'
      }
    ]
  }
};
export default commonConfig;
