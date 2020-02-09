import "dotenv/config";
import { ApolloServer } from "apollo-server-express/dist";
import mongoose from "mongoose";
import express from "express";

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { models } from "./models";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async () => ({
        models
    })
});

const app = express();

server.applyMiddleware({ app });

mongoose.connect(process.env.DATABASE_URI!, {
    useNewUrlParser: true,
    useFindAndModify: false
});

const port = 4000;
app.listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

process.on("exit", () => {
    server.stop();
    console.log("Process terminated");
});
