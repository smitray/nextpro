import { start, stop } from 'core';

const sum = (a, b) => a + b;

describe('Todo testing suit', () => {
  beforeAll(async () => {
    await start();
  });
  afterAll((done) => {
    stop(done);
  });

  test('Adding 1 + 1 equals 2', () => {
    expect(sum(1, 1)).toBe(2);
  });
});
