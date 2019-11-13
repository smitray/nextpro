module.exports = {
  development: {
    port: 3001,
    host: '127.0.0.1',
    mongodb: {
      uri: 'mongodb://localhost',
      db: 'lumble',
      port: 27017
    }
  },
  production: {
    port: 3002,
    host: '127.0.0.1',
    mongodb: {
      uri: 'mongodb://localhost',
      db: 'lumble',
      port: 27017
    }
  },
  test: {
    port: 3000,
    host: '127.0.0.1',
    mongodb: {
      uri: 'mongodb://localhost',
      db: 'lumble',
      port: 27017
    }
  }
};