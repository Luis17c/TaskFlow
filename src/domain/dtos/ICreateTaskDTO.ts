import { ICreateStepDTO } from "./ICreateStepDTO"

export interface ICreateTaskDTO {
        title: String
        description: String
        steps: ICreateStepDTO[]
        users: String[]
}