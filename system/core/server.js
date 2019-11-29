import Koa from 'koa';
import next from 'next';
import Router from 'koa-router';

import { path } from 'cfg';

import conf from '../../next.config';

import reporter from './logger';
import serverConfig from './middleware';

const nextApp = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: path.client,
  conf
});
const handle = nextApp.getRequestHandler();
const app = new Koa();
serverConfig(app);
const cRouter = new Router();

if (process.env.NODE_ENV !== 'test') {
  (async () => {
    try {
      await nextApp.prepare();
      cRouter.all('*', async (ctx) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
      });
      app.use(async (ctx, nxt) => {
        ctx.res.statusCode = 200;
        await nxt();
      });
    } catch (error) {
      reporter.error('Next.js setup failed', error);
      throw new Error(error);
    }
  })();
}

app.use(cRouter.routes());

export default app;
