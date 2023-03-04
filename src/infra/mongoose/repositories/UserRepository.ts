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

    async editUserAvatar(id: string, newAvatar: string): Promise<IUser> {
        const user = await User.findById(id)
        user.avatar = newAvatar
        await user.save()
        return user
    }

    async delUser(id: String): Promise<Boolean> {
        const deleteResult = await User.deleteOne({ _id: id})
        return Boolean(deleteResult.deletedCount) 
    }
}