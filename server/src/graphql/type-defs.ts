import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Character {
    id: ID!
    type: String!
    name: String!
    status: String!
    species: String!
    # gender: String!
    url: String!
    episode: [String!]!
    location: String!
    image: String!
    # origin: {
    #   name: String!
    #   url: String!
    # }
    thumbNailUrl: String!
    bestSentences: String!
  }

  type Location {
    id: ID!
    name: String!
  }

  type Query {
    characters: [Character!]!
    character(id: ID!): Character!
    characterLocation: [Location!]!
  }

  input CharacterInput {
    id: ID!
    type: String
    name: String!
    species: String!
    location: String!
    bestSentences: String!
    thumbNailUrl: String!
  }

  type Mutation {
    deleteCharacter(id: ID!): Boolean
    saveCharacter(character: CharacterInput!): Boolean
  }
`;
