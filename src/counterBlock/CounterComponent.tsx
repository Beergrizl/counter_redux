import React from 'react';
import s from './Counter.module.css';
import {Button} from "./Button";
import {Input} from "./Input";
import {SetValueType} from "../App";

export type CounterComponentPropsType = {
    incValue: () => void;
    value: SetValueType
    resetButtonValue: () => void
    maxValue: SetValueType
    resetValue: SetValueType

}

export const CounterComponent = (props: CounterComponentPropsType) => {
    return (
        <div className={s.counterBlock}>
            <Input value={props.value}
                   maxValue={props.maxValue}
            />
            <Button incValue={props.incValue}
                    resetButtonValue={props.resetButtonValue}
                    value={props.value}
                    maxValue={props.maxValue}
                    resetValue={props.resetValue}
            />
        </div>
    );
}


