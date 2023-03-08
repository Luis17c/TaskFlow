import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

import { IUser } from "../interfaces/IUser";

export interface IUserRepository {
    getUsers(): Promise<IUser[]>
    getUser(id: String): Promise<IUser>
    createUser(userData: ICreateUserDTO): Promise<IUser>
    editUserAvatar(id: String, newAvatar: String): Promise<IUser>
    delUser(id: String): Promise<Boolean>
}