import gql from "graphql-tag"

export const userTypeDefs = gql`
    type User {
        email: String
        password: String
        name: String
        createdAt: String
        updatedAt: String
    }

    type Query {
        getUsers: [User]
        getUser(id: ID!): User!
    }
    
    input UserData {
        email: String
        password: String
        name: String
    }

    type Mutation {
        createUser(userData: UserData): User!
    }
`