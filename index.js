const express = require("express");
const port = process.env.PORT || 5000;
const { ApolloServer } = require("Apollo-server-express");

const startServer = async () => {
  const app = express();
  app.listen(port, () =>
    console.log(`Server is running on port ${port}/graphql`)
  );
};
startServer();
