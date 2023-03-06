import { model, Schema } from "mongoose";

import { IStep, ITask } from "@/domain/interfaces/ITask";

const stepSchema = new Schema<IStep>({
    title: String,
    description: String,
    done: Boolean,
    createdAt: String,
    updatedAt: String
})

const taskSchema = new Schema<ITask>({
    title: String,
    description: String,
    done: Boolean,
    steps: [stepSchema],
    users: [String],
    createdAt: String,
    updatedAt: String
})

export const Task = model<ITask>('Task', taskSchema)