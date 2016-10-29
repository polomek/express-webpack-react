const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const {
  isProduction,
  serverPort,
  publicPath
} = require('../config');
const webpackConfig = require('../webpack.config');
const greetingRoute = require('./routes/Greeting');

const routes = (server) => {
  server.get('/greeting', greetingRoute);
};

const devMiddleware = (server) => {
  if(!isProduction) {
    const compiler = webpack(webpackConfig);
    const middleware = webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
      }
    });

    server.use(middleware);
    server.use(webpackHotMiddleware(compiler));
  }
};

module.exports = () => {
  const server = express();

  routes(server);
  devMiddleware(server);

  server.use(express.static(publicPath));
  server.listen(serverPort, () => {
    console.info(
      'server listening on port: %d, production: %s',
      serverPort,
      isProduction ? 'true' : 'false'
    );
  });
};
