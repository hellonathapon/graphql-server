const Tank = require("../models/Tank");
const { UserInputError } = require("apollo-server-express");

const resolvers = {
  Query: {
    getAllTanks: async function () {
      try {
        const r = await Tank.find();
        return r;
      } catch (e) {
        console.error(e);
        throw new Error(e);
      }
    },
    getTank: async function (_, { name }) {
      // No need to check for name parameter passing along since schema is shaped and validate itself from graphql.
      try {
        const d = await Tank.findOne({ name: name });
        return d;
      } catch (e) {
        throw new Error(e);
      }
    },
    getTanksByCountry: async function (_, { name }) {
      try {
        const d = await Tank.find({ placeOfOrigin: name });
        return d;
      } catch (e) {
        throw new Error(e);
      }
    },
    getTanksByType: async function (_, tankType) {
      try {
        const d = await Tank.find({ type: tankType });
        return d;
      } catch (e) {
        throw new Error(e);
      }
    },
  },
  /* Mutation: {
    TODO: for adding image algorithm
    first you must check and save image in The Server file system if it's succeed than
    generate and save relative path in database
    dev and prod for saving image path must be different
  } */
};

module.exports = resolvers;
