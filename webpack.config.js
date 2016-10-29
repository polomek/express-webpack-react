const webpack = require('webpack');
const path = require('path');

const {isProduction} = require('./config');

const buildPath = path.resolve(__dirname, 'public', 'build');
const appEntryPath = path.resolve(__dirname, 'client', 'App.jsx');
const modulesPath = path.resolve(__dirname, 'client');

const webpackConfig = {
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    root: modulesPath,
    extensions: [
      '', '.webpack.js', '.web.js', '.js', '.jsx'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /(node_modules)\//,
        query: {
          presets: [
            'react',
            'es2015'
          ]
        }
      }
    ]
  },
};

if(isProduction) {
  webpackConfig.entry = [
    appEntryPath
  ];

  webpackConfig.plugins = [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ];
} else {
  webpackConfig.devtool = 'inline-source-map';

  webpackConfig.entry = [
    'webpack-hot-middleware/client?reload=true',
    appEntryPath
  ];

  webpackConfig.plugins = [
    new webpack.HotModuleReplacementPlugin()
  ];
}

module.exports = webpackConfig;
