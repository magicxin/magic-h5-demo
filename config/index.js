'use strict'
const path = require('path')

module.exports = {
  dev: {
    host: '0.0.0.0',
    port: 8082,
    autoOpenBrowser: false
  },
  build: {
    assetsSubDirectory: 'static',
    assetsRoot:  path.resolve(__dirname, '../dist')
  }
}
