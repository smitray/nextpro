import { close } from './system/core/server';

export default async () => {
  await close();
  global.httpServer = null;
};
