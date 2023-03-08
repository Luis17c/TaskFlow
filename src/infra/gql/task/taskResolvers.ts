import { inject, injectable } from "tsyringe";

@injectable()
class Repositories {
    constructor(
        @inject('TaskRepository')
        public taskRepository
    ){}
}

export const taskResolver = {

}