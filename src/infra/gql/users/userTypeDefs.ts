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
    }
    
    type Mutation {
        createUser: User!
    }
`