import Koa from 'koa';
import http from 'http';
import socket from 'socket.io';
import next from 'next';
import Router from 'koa-router';

import {
  port,
  host,
  path
} from 'cfg';

import conf from '../../next.config';

import reporter from './logger';
import dbConfig from './database';
import serverConfig from './server';

const nextApp = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: path.client,
  conf
});
const handle = nextApp.getRequestHandler();
const app = new Koa();
const server = http.createServer(app.callback());
const io = socket(server);
app.io = io;
const cRouter = new Router();

(async () => {
  try {
    await nextApp.prepare();
    const db = await dbConfig();
    const { connections } = db;
    serverConfig(app);
    cRouter.all('*', async (ctx) => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
    });
    app.use(async (ctx, nxt) => {
      ctx.res.statusCode = 200;
      await nxt();
    });
    app.use(cRouter.routes());
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
