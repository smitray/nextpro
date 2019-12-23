const path = require('path');

module.exports = {
  webpack: (config) => {
    config.entry.main = './core/index.js';
    return config;
  }
};
