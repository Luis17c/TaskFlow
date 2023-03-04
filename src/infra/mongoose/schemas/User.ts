import { Schema, model } from 'mongoose'

import { IUser } from '@/domain/interfaces/IUser'

const userSchema = new Schema<IUser>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    avatar: String,
    createdAt: {type: String, required: true},
    updatedAt: {type: String, required: true}
})

export const User = model<IUser>('User', userSchema)