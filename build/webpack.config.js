const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('../config')
//const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let isDev = process.env.NODE_ENV==='development'?true:false
module.exports = {
  entry: {
    main:'./src/main.js'
  },
  output: {
    path: config.assetsRoot,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
//    {
//      test: /\.(sa|sc|c)ss$/,
//      use: [
//        process.env.NODE_ENV==='development' ? 'style-loader' : MiniCssExtractPlugin.loader,
//        'css-loader',
//        'postcss-loader',
//        'sass-loader',
//      ],
//    },
      {
        test: /\.(sa|c)ss$/,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
      },{
        test: /\.scss$/,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader,'css-loader','sass-loader',
        'postcss-loader',
        {
          loader: 'sass-resources-loader',
          options: {
             resources: path.resolve(__dirname,'../src/css/common.scss'),
          }
        }]
      },
//    {
//      test: /\.css$/,
//      use: ExtractTextPlugin.extract({
//        fallback: "style-loader",
//        use: "css-loader"
//      })
//    },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 10000,
            name: 'img/[name].[hash:7].[ext]'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 10000,
            name: 'fonts/[name].[hash:7].[ext]'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
        	loader: 'babel-loader'
        }
      }
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
      'utils': path.resolve(__dirname,'../src/utils'),
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: config.index,
      template: 'index.html'
    })
//  new ExtractTextPlugin("styles.css")
  ]
}
