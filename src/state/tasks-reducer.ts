import {FilterValuesType, TasksStateType, TodolistType} from "../App";
import {v1} from "uuid";
import {addTodolistACType} from "./todolists-reducer";


export type removeTasksActionType = {
    type: 'REMOVE-TASK'
    taskId: string
    todolistId: string
}

export type addTaskActionType = {
    type: 'ADD-TASK'
    title: string
    todolistId: string
}

export type changeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    taskId: string
    isDone: boolean
    todolistId: string
}

export type changeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE'
    taskId: string
    title: string
    todolistId: string
}


export type ActionsType =
    removeTasksActionType |
    addTaskActionType |
    changeTaskStatusActionType |
    changeTaskTitleActionType |
    addTodolistACType

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK": {
            const stateCopy = {...state}
            const tasks = state[action.todolistId]
            const filteredTasks = tasks.filter(task => task.id !== action.taskId)
            stateCopy[action.todolistId] = filteredTasks

            return stateCopy
            // return {
            //     ...state,
            //     [action.todolistId]: state[action.todolistId].filter(task => task.id !== action.taskId)
            // }
        }
        case "ADD-TASK": {
            const stateCopy = {...state}
            const tasks = stateCopy[action.todolistId]
            const newTask = {id: v1(), title: action.title, isDone: false}
            const newTasks = [newTask, ...tasks]
            stateCopy[action.todolistId] = newTasks
            return stateCopy
            // return {
            //     ...state,
            //     [action.todolistId]: [{id: v1(), title: action.title, isDone: false}, ...state[action.todolistId]]
            // }
        }
        case "CHANGE-TASK-STATUS": {
            const stateCopy = {...state}
            const tasks = stateCopy[action.todolistId]
            const task = tasks.find(t => t.id === action.taskId)
            if (task) {
                task.isDone = action.isDone
            }
            return stateCopy
            // return {
            //     ...state,
            //     [action.todolistId]: state[action.todolistId].map(task => task.id === action.taskId ? {
            //         ...task,
            //         isDone: action.isDone
            //     } : task)
            // }
        }
        case "CHANGE-TASK-TITLE": {
            const stateCopy = {...state}
            const tasks = stateCopy[action.todolistId]
            const task = tasks.find(t => t.id === action.taskId)
            if (task) {
                task.title = action.title
            }
            return stateCopy
            // return {
            //     ...state,
            //     [action.todolistId]: state[action.todolistId].map(task => task.id === action.taskId ? {
            //         ...task,
            //         title: action.title
            //     } : task)
            // }
        }
        case "ADD-TODOLIST":{
            const stateCopy = {...state}
            stateCopy[v1()] = []
            return stateCopy
        }
        default:
            throw new Error("I dont understand this type")
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): removeTasksActionType => {
    return {type: 'REMOVE-TASK', taskId, todolistId}
}

export const addTaskAC = (title: string, todolistId: string): addTaskActionType => {
    return {type: 'ADD-TASK', title, todolistId}
}

export const changeStatusAC = (taskId: string, isDone: boolean, todolistId: string): changeTaskStatusActionType => {
    return {type: 'CHANGE-TASK-STATUS', taskId, isDone, todolistId}
}

export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string): changeTaskTitleActionType => {
    return {type: 'CHANGE-TASK-TITLE', title, taskId, todolistId}
}