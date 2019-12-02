import 'cross-fetch/polyfill';
import ApolloBoost from 'apollo-boost';
import { port, host } from 'cfg';

export default (jwt) => new ApolloBoost({
  uri: `http://${host}:${port}/graphql`,
  request(operation) {
    if (jwt) {
      operation.setContext({
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });
    }
  }
});
