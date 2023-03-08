import { ICreateStepDTO } from "@/domain/dtos/ICreateStepDTO";
import { ICreateTaskDTO } from "@/domain/dtos/ICreateTaskDTO";
import { ITaskRepository } from "@/domain/repositories/ITaskRepository";

import { container, inject, injectable } from "tsyringe";

@injectable()
class Repositories {
    constructor(
        @inject('TaskRepository')
        public taskRepository: ITaskRepository
    ){}
}

const repositories = container.resolve(Repositories)

export const taskResolver = {
    Query: {
        async getTasks () {
            return await repositories.taskRepository.getTasks()
        },
        async getTask (_, taskId: string) {
            return await repositories.taskRepository.getTask(taskId)
        },
        async getSteps (_, taskId: string) {
            return await repositories.taskRepository.getSteps(taskId)
        },
        async getStep (_, taskId: string, stepId: string) {
            return await repositories.taskRepository.getStep(taskId, stepId)
        }
    },
    Mutation: {
        async createTask (_, taskData: ICreateTaskDTO) {
            return await repositories.taskRepository.createTask(taskData)
        },
        async editTask (_, taskId: string, editTaskData: ICreateStepDTO) {
            return await repositories.taskRepository.editTask(taskId, editTaskData)
        },
        async delTask (_, taskId: string) {
            return await repositories.taskRepository.delTask(taskId)
        },
        async addTaskUser (_, taskId: string, userId: string) {
            return await repositories.taskRepository.addTaskUser(taskId, userId)
        },
        async delTaskUser (_, taskId: string, userId: string) {
            return await repositories.taskRepository.delTaskUser(taskId, userId)
        },
        async addStep (_, taskId: string, stepData: ICreateStepDTO) {
            return await repositories.taskRepository.addStep(taskId, stepData)
        },
        async delStep(_, taskId: string, stepId: string) {
            return await repositories.taskRepository.delStep(taskId, stepId)
        }
    }
}