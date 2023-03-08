export interface IStep {
    title: string,
    description: string,
    done: boolean,
    createdAt: string,
    updatedAt: string
}

// Para identificar os usuários com permissão para acessar a task, usarei o
// método de referenciação do ID e usarei o método de Embedding. Essa decisão
// foi tomada para que eu aprendesse as duas maneiras de criar uma relação no
// MongoDB, não pela otimização, embora tenha decidido onde qual método melhor
// se encaixaria.

export interface ITask {
    title: String,
    description: String,
    steps: IStep[],
    done: boolean,
    users: String[],
    createdAt: string,
    updatedAt: string
}