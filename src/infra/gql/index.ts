import { userResolvers } from "./user/userResolvers"
import { userTypeDefs } from "./user/userTypeDefs"

//Pensando no uso em larga escala, pensei neste método para 
//facilitar as declarações de query e mutations, fazendo-as em módulos

export const typeDefs = [
        userTypeDefs,
    ]

export const resolvers = [
        userResolvers,
    ]