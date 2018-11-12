'use strict'
const path = require('path')

module.exports = {
  env: process.env.NODE_ENV==='production'?'build':'dev',
  dev: {
//  origin: 'http://magix.xyz:3000',
    origin: 'http://192.168.201.111:3000',
    host: '0.0.0.0',
    hostname: 'http://192.168.201.111',
    port: 8082,
    autoOpenBrowser: false
  },
  build: {
    origin: 'http://magix.xyz:3000',
    hostname: 'http://magix.xyz',
    port: 3000,
    assetsSubDirectory: 'static',
    assetsRoot:  path.resolve(__dirname, '../native'),
    index: 'index.html'
  }
}
