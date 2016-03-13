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
  output: {
    path: path.join(__dirname, '../../../build'),
    filename: '[name].js',
    publicPath: '/build/'
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
      }, {
        test: /\.(sass|scss)$/,
        loader: 'style-loader!css-loader?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]!autoprefixer-loader!sass-loader',
        exclude: [path.join(__dirname, '../common/style')]
      }, {
        test: /\.(sass|scss)$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader',
        include: [path.join(__dirname, '../common/style')]
      }, {
        test: /\.less$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=8192&name=resource/img/[hash].[ext]'
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&name=resource/font/[hash].[ext]&minetype=application/font-woff'
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=resource/font/[hash].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    // 打包公共库
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   filename: 'vendor.js'
    // }),
    // bower 文件
    // new webpack.ResolverPlugin(
    //   new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    // ),
    // 全局变量
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      cx: 'classname',
      config: path.join(__dirname, './config')
    })
  // css 文件单独打包
  // new ExtractTextPlugin('style.css', {
  //     allChunks: true
  // }),
  ]
};
export default commonConfig;
