import { merge } from 'lodash';

/* INJECT_IMPORT */
import { accountDefs, accountResolvers } from './account';
import { userDefs, userResolvers } from './user';

export const graphDefs = [
  /* INJECT_DEFS */
  accountDefs,
  userDefs
];


export const resolvers = merge(
  /* INJECT_RESOLVERS */
  accountResolvers,
  userResolvers
);
