const dotenv = require('dotenv');
const _ = require('lodash');
const base = require('./base');
const paths = require('./paths');
const env = require('./env');

const result = dotenv.config();
if (result.error) {
  throw new Error(result.error);
}

var envs = result.parsed;

const vars = {
  ...envs,
  ..._.merge(env[process.env.NODE_ENV], base),
  ...paths
};
module.exports = vars;
