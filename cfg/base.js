'use strict';
let path = require('path');
let defaultSettings = require('./defaults');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];

let requiredFiles = [
  path.join(npmBase, 'material-design-lite/material.min.js'),
  path.join(npmBase, 'material-design-lite/material.min.css'),
  path.join(__dirname, '../src/sources/demo.css'),
]

let additionalPaths = [];

module.exports = {
  additionalPaths: additionalPaths,
  requiredFiles: requiredFiles,
  port: defaultSettings.port,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: defaultSettings.publicPath
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false
  },
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.jsx', '.json'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, '../node_modules')
    ],
    alias: {
      actions: `${defaultSettings.srcPath}/actions/`,
      components: `${defaultSettings.srcPath}/components/`,
      sources: `${defaultSettings.srcPath}/sources/`,
      stores: `${defaultSettings.srcPath}/stores/`,
      styles: `${defaultSettings.srcPath}/styles/`,
      lib: `${defaultSettings.libPath}/`,
      config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV
    }
  },
  sassLoader: {
    // data: '@import "styles/_config.scss";',
    includePaths: [path.resolve(__dirname, '../src/components')]
  },
  module: {}
};
