import React, {ChangeEvent, useEffect} from 'react';
import s from './Setting.module.css';
import {SetValueType} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../store/store";
import {maxValAC, maxValFromLocalStorageTC} from "../store/maxValReducer";
import {startValAC, startValFromLocalStorageTC} from "../store/startValReducer";
import {setMaxTC} from "../store/maxValueReducer";

type SettingComponentPropsType = {
    setWarningMessage: () => void
    setMessage: () => void
    setStartValue: (startValue: SetValueType) => void
    setFirstStart: (startValue: SetValueType) => void
    setMax: (maxValue: SetValueType) => void
}
export const SettingComponent = (props: SettingComponentPropsType) => {
    //const [maxValue, setMaxValue] = useState<SetValueType>('');
    //const [startValue, setStartValue] = useState<SetValueType>('');
    const startVal = useSelector<AppStateType, SetValueType>(state => state.startVal.startVal)
    const maxVal = useSelector<AppStateType, SetValueType>(state => state.maxVal.maxVal)
    const dispatch = useDispatch()
    //console.log(`${startVal} ${maxVal}`)


    useEffect(() => {
        dispatch(startValFromLocalStorageTC())

        dispatch(maxValFromLocalStorageTC())
//props.setMax(maxVal)



         }, [])



    let maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(maxValAC(Number(e.currentTarget.value)));
        let max = e.currentTarget.value;
        (max <= startVal || Number(max) < 0) ? props.setWarningMessage()
            : props.setMessage();



    }
    let startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let start = Number(e.currentTarget.value);
        dispatch(startValAC(start));
        ((start >= maxVal) || start < 0) ? props.setWarningMessage()
            : props.setMessage();
    }

    let onClickHandler = () => {
        props.setStartValue(startVal);
        props.setFirstStart(startVal);
        props.setMax(maxVal);
    }
    return (
        <div className={s.counterBlock}>
            <div className={s.inputBlock}>
                <div className={s.input}>
                    max value:
                    <input value={maxVal}
                           className={
                               maxVal <= startVal || maxVal < 0
                                   ? s.inputRedStart : s.inputArea}
                           type={"number"} onChange={maxValueHandler}/>
                </div>
                <div className={s.input}>
                    start value:
                    <input value={startVal}
                           className={
                               startVal >= maxVal || startVal < 0
                                   ? s.inputRedStart : s.inputArea}
                           type={"number"} onChange={startValueHandler}/>
                </div>
            </div>
            <div className={s.buttonBlock}>
                <button onClick={onClickHandler}
                        disabled={startVal >= maxVal || startVal < 0 || startVal === ""}
                        className={s.button}>set
                </button>
            </div>
        </div>

    );
}
