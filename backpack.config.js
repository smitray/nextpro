const path = require('path');

module.exports = {
  webpack: (config) => {
    config.entry.main = './system/core/index.js';
    // config.resolve.alias = {
    //   cfg: path.join(__dirname, './config'),
    //   graph: path.join(__dirname, './app/server/graph'),
    //   util: path.join(__dirname, './app/server/utilities'),
    //   middleware: path.join(__dirname, './app/server/middlewares'),
    //   api: path.join(__dirname, './app/server/rest')
    // };
    return config;
  }
};
