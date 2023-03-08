import { container } from 'tsyringe'

import { TaskRepository } from '../mongoose/repositories/TaskRepository'
import { UserRepository } from '../mongoose/repositories/UserRepository'

container.registerSingleton(
    'UserRepository',
    UserRepository
)

container.registerSingleton(
    'TaskRepository',
    TaskRepository
)