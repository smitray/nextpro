import { port, host } from 'cfg';

import reporter from './logger';
import dbConfig from './database';
import app from './server';

let db;
let server;
const start = async () => {
  try {
    const { connection } = await dbConfig();
    server = app.listen(port, host, () => {
      if (process.env.NODE_ENV !== 'test') {
        reporter.info('Server is up and running', {
          host: server.address().address,
          port: server.address().port,
          database: `${connection.host}:${connection.port}/${connection.name}`
        });
      }
    });
    db = connection;
  } catch (err) {
    reporter.error('Server setup failed', err);
    throw new Error(err);
  }
};

const stop = async () => {
  await db.close();
  await server.close();
};

start();

export {
  start,
  stop
};
