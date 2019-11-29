import { merge } from 'lodash';

/* INJECT_IMPORT */
import { todoDefs, todoResolvers } from './todo';

export const graphDefs = [
  /* INJECT_DEFS */
  todoDefs
];


export const resolvers = merge(
  /* INJECT_RESOLVERS */
  todoResolvers
);
