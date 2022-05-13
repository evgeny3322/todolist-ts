import {action} from "@storybook/addon-actions";
import {Task} from "../Task";
import React from "react";

export default {
    title: 'Todolist/Task',
    component: Task,
}

const changeTaskStatusCallback = action("change Task Status")
const changeTaskTitleCallback = action("change Task Title")
const removeTaskCallback = action("remove Task")

export const TaskExample = () => {
    return <>

    </>
}