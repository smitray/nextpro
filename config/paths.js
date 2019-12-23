const path = require('path');

module.exports = {
  path: {
    core: path.resolve(__dirname, '../core'),
    client: path.resolve(__dirname, '../app/client'),
    backend: path.resolve(__dirname, '../app/server'),
    public: path.resolve(__dirname, '../public'),
    static: path.resolve(__dirname, '../static')
  }
};
