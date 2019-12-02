import { start, stop } from 'core';
import { ApolloClient } from 'util';
import { gql } from 'apollo-server-koa';
import todoService from './todo.service';

const client = ApolloClient();
let id;
const todo = 'This is a test data';
describe('Todo testing suit', () => {
  beforeAll(async () => {
    await start();
  });
  afterAll(async (done) => {
    await todoService.deleteMany({});
    stop(done);
  });

  it('[Todo:] Should create a todo', async () => {
    const variables = {
      content: todo
    };
    const response = await client.mutate({
      mutation: gql`
        mutation($content: String!) {
          todoCreate(
            content: $content
          ) {
            _id
            content
          }
        }
      `,
      variables
    });
    id = response.data.todoCreate._id;
    expect(response.data.todoCreate.content).toBe(todo);
  });

  it('[Todo:] Should get specific todo', async () => {
    const variables = {
      _id: id
    };
    const response = await client.query({
      query: gql`
        query($_id: String!) {
          todo(_id: $_id) {
            _id
            content
          }
        }
      `,
      variables
    });
    expect(response.data.todo._id).toBe(id);
    expect(response.data.todo.content).toBe(todo);
  });

  it('[Todo:] Should update specific todo', async () => {
    const content = 'Hi, I am Smit Ray';
    const variables = {
      _id: id,
      content
    };
    const response = await client.mutate({
      mutation: gql`
        mutation($content: String!, $_id: String!) {
          todoUpdate(
            content: $content,
            _id: $_id
          ) {
            _id
            content
          }
        }
      `,
      variables
    });
    expect(response.data.todoUpdate.content).toBe(content);
    expect(response.data.todoUpdate._id).toBe(id);
  });

  it('[Todo:] Should delete a specific todo', async () => {
    const variables = {
      _id: id
    };
    const response = await client.mutate({
      mutation: gql`
        mutation($_id: String!) {
          todoDelete(
            _id: $_id
          ) {
            _id
            content
          }
        }
      `,
      variables
    });
    expect(response.data.todoDelete._id).toBe(id);
  });

  it('[Todo:] Should return empty todo', async () => {
    const response = await client.query({
      query: gql`
        query{
          todos{
            content
          }
        }
      `
    });
    expect(response.data.todos.length).toBe(0);
  });
});
