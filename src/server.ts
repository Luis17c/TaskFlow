import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"

import { typeDefs, resolvers } from "./infra/gql";

const server = new ApolloServer({
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