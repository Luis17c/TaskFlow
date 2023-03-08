import gql from "graphql-tag";

export const taskTypeDefs = gql`
    type Step {
        title: String
        description: String
        done: Boolean
        createdAt: String
        updatedAt: String
    }

    type Task {
        title: String
        description: String
        done: Boolean
        steps: [stepSchema]
        users: [String]
        createdAt: String
        updatedAt: String
    }

    type Query {
        getTasks: [Task]
        getTask(taskId: ID!): Task!

        getSteps(taskId: ID!): [Step]
        getStep(taskId: ID!, stepId: ID!): Step
    }

    input StepData {
        title: String
        description: String
    }

    input TaskData {
        title: String
        description: String
        steps: [StepData]
        users: [String]
    }

    input EditTaskData {
        title: String
        description: String
    }

    type Mutation {
        createTask(taskData: TaskData): Task
        editTask(taskId: ID!, editTaskData: EditTaskData): Task
        addUser(taskId: ID!, userId: ID!): Task
        delUser(taskId: ID!, userId: ID!): Task
        delTask(taskId: ID!): Boolean

        addStep(taskId: ID!, stepData: StepData): Task
        delStep(taskId: ID!, stepId: ID!): Boolean       
    }
`