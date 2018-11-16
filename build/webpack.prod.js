const merge = require('webpack-merge')
const path = require('path')
const config = require('../config')
const { assetsPath } = require('./utils')
const baseConfig = require('./webpack.config')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
// 使用mini-css-extract-plugin 代替 extract-text-webpack-plugin 并且 extract-text-webpack-plugin 在webpack4 需要使用beta版
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prodConfig = merge(baseConfig, {
  mode: 'production',
  output: {
    path: config.assetsRoot,
    filename: assetsPath('js/[name].[chunkhash].js'),
//  chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    chunkFilename: assetsPath('js/[name].[chunkhash].js')
  },
  optimization: {
    minimize: true,
    runtimeChunk: { // 一下两个对象取代了CommonChunkPlugin
      name: "manifest"
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -20,
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: config.assetsSubDirectory,
      ignore: ['.*']
    }]),
    new OptimizeCSSPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', {
          discardComments: {
            removeAll: true
          }
        }],
      },
      canPrint: true
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: assetsPath("css/[name].css")
      //    chunkFilename: "[id].css"
    })
  ]
})

module.exports = prodConfig