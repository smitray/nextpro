import convert from 'koa-convert';
import cors from '@koa/cors';
import bodyParser from 'koa-body';
import helmet from 'koa-helmet';
import serve from 'koa-static';
import mount from 'koa-mount';
import IO from 'koa-socket-2';

import {
  SERVER_SECRET,
  path,
  graphql
} from 'cfg';

import { logger } from './logger';
import graphControl from './graphQl';
import apiControl from './restApi';

import { catchErr, statusMessage } from './error';

export default (app) => {
  app.keys = SERVER_SECRET.split(',');
  app.proxy = true;

  if (process.env.NODE_ENV !== 'test') {
    app.use(logger);
  }

  app.use(convert.compose(
    catchErr,
    cors(),
    statusMessage
  ));

  if (process.env.NODE_ENV === 'development') {
    app.use(mount('/public', serve(path.static)));
  }

  if (graphql) {
    graphControl(app);
  } else {
    app.use(convert.compose(
      bodyParser({
        multipart: true,
        formLimit: '200mb'
      }),
      helmet(),
    ));
    apiControl(app);
  }

  const socket = new IO();
  socket.attach(app);
};
