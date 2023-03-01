import express from 'express';
import http from 'http';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import { makeExecutableSchema } from '@graphql-tools/schema';
import cors from 'cors';
import mongoose from 'mongoose';

import { typeDefs, resolvers } from './schema/index.js';

import './firebaseConfig.js';
import 'dotenv/config';

import { authorizationJWT } from './middleware/index.js';

const app = express();
const httpServer = http.createServer(app);

const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.tiyn8zg.mongodb.net/test?authSource=admin&replicaSet=atlas-jay4b8-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`;
const PORT = process.env.PORT || 8000;

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
    typeDefs,
    resolvers,
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(cors(), authorizationJWT, bodyParser.json(), expressMiddleware(server));

mongoose.set('strictQuery', false);
mongoose
    .connect(URI)
    .then(async () => {
        console.log('Connected to DB');
        await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
        console.log(`App is listening on port ${PORT}`);
    })
    .catch((err) => console.log(err));
