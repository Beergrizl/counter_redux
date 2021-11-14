import {SetValueType} from "../App";
import {Dispatch} from "redux";

const initialState = {
    value: '' as SetValueType,
    startVal: '' as SetValueType,
    maxVal: '' as SetValueType,
    maxValue: 0,
    resetValue: 0
}
type initialStateType = typeof initialState;
type ActionType = incValuesActionType
    | setStartValueActionType
    | resetButtonValueActionType
    | setWarningMessageActionType
    | setMessageActionType
    | setValueActionType
    | StartValActionType
    | MaxValActionType
    | setMaxActionType
    | setFirstStartValueActionType

export const valueReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            if (typeof state.value === "number")
                return {
                    ...state, value: state.value + 1
                }
            return state
        case "SET-START-VALUE":
            return {
                ...state, value: action.startValue
            }
        case "value/SET-VALUE":
            return {
                ...state, value: action.value
            }
        case "RESET-BUTTON-VALUE":
            return {
                ...state, value: action.resetValue
            }
        case "SET-WARNING-MESSAGE":
            return {
                ...state, value: 'Incorrect value!'
            }
        case "SET-MESSAGE":
            return {
                ...state, value: 'enter values and press set'
            }
        case 'SET-START-VAL':
            return {
                ...state, startVal: action.startValue
            }
        case 'MAX-VAL':
            return {
                ...state, maxVal: action.max
            }
        case "SET-MAX":
            return {
                ...state, maxValue: +action.maxValue
            }
        case "SET-FIRST-START-VALUE":
            return {
                ...state, resetValue: +action.startValue
            }
        default:
            return state
    }
}

export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const setStartValueAC = (startValue: SetValueType) => (
    {type: 'SET-START-VALUE', startValue} as const)
export const setValueAC = (value: SetValueType) => (
    {type: 'value/SET-VALUE', value} as const)
export const resetButtonValueAC = (resetValue: SetValueType) => ({type: 'RESET-BUTTON-VALUE', resetValue} as const)
export const setWarningMessageAC = () => ({type: 'SET-WARNING-MESSAGE'} as const)
export const setMessageAC = () => ({type: 'SET-MESSAGE'} as const)
export const startValAC = (startValue: SetValueType) => ({type: 'SET-START-VAL', startValue} as const)
export const maxValAC = (max: SetValueType) => ({type: 'MAX-VAL', max} as const)
export const setMaxAC = (maxValue: SetValueType) => ({type: 'SET-MAX', maxValue} as const)
export const setFirstStartValueAC = (startValue: SetValueType) => ({type: 'SET-FIRST-START-VALUE', startValue} as const)

export type incValuesActionType = ReturnType<typeof incValueAC>;
export type setStartValueActionType = ReturnType<typeof setStartValueAC>;
export type setValueActionType = ReturnType<typeof setValueAC>;
export type resetButtonValueActionType = ReturnType<typeof resetButtonValueAC>;
export type setWarningMessageActionType = ReturnType<typeof setWarningMessageAC>;
export type setMessageActionType = ReturnType<typeof setMessageAC>;
export type StartValActionType = ReturnType<typeof startValAC>
export type MaxValActionType = ReturnType<typeof maxValAC>
export type setMaxActionType = ReturnType<typeof setMaxAC>
export type setFirstStartValueActionType = ReturnType<typeof setFirstStartValueAC>;

export const incValueTC = (value: SetValueType) => (dispatch: Dispatch) => {
    localStorage.setItem('value', JSON.stringify(+value + 1))
    dispatch(incValueAC())
}

export const setStartValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
    let valueAsString = localStorage.getItem('value');
    if (valueAsString) {
        let newValue = JSON.parse(valueAsString)
        dispatch(setValueAC(newValue))
    }
}
export const setStartValueTC = (startValue: SetValueType) => (dispatch: Dispatch) => {
    localStorage.setItem('startValue', JSON.stringify(startValue))
    dispatch(setStartValueAC(startValue))
}
export const resetButtonValueTC = (resetValue: SetValueType) => (dispatch: Dispatch) => {
    localStorage.setItem('value', JSON.stringify(resetValue))
    dispatch(resetButtonValueAC(resetValue))
}
export const startValFromLocalStorageTC = () => (dispatch: Dispatch) => {
    let startNew = localStorage.getItem('startValue')
    if (startNew) {
        let startOne = JSON.parse(startNew)
        dispatch(startValAC(startOne));
    }
}
export const maxValFromLocalStorageTC = () => (dispatch: Dispatch) => {
    let max = localStorage.getItem('maxValue');
    if (max) {
        let newMax = JSON.parse(max);
        dispatch(maxValAC(newMax));
        dispatch(setMaxAC(newMax))
    }
}
export const setMaxTC = (maxValue: SetValueType) => (dispatch: Dispatch) => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    dispatch(setMaxAC(maxValue))
}
export const setFirstStartValueTC = (startValue: SetValueType) => (dispatch: Dispatch) => {
    localStorage.setItem('resetValue', JSON.stringify(startValue))
    dispatch(setFirstStartValueAC(startValue))
}
export const setFirstStartValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
    let resetAsString = localStorage.getItem('resetValue');
    if (resetAsString) {
        let resValue = JSON.parse(resetAsString)
        dispatch(setFirstStartValueAC(resValue));

    }
}