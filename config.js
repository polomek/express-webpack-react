const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  isProduction,
  serverPort: isProduction ? process.env.PORT : 3000,
  publicPath: path.resolve(__dirname, 'public')
};
