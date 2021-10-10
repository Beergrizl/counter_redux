import {SetValueType} from "../App";
import {Dispatch} from "redux";
import {maxValAC} from "./maxValReducer";


export const initialState = {
    maxValue: 0
}
type InitialStateType = typeof initialState


export const maxValueReducer = (state: InitialStateType = initialState, action: setMaxActionType): InitialStateType => {
    switch (action.type){
        case "SET-MAX":
            return {
                ...state, maxValue: +action.maxValue
            }
    }
    return state
}

export const setMaxAC = (maxValue: SetValueType) => ({type: 'SET-MAX', maxValue} as const)
export type setMaxActionType = ReturnType<typeof setMaxAC>
export const setMaxTC = (maxValue:SetValueType) => (dispatch: Dispatch) => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    dispatch(setMaxAC(maxValue))
}
