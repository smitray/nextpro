import {
  testAll,
  testSingle,
  testUpdate,
  testDelete,
  testCreate
} from './controller';

const baseUrl = '/api/test';

const routes = [
  {
    method: 'GET',
    route: '/',
    handlers: [
      testAll
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      testSingle
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      testUpdate
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      testDelete
    ]
  },
  {
    method: 'POST',
    route: '/',
    handlers: [
      testCreate
    ]
  }
];

export default {
  baseUrl,
  routes
};
