import { gql } from "apollo-server-core";

export default gql`
type Movie {
    id: Int!
    title: String!
    year: Int!
    genre: String
    createdAt: String!
    updatedAt: String!
}
type Query {
movies: [Movie]
movie: Movie
}
type Mutation {
createMovie(title: String!, year: Int!, genre: String!): Boolean
deleteMovie(title: String!): Movie
updateMovie(id: Int!, year: Int!): Movie
}
`;