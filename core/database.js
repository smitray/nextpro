import mongoose from 'mongoose';

import {
  mongodb,
  DB_USER,
  DB_PASSWORD
} from 'cfg';

import reporter from './logger';

export default () => {
  mongoose.connect(
    `${mongodb.uri}:${mongodb.port}/${mongodb.db}`, {
      ...mongodb.options,
      user: DB_USER,
      pass: DB_PASSWORD
    }
  );
  return new Promise((resolve, reject) => {
    mongoose.connection
      .on('error', (error) => {
        reporter.error('Database did not connect', error);
        reject(error);
      });
    resolve(mongoose);
  });
};
