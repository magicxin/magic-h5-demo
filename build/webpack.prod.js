const merge = require('webpack-merge')
const baseConfig = require('./webpack.config')

const prodConfig = merge(baseConfig, {
  mode: 'production'
})

module.exports = prodConfig
