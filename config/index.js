'use strict'
const path = require('path')

const build = {
    origin: 'http://magix.xyz:3000',
    hostname: 'http://magix.xyz:3000',
    assetsSubDirectory: 'static',
    assetsRoot:  path.resolve(__dirname, '../native'),
    index: 'index.html'
  }
const dev = {
    origin: 'http://magix.xyz:3000',
//  origin: 'http://192.168.201.111:3000',
    host: '0.0.0.0',
    hostname: '',
    port: 8082,
    autoOpenBrowser: false,
    assetsSubDirectory: 'static',
    assetsRoot:  path.resolve(__dirname, '../native'),
    index: 'index.html'
  }

module.exports = process.env.NODE_ENV==='production' ? build : dev
