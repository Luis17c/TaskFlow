import { ICreateStepDTO } from "../dtos/ICreateStepDTO"
import { ICreateTaskDTO } from "../dtos/ICreateTaskDTO"
import { IStep, ITask } from "../interfaces/ITask"

export interface ITaskRepository {
    getTasks(): [ITask]
    getTask(taskId: string): ITask

    getSteps(taskId: string): [IStep]
    getStep(taskId: string, stepId: string): IStep

    createTask(taskData: ICreateTaskDTO): ITask
    editTask(taskId: string, editTaskData: ICreateStepDTO): ITask
    delTask(taskId: string): Boolean

    addUser(taskId: string, userId: string): ITask
    delUser(taskId: string, userId: string): ITask

    addStep(taskId: string, stepData: ICreateStepDTO): ITask
    delStep(taskId: string, stepId: string): Boolean
}