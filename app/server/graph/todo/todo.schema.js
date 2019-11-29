import { gql } from 'apollo-server-koa';

const todoDefs = gql`

  type todo {
    _id: String,
    content: String,
    done: Boolean
  }

  extend type Query {
    todos: [todo],
    todo(_id: String!): todo
  }

  type Mutation {
    todoCreate(
      content: String!
    ): todo
    todoUpdate(
      _id: String!,
      content: String!
    ): todo
    todoDelete(
      _id: String!
    ): todo
    todoToggle(
      _id: String!
    ): todo
  }

`;

export default todoDefs;
