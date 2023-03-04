import 'reflect-metadata'
import './infra/containers'

import { ApolloServer, BaseContext } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"

import mongoose from 'mongoose';

import { typeDefs, resolvers } from "./infra/gql";

const server = new ApolloServer<BaseContext>({
    typeDefs,
    resolvers,
})

const start = async () => { 
    const { url } = await startStandaloneServer(server, {
        listen: { port: 3030 }
    })
    console.log(`Server on at ${url}`)
}

start()

mongoose.connect('mongodb://localhost:27017/TaskFlow')