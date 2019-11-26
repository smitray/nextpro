import Koa from 'koa';
import http from 'http';
import socket from 'socket.io';
import next from 'next';
import Router from 'koa-router';

import { path } from 'cfg';

import conf from '../../next.config';

import reporter from './logger';
import serverConfig from './middleware';

export default async () => {
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
  try {
    serverConfig(app);
    await nextApp.prepare();
    cRouter.all('*', async (ctx) => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
    });
    app.use(async (ctx, nxt) => {
      ctx.res.statusCode = 200;
      await nxt();
    });
    app.use(cRouter.routes());
    return {
      app,
      server
    };
  } catch (error) {
    reporter.error('Server setup failed', error);
    throw new Error(error);
  }
};
