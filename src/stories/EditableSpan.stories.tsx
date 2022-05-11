import {action} from "@storybook/addon-actions";
import {EditableSpan} from "../EditableSpan";

export default {
    title: 'Todolist/EditableSpan',
    component: EditableSpan,
}

const onChangeCallback = action("onChange value")

export const EditableSpanExample = (value: string) => {
    return <EditableSpan onChange={onChangeCallback} value={"Start value"}/>
}