import { gql } from 'apollo-server-koa';

const userAcoountDefs = gql`

  type userAcoount {
    _id: String
  }

  extend type Query {
    userAcoounts: [userAcoount],
    userAcoount: userAcoount
  }

  extend type Mutation {
    userAcoountCreate(

    ): userAcoount
    userAcoountUpdate(
      _id: String!
    ): userAcoount
    userAcoountDelete(
      _id: String!
    ): userAcoount
  }

`;

export default userAcoountDefs;
