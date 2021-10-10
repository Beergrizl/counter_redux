import {SetValueType} from "../App";
import {Dispatch} from "redux";


const initialState = {
    value: '' as SetValueType
}
type initialStateType = typeof initialState;
type ActionType = incValuesActionType
    | setStartValueActionType
    | resetButtonValueActionType
    | setWarningMessageActionType
    | setMessageActionType
    | setValueActionType

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

export type incValuesActionType = ReturnType<typeof incValueAC>;
export type setStartValueActionType = ReturnType<typeof setStartValueAC>;
export type setValueActionType = ReturnType<typeof setValueAC>;
export type resetButtonValueActionType = ReturnType<typeof resetButtonValueAC>;
export type setWarningMessageActionType = ReturnType<typeof setWarningMessageAC>;
export type setMessageActionType = ReturnType<typeof setMessageAC>;

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


