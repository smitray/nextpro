const path = require('path');

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    'node': true,
    'browser': true
  },
  extends: [
    '@chiedolabs/eslint-config-nextjs',
    'plugin:jest/recommended'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              cfg: path.join(__dirname, './config'),
              graph: path.join(__dirname, './app/server/graph'),
              util: path.join(__dirname, './app/server/utilities'),
              middleware: path.join(__dirname, './app/server/middlewares'),
              api: path.join(__dirname, './app/server/rest'),
              app: path.join(__dirname, './app'),
              core: path.join(__dirname, './core'),
              components: path.join(__dirname, './app/client/components')
            }
          }
        }
      }
    }
  },
  globals: {
    "shallow": false,
    "render": false,
    "mount": false,
    "page": false
  },
  rules: {
    'comma-dangle': [
      'error', {
        'functions': 'ignore'
      }
    ],
    'no-param-reassign': [
      'error', {
        'props': false
      }
    ],
    'no-underscore-dangle': [
      'error', {
        'allow': [
          '_id'
        ]
      }
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};