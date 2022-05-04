import {AddItemForm} from "../AddItemForm";
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/src/AddItemForm',
    component: AddItemForm,
}

const callback = action("Button 'add' was pressed inside the form")

export const AddItemFormExample = (props: any) => {
    return <AddItemForm addItem={callback}/>
}