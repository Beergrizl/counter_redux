
import {SetValueType} from "../App";
import {Dispatch} from "redux";


const initialState = {
    resetValue: 0
}
export type InitialStateType = typeof initialState

export const resetValueReducer = (state: InitialStateType = initialState, action: setFirstStartValueActionType): InitialStateType => {
switch (action.type){
    case "SET-FIRST-START-VALUE":
        return {
            ...state, resetValue: +action.startValue
        }

}

    return state
}
export const setFirstStartValueAC = (startValue:SetValueType) => ({type: 'SET-FIRST-START-VALUE', startValue} as const)

export type setFirstStartValueActionType = ReturnType<typeof setFirstStartValueAC>;

export const setFirstStartValueTC = (startValue: SetValueType) => (dispatch: Dispatch) => {
    localStorage.setItem('resetValue', JSON.stringify(startValue))
    dispatch(setFirstStartValueAC(startValue))
}
export const setFirstStartValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
    let resetAsString = localStorage.getItem('resetValue');
    if (resetAsString) {
        let resValue = JSON.parse(resetAsString)
        dispatch(setFirstStartValueAC(resValue));

}}