import { CreateUserDTO } from "@/domain/dtos/CreateUserDTO"
import { IUserRepository } from "@/domain/repositories/IUserRepository"
import { container, inject, injectable } from "tsyringe"

@injectable()
class Repositories {
    constructor(
        @inject('UserRepository')
        public usersRepository: IUserRepository
    ){}
}

const repositories = container.resolve(Repositories)

export const userResolvers = {
    Query: {
        async getUsers () {
            return await repositories.usersRepository.getUsers()
        },
        
        async getUser (id: String) {
            return await repositories.usersRepository.getUser(id)
        }
    },

    Mutation: {
        async createUser (userData: CreateUserDTO) {
            return await repositories.usersRepository.createUser(userData)
        }
    }
}