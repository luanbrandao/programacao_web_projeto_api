import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import "./connection";
import { buildSchema } from "type-graphql";
import { BannerResolver } from "./banner/BannerResolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [BannerResolver],
    validate: false,
  });

  const server = new ApolloServer({ schema });

  server.listen({ port: 4100 }, console.log("Server is running port 4100"!));
}

bootstrap();
