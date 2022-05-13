import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "./todolist-api";

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
        todolistAPI.getTodolist()
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
                setState(res.data.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = ''
        todolistAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '';
        todolistAPI.updateTodolist(todolistId, 'stat')
            .then((res) => {
                setState(res.data.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const GetTasks = () => {

    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')
    const getTasks = () => {
        todolistAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data);
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'} value={todolistId}
                   onChange={(e) => {
                       setTodolistId(e.currentTarget.value)
                   }}
            />
            <button onClick={getTasks}>get tasks</button>
        </div>
    </div>
}

export const DeleteTask = () => {

    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")

    // const todolistId = '151ff14e-6f95-4eb6-8444-bdaecbb4207f';
    // const taskId = '';
    const deleteTask = () => {
        todolistAPI.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data.data);
            })
    }


    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"todolistId"} value={todolistId}
                   onChange={(e) => {
                       setTodolistId(e.currentTarget.value)
                   }}/>
            <input placeholder={"taskId"} value={taskId} onChange={(e) => {
                setTaskId(e.currentTarget.value)
            }}/>
            <button onClick={deleteTask}>delete task</button>
        </div>
    </div>
}

export const CreateTask = () => {

    const [state, setState] = useState<any>(null)
    const [taskTitle, setTaskTitle] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")

    const createTask = () => {
        todolistAPI.createTask(todolistId, taskTitle)
            .then((res) => {
                setState(res.data.data);
            })
    }


    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"todolistId"} value={todolistId}
                   onChange={(e) => {
                       setTodolistId(e.currentTarget.value)
                   }}/>
            <input placeholder={"task Title"} value={taskTitle} onChange={(e) => {
                setTaskTitle(e.currentTarget.value)
            }}/>
            <button onClick={createTask}>Create task</button>
        </div>
    </div>
}

export const UpdateTask = () => {

    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>('description 1')
    const [status, setStatus] = useState<number>(0)

    const [priority, setPriority] = useState<number>(0)
    const [startDate, setStartDate] = useState<string>('')
    const [deadline, setDeadline] = useState<string>('')

    const [todolistId, setTodolistId] = useState<string>('')
    const [taskId, setTaskId] = useState<string>('')

    const createTask = () => {
        todolistAPI.updateTask(todolistId, title, {
            deadline: "",
            description: description,
            priority: priority,
            startDate: "",
            status: status,
            title: title
        })
            .then((res) => {
                setState(res.data.data);
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"taskId"} value={taskId}
                   onChange={(e) => {
                       setTaskId(e.currentTarget.value)
                   }}/>
            <input placeholder={"todolistId"} value={todolistId}
                   onChange={(e) => {
                       setTodolistId(e.currentTarget.value)
                   }}/>
            <input placeholder={"Task Title"} value={title}
                   onChange={(e) => {
                       setTitle(e.currentTarget.value)
                   }}/>
            <input placeholder={"Description"} value={description}
                   onChange={(e) => {
                       setDescription(e.currentTarget.value)
                   }}/>
            <input placeholder={"status"} value={status} type="number"
                   onChange={(e) => {
                       setStatus(+e.currentTarget.value)
                   }}/>
            <button onClick={createTask}>Create task</button>
        </div>
    </div>
}
