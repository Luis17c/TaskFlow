import { CreateUserDTO } from "@/domain/dtos/CreateUserDTO"
import { IReceiveData } from "@/domain/dtos/IReceiveData"
import { IUserRepository } from "@/domain/repositories/IUserRepository"
import { container, inject, injectable } from "tsyringe"

@injectable()
class Repositories {
    constructor(
        @inject('UserRepository')
        public userRepository: IUserRepository
    ){}
}

const repositories = container.resolve(Repositories)

export const userResolvers = {
    Query: {
        async getUsers () {
            return await repositories.userRepository.getUsers()
        },
        
        async getUser (id: String) {
            return await repositories.userRepository.getUser(id)
        }
    },

    Mutation: {
        async createUser (_, userData: IReceiveData) {
            return await repositories.userRepository.createUser(userData)
        },
        
        async editUserAvatar (_, id: String, avatar: String) {
            return await repositories.userRepository.editUserAvatar(id, avatar)
        },

        async delUser (id: String) {
            return await repositories.userRepository.delUser(id)
        }
    }
}