import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'ca3b6a70-ed79-49e0-8cfe-9aa02ff94fb2'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolists()
            .then((res) => {
                setState(res.data);
            })

    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        todolistAPI.createTodolist("newTodolist")
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '';
        todolistAPI.deleteTodolist()
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '';
        todolistAPI.updateTodolist('asdasd')
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}


export const GetTasks = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistId = '151ff14e-6f95-4eb6-8444-bdaecbb4207f';
        todolistAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data);
            })

    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTask = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistId = '151ff14e-6f95-4eb6-8444-bdaecbb4207f';
        const taskId = '';
        todolistAPI.deleteTask(todolistId,taskId)
            .then((res) => {
                setState(res.data);
            })

    }, [])
    return <div> {JSON.stringify(state)}</div>
}