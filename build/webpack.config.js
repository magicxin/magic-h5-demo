const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('../config')

module.exports = {
  entry: {
    main:'./src/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,'../native')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
          limit: 10000,
//          name: utils.assetsPath('media/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
          limit: 10000,
//          name: utils.assetsPath('media/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
        	loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader','sass-loader',{
          loader: 'sass-resources-loader',
          options: {
             resources: path.resolve(__dirname,'../src/css/common.scss'),
          }
        }]
      },
    ]
  },
  resolve: {
    alias: {
      'vue$':'vue/dist/vue.js',
      '@':path.resolve(__dirname,'../src'),
      'pages':path.resolve(__dirname,'../src/pages'),
      'css':path.resolve(__dirname,'../src/css'),
      'assets':path.resolve(__dirname,'../src/assets'),
      'components':path.resolve(__dirname,'../src/components'),
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html'
    })
  ]
}
