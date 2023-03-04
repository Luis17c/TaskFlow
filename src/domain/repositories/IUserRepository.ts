import { CreateUserDTO } from "../dtos/CreateUserDTO";

import { IUser } from "../interfaces/IUser";

export interface IUserRepository {
    getUsers(): Promise<IUser[]>
    getUser(id: String): Promise<IUser>
    createUser(userData: CreateUserDTO): Promise<IUser>
    editUserAvatar(id: String, newAvatar: String): Promise<IUser>
    delUser(id: String): Promise<Boolean>
}