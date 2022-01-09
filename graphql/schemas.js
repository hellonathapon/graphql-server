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
    getAllTanks: [Tank!] # Expect all available data
    getTank(name: String!): Tank #Filter specific tank
    getTanksByCountry(name: String!): [Tank] # Filter by country
    getTanksByType(name: String!): [Tank] # Filter by type
  }
  # type Mutation {
  # }
`;

module.exports = typeDefs;
