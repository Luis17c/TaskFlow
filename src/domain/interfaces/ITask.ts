export interface IStep {
    title: string,
    description: string,
    done: boolean,
    createdAt: string,
    updatedAt: string
}

export interface ITask {
    title: string,
    description: string,
    steps: [IStep],
    done: boolean,
    users: [string],
    createdAt: string,
    updatedAt: string
}