import { Bristol } from 'bristol';
import palin from 'palin';
import { name } from 'cfg';

const reporter = new Bristol();

reporter.addTarget('console').withFormatter(palin, {
  rootFolderName: name.toLowerCase()
});

export default reporter;

export const logger = async (ctx, next) => {
  await next();

  const httpVersion = `${ctx.req.httpVersionMajor}.${ctx.req.httpVersionMinor}`;

  const responseLength = ctx.status === 204 ? 0 : ctx.response.length || -1;
  const reqInfo = `${ctx.method} ${ctx.url} HTTP/${httpVersion}`;
  const resInfo = `${ctx.status} ${responseLength}`;
  const referrer = ctx.headers.referer || ctx.headers.referrer || '-';
  const ua = ctx.headers['user-agent'] || '-';
  const headers = `"${referrer}" "${ua}"`;

  reporter.info(`${ctx.ips.length > 0 ? ctx.ips[ctx.ips.length - 1] : ctx.ip} - "${reqInfo}" ${resInfo} ${headers}`);
};
