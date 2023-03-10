import express from 'express';
import http from 'http';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';

import cors from 'cors';
import bodyParser from 'body-parser';
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

const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql',
});
const serverCleanup = useServer({ schema }, wsServer);

const server = new ApolloServer({
    schema,
    plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer }),
        {
            async serverWillStart() {
                return {
                    async drainServer() {
                        await serverCleanup.dispose();
                    },
                };
            },
        },
    ],
});

await server.start();

app.use(cors(), authorizationJWT, bodyParser.json(), expressMiddleware(server));

app.all('/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

mongoose.set('strictQuery', false);
mongoose
    .connect(URI)
    .then(async () => {
        console.log('Connected to DB');
        await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
        console.log(`App is listening on port ${PORT}`);
    })
    .catch((err) => console.log(err));
