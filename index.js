import { GraphQLServer } from "graphql-yoga";
import { getMovie } from "./graphql/db";
import resolver from "./graphql/resolver";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers: resolver,
});
server.start(() => console.log(" ✅  server is running"));

