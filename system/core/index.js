import { port, host } from 'cfg';

import reporter from './logger';
import dbConfig from './database';
import serverConfig from './server';

const start = async () => {
  try {
    const { connections } = await dbConfig();
    const { server } = await serverConfig();
    server.listen(port, host, () => {
      reporter.info('Server is up and running', {
        host: server.address().address,
        port: server.address().port,
        database: `${connections[0].host}:${connections[0].port}/${connections[0].name}`
      });
    });
  } catch (err) {
    reporter.error('Server failed to start', err);
  }
};

start();
