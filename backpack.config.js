const path = require('path');

module.exports = {
  webpack: (config) => {
    config.entry.main = './system/core/index.js';
    return config;
  }
};
