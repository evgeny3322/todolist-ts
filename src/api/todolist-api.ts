import axios from 'axios'

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'ca3b6a70-ed79-49e0-8cfe-9aa02ff94fb2'
    }
}
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    ...settings
})
type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

export type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}
export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}
type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}


export const todolistAPI = {
    getTodolists() {
        const promise = instance.get<TodolistType[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        return promise
    },
    createTodolist(title: string) {
        const promise = instance.post<ResponseType<{ item: TodolistType }>>('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: "newTodolist"}, settings)
        return promise
    },
    deleteTodolist() {
        const todolistId = 'b60ff97e-b331-4b38-b86f-fd7e362d7a76'
        const promise = instance.delete<ResponseType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
        return promise
    },
    updateTodolist(title: string) {
        const todolistId = 'b60ff97e-b331-4b38-b86f-fd7e362d7a76'
        const promise = instance.put<ResponseType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title: 'asdasd'}, settings)
        return promise
    },
    getTasks(todolistId: string) {
        const promise = instance.get<GetTasksResponse>('https://social-network.samuraijs.com/api/1.1/todo-lists/' + todolistId + '/tasks', settings)
        return promise
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<ResponseType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
    }
}




