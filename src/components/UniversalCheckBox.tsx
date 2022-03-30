import React, {ChangeEvent} from 'react';
import {Checkbox} from "@material-ui/core";

type PropsType = {
    callback: (eventValue: boolean) => void
    isDone: boolean
}

export const UniversalCheckBox = (props: PropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.callback(newIsDoneValue);
    }
    return (
        <Checkbox
            checked={props.isDone}
            color="primary"
            onChange={onChangeHandler}
        />
    );
};

