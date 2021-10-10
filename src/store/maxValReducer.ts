import {SetValueType} from "../App";
import {Dispatch} from "redux";
import {setMaxAC} from "./maxValueReducer";


export const initState = {
    maxVal: '' as SetValueType
}
export type initStateType = typeof initState;
export const maxValReducer = (state: initStateType = initState, action: MaxValActionType): initStateType => {
    switch (action.type) {
        case 'MAX-VAL':
            return {
                ...state, maxVal: action.max
            }
    }
    return state
}
export const maxValAC = (max: SetValueType) => ({type: 'MAX-VAL', max} as const)
export type MaxValActionType = ReturnType<typeof maxValAC>
export const maxValFromLocalStorageTC=()=>(dispatch: Dispatch)=> {
    let max = localStorage.getItem('maxValue');
    if (max) {
        let newMax = JSON.parse(max);
        dispatch(maxValAC(newMax));
        dispatch(setMaxAC(newMax))
    }
}
