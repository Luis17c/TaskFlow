import { ICreateStepDTO } from "../dtos/ICreateStepDTO"
import { ICreateTaskDTO } from "../dtos/ICreateTaskDTO"
import { IStep, ITask } from "../interfaces/ITask"

export interface ITaskRepository {
    getTasks(): Promise<[ITask]>
    getTask(taskId: string): Promise<ITask>

    getSteps(taskId: string): Promise<[IStep]>
    getStep(taskId: string, stepId: string): Promise<IStep>

    createTask(taskData: ICreateTaskDTO): Promise<ITask>
    editTask(taskId: string, editTaskData: ICreateStepDTO): Promise<ITask>
    delTask(taskId: string): Promise<Boolean>

    addUser(taskId: string, userId: string): Promise<ITask>
    delUser(taskId: string, userId: string): Promise<ITask>

    addStep(taskId: string, stepData: ICreateStepDTO): Promise<ITask>
    delStep(taskId: string, stepId: string): Promise<Boolean>
}