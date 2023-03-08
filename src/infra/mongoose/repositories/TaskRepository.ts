import { ICreateStepDTO } from "@/domain/dtos/ICreateStepDTO";
import { ICreateTaskDTO } from "@/domain/dtos/ICreateTaskDTO";
import { ITask, IStep } from "@/domain/interfaces/ITask";
import { ITaskRepository } from "@/domain/repositories/ITaskRepository";
import { Step, Task } from "../schemas/Task";

export class TaskRepository implements ITaskRepository {
    async getTasks(): Promise<ITask[]> {
        return await Task.find()
    }
    async getTask(taskId: string): Promise<ITask> {
        return await Task.findById(taskId)
    }
    async getSteps(taskId: string): Promise<IStep[]>{
        const task = await Task.findById(taskId)
        return task.steps
    }
    async getStep(taskId: string, stepId: string): Promise<IStep>{
        const task = (await Task.findById(taskId))
        const steps = task.$getAllSubdocs()
        return await steps[0].id(stepId)
    }
    async createTask({ title, description, steps, users }: ICreateTaskDTO): Promise<ITask>{   
        const task = new Task({
            title,
            description,
            steps: steps.map(({ title, description }) => {
                return new Step({
                    title,
                    description,
                    done: false,
                    createdAt: (new Date()).toISOString(),
                    updatedAt: (new Date()).toISOString()
                })
            }),
            users,
            done: false,
            createdAt: (new Date()).toISOString(),
            updatedAt: (new Date()).toISOString()
        })
        await task.save()
        return task
    }
    async editTask(taskId: string, { title, description }: ICreateStepDTO): Promise<ITask>{
        const task = await Task.findById(taskId)
        if (title) {
            task.title = title
        }
        if (description) {
            task.description = description
        }
        await task.save()
        return task
    }
    async delTask(taskId: string): Promise<Boolean>{
        const deleteResponse = await Task.deleteOne({taskId})
        return deleteResponse.acknowledged
    }
    async addUser(taskId: string, userId: string): Promise<ITask>{
        const task = await Task.findById(taskId)
        task.users.push(userId)
        await task.save()
        return task
    }
    async delUser(taskId: string, userId: string): Promise<ITask>{
        const task = await Task.findById(taskId)
        const index = task.users.indexOf(userId)
        task.users.splice(index, 1)
        await task.save()
        return task
    }
    async addStep(taskId: string, { title, description }: ICreateStepDTO): Promise<ITask>{
        const step = new Step({
            title,
            description,
            done: false,
            createdAt: (new Date()).toISOString(),
            updatedAt: (new Date()).toISOString()
        })
        const task = await Task.findById(taskId)
        task.steps.push(step)
        await task.save()
        return task
    }
    async delStep(taskId: string, stepId: String): Promise<Boolean>{
        const task = await Task.findById(taskId)
        const steps = task.$getAllSubdocs()
        const deleteResponse = await steps[0].deleteOne(stepId)
        return deleteResponse.acknowledged
    }
}