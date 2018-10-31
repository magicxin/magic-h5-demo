'use strict'
const webpack = require('webpack')
const webpackConfig = require('./webpack.prod')
const rm = require('rimraf')
const path = require('path')
const config = require('../config')
const chalk = require('chalk')
process.env.NODE_ENV = 'production'

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      return;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
      console.error(info.errors);
    }

    if (stats.hasWarnings()) {
      console.warn(info.warnings);
    }
    // 记录结果...
    console.log(chalk.cyan('  Build complete.\n'))
  });
})

