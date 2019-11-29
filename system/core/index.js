import { port, host } from 'cfg';

import reporter from './logger';
import dbConfig from './database';
import app from './server';

let db;
const start = async () => {
  try {
    const { connection } = await dbConfig();
    const server = app.listen(port, host, () => {
      reporter.info('Server is up and running', {
        host: server.address().address,
        port: server.address().port,
        database: `${connection.host}:${connection.port}/${connection.name}`
      });
    });
    db = connection;
  } catch (err) {
    reporter.error('Server setup failed', err);
    throw new Error(err);
  }
};

const stop = async () => {
  await db.close();
};

start();

export {
  start,
  stop
};
