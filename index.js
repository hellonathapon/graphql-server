const express = require("express");
const port = process.env.PORT || 5000;
const { ApolloServer } = require("Apollo-server-express");
const { typeDefs, resolvers } = require("./graphql");
const mongoose = require("mongoose");
require("dotenv").config();

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    graphiql: true,
  });

  await server.start();

  // apply Apollo server to Express instance.
  server.applyMiddleware({ app });

  // mongoose connection
  const url = `mongodb+srv://${process.env.DB_USR_NAME}:${process.env.DB_USR_PWD}@cluster0.3dmkv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Successfully connected database`);
  } catch (err) {
    console.error(err);
  }

  app.listen(port, () =>
    console.log(`🚀 Server is running on port ${port}${server.graphqlPath}`)
  );
};
startServer();
