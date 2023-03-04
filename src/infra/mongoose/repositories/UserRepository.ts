import { CreateUserDTO } from "@/domain/dtos/CreateUserDTO";
import { IUser } from "@/domain/interfaces/IUser";
import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { User } from "../schemas/User";

export class UserRepository implements IUserRepository {
    
    private mongoRepository = User

    async getUsers(): Promise<IUser[]> {
        return await this.mongoRepository.find()
    }

    async getUser(id: any): Promise<IUser> {
        return await this.mongoRepository.findById(id)
    }

    async createUser({ name, email, password, avatar }: CreateUserDTO): Promise<IUser> {
        const user = new User({
            name,
            email,
            password,
            avatar,
            createdAt: new Date().toISOString,
            updatedAt: new Date().toISOString
        })

        await user.save()

        return user
    }
}