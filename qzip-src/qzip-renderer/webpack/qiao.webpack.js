'use strict';

// alias
var alias = require('./alias.js');

// dev
var dev = require('./dev.js');

// entry
var entry = require('./entry.js');

// output
var output = require('./output.js');

// plugins
var plugins = require('./plugins.js');

// optimization
var optimization = require('./optimization.js');

/**
 * qiao.webpack.js
 */
module.exports = {
  devServer   : dev,
  entry       : entry,
  output      : output,
  plugins     : plugins,
  resolve     : {
    alias: alias,
  },
  optimization: optimization,
};