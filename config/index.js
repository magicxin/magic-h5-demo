'use strict'
const path = require('path')

module.exports = {
  asset: 'http://192.168.201.111:3000',
  dev: {
    host: '0.0.0.0',
    port: 8082,
    autoOpenBrowser: false
  },
  build: {
    assetsSubDirectory: 'static',
    assetsRoot:  path.resolve(__dirname, '../native')
  }
}
