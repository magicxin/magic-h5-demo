'use strict'
process.env.NODE_ENV = 'development'
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.js')
const config = require('../config')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const server = require('./server.js')
const devConfig = merge(baseConfig, {
  mode: 'development',
  devServer: {
    clientLogLevel: 'warning', // 控制浏览器展示级别
    host: HOST || config.host,
    port: PORT || config.port,
    open: config.autoOpenBrowser,
    hot: true,
    quiet: true,
//  before(app) {
//  	server(app)
//  },
    proxy: {
      '/headline': {
        target: config.origin, //目标接口域名
        changeOrigin: true, //是否跨域
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devConfig.devServer.host}:${port}`],
        },
        onErrors: config.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devConfig)
    }
  })
})