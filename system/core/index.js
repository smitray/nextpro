import Koa from 'koa';
import http from 'http';
import socket from 'socket.io';

import {
  port,
  host
} from 'cfg';

import reporter from './logger';
import dbConfig from './database';
import serverConfig from './server';

const app = new Koa();
const server = http.createServer(app.callback());
const io = socket(server);
app.io = io;

(async () => {
  try {
    const db = await dbConfig();
    const { connections } = db;
    serverConfig(app);
    server.listen(port, host);
    reporter.info('Server is up and running', {
      host,
      port,
      database: `${connections[0].host}:${connections[0].port}/${connections[0].name}`
    });
  } catch (error) {
    reporter.error('Server setup failed', error);
  }
})();

export default app;
