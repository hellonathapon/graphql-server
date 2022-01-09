const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Tank {
    _id: ID!
    name: String
    type: String
    placeOfOrigin: String
    imgUrl: String
    serviceHistory: ServiceHistory
    specifications: Specifications
    armament: Armament
  }
  type ServiceHistory {
    producedYear: String
    manufacturer: String
  }
  type Specifications {
    mass: String
    length: String
    width: String
    height: String
    crew: Int
    engine: String
    power: String
    operationalRange: String
    maximumSpeed: String
  }
  type Armament {
    mainArmament: String
    secondArmament: String
  }
  type Query {
    getAllTanks: [Tank!]
    getTank(name: String!): Tank
    getTanksByCountry(name: String!): [Tank]
    getTanksByType(name: String!): [Tank]
  }
  # type Mutation {
  # }
`;

module.exports = typeDefs;
