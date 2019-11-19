import server from './system/core/server';

export default async () => {
  global.httpServer = await server();
};
