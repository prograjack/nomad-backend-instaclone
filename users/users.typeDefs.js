import { gql } from "apollo-server-core";

export default gql`
type User {
  id: String!
  username: String!
  email:  String!
  name: String
  location:  String
  password: String!
  avatarURL: String
  githubUsername: String
}
type Query {
    seeProfile(username: String!) : User
}
type Mutation {
    createAccount(username: String!, email:  String!, password: String!): User
}
`;