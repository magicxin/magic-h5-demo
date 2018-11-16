'use strict'
process.env.NODE_ENV = 'production'
const webpack = require('webpack')
const webpackConfig = require('./webpack.prod')
const rm = require('rimraf')
const path = require('path')
const config = require('../config')
const chalk = require('chalk')

rm(path.join(config.assetsRoot, config.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    if (err) throw err
//  if (err) {
//    console.error(err.stack || err);
//    if (err.details) {
//      console.error(err.details);
//    }
//    return;
//  }
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    const info = stats.toJson();

    if (stats.hasErrors()) {
      console.error(info.errors);
    }

//  if (stats.hasWarnings()) {
//    console.warn(info.warnings);
//  }
    // 记录结果...
    console.log(chalk.cyan('  Build complete.\n'))
  });
})

