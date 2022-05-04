import {action} from "@storybook/addon-actions";
import {Task} from "../Task";
import React from "react";

export default {
    title: 'components/src/Task',
    component: Task,
}

const changeTaskStatusCallback = action("change Task Status")
const changeTaskTitleCallback = action("change Task Title")
const removeTaskCallback = action("remove Task")

export const TaskExample = () => {
    return <>
        <Task
            task={{id: '1', isDone: true, title: 'Js'}}
            changeTaskStatus={changeTaskStatusCallback}
            changeTaskTitle={changeTaskTitleCallback}
            removeTask={removeTaskCallback}
            todolistId={"TodolistId1"}
        />
        <Task
            task={{id: '2', isDone: false, title: 'Node'}}
            changeTaskStatus={changeTaskStatusCallback}
            changeTaskTitle={changeTaskTitleCallback}
            removeTask={removeTaskCallback}
            todolistId={"TodolistId2"}
        />
    </>
}