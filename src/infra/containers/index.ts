import { container } from 'tsyringe'

import { UserRepository } from '../mongoose/repositories/UserRepository'

container.registerSingleton(
    'UserRepository',
    UserRepository
)