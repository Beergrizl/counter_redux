import React, {useEffect} from 'react';
import {CounterComponent} from "./counterBlock/CounterComponent";
import {SettingComponent} from "./settingBlock/SettingComponent";
import s from "./counterBlock/Counter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./store/store";
import {
    incValueTC,
    resetButtonValueTC, setMessageAC, setStartValueFromLocalStorageTC,
    setStartValueTC, setWarningMessageAC,
} from "./store/valueRuducer";
import {setFirstStartValueFromLocalStorageTC, setFirstStartValueTC} from "./store/valueRuducer";
import {setMaxTC} from "./store/valueRuducer";

export type SetValueType = number | string

function App() {

    const value = useSelector<AppStateType, SetValueType>(
        state => state.value.value)

    const resetValue = useSelector<AppStateType, SetValueType>(
        state => state.value.resetValue)

    const maxValue = useSelector<AppStateType, SetValueType>(
        state => state.value.maxValue)
    const dispatch = useDispatch()
    //let [value, setValue] = useState<SetValueType>('');
    //let [resetValue, setFirstStartValue] = useState<SetValueType>(0);
    // let [maxValue, setMaxValue] = useState<SetValueType>(0);

    useEffect(() => {
        dispatch(setStartValueFromLocalStorageTC())
    }, [])


    function incValue() {
        dispatch(incValueTC(value))
    }

    function setMax(maxValue: SetValueType) {
        dispatch(setMaxTC(maxValue))
    }

    function setStartValue(startValue: SetValueType) {
        dispatch(setStartValueTC(startValue));
        //localStorage.setItem('startValue', JSON.stringify(startValue))
    }

    function setFirstStart(startValue: SetValueType) {
        dispatch(setFirstStartValueTC(startValue))
        //localStorage.setItem('resetValue', JSON.stringify(startValue))
    }

    useEffect(() => {
        dispatch(setFirstStartValueFromLocalStorageTC())

    }, [])

    function resetButtonValue() {
        dispatch(resetButtonValueTC(resetValue))
        //localStorage.setItem('value', JSON.stringify(resetValue))

    }

    function setWarningMessage() {
        dispatch(setWarningMessageAC())
    }

    function setMessage() {
        dispatch(setMessageAC())
    }

    return (
        <div className={s.windowBlock}>
            <SettingComponent
                setMessage={setMessage}
                setWarningMessage={setWarningMessage}
                setStartValue={setStartValue}
                setFirstStart={setFirstStart}
                setMax={setMax}/>
            <CounterComponent incValue={incValue}
                              resetButtonValue={resetButtonValue}
                              value={value}
                              maxValue={maxValue}
                              resetValue={resetValue}
            />
        </div>
    )
}

export default App;
