import { CreateUserDTO } from "../dtos/CreateUserDTO";

import { IUser } from "../interfaces/IUser";

export interface IUserRepository {
    getUsers(): Promise<IUser[]>
    getUser(id: String): Promise<IUser>
    createUser(userData: CreateUserDTO): Promise<IUser>
}