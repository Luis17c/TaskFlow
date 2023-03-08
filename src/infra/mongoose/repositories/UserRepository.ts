import { ICreateUserDTO } from "@/domain/dtos/ICreateUserDTO";
import { IUser } from "@/domain/interfaces/IUser";
import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { User } from "../schemas/User";

export class UserRepository implements IUserRepository {

    async getUsers(): Promise<IUser[]> {
        const users = await User.find()
        return users
    }

    async getUser(id: any): Promise<IUser> {
        return await User.findById(id)
    }

    async createUser({ userData }: ICreateUserDTO): Promise<IUser> {
        const user = new User({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            avatar: userData.avatar,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
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
        const deleteResult = await User.deleteOne({id})
        return Boolean(deleteResult.deletedCount) 
    }
}