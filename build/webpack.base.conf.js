var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var utils = require('./utils')
var env = process.env.NODE_ENV;

  // check env & config/index.js to decide weither to enable CSS Sourcemaps for the
  // various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd;
var CopyWebpackPlugin = require('copy-webpack-plugin');
var externals = process.env.NODE_ENV === 'production' ? {
  'react': 'react',
  'classnames': 'classnames',
  'react-dom': 'react-dom',
  'noop':'noop',
  'smartphoto':'smartphoto',
  'object-assign':'object-assign',
  'prop-types':'prop-types',
} : {};

module.exports = {
  entry: {
    app: './src/dev.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx','.scss'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      React: path.resolve(__dirname, '../node_modules/react'),
      ReactDOM: path.resolve(__dirname, '../node_modules/react-dom'),
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  plugins:[
    new CopyWebpackPlugin([
      {
        from:'./src/components/style.scss',
        to:'./style.scss',
      }
    ]),
    new webpack.ProvidePlugin({
        'React': 'react',
        'ReactDOM': 'react-dom'
    }),
  ],
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  externals: externals,
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!autoprefixer-loader',
    },  {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
    }, {
      test: /\.(gif|jpg|png)\??.*$/,
      loader: 'url-loader?limit=8096&name=images/[name].[ext]'
    }, {
      test: /\.(woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?limit=8096&name=fonts/[name].[ext]'
    }, {
      test: /\.(html|tpl)$/,
      loader: 'html-loader'
    }, {
      test: /\.js|jsx$/,
      loaders: ["react-hot-loader/webpack",'babel-loader?presets[]=react,presets[]=es2015'],
      include: path.join(__dirname, 'js')
    }]
  }
}
