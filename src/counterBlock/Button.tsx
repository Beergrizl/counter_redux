import React from 'react';
import s from './Counter.module.css';
import {SetValueType} from "../App";

export type ButtonPropsType = {
    incValue: () => void
    resetButtonValue: () => void
    value: SetValueType
    maxValue: SetValueType
    resetValue: SetValueType
}

export const Button = (props: ButtonPropsType) => {

    let incButtonValue = (props.value === props.maxValue)
        || (props.value === "");
    let resButtonValue = (props.value === props.resetValue)
        || (props.value === "")

    return (
        <div className={s.buttonBlock}>
            <button onClick={props.incValue} className={s.button}
                    disabled={incButtonValue}>inc
            </button>
            <button onClick={props.resetButtonValue} className={s.button}
                    disabled={resButtonValue}>reset
            </button>
        </div>
    );
}