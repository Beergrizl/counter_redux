import {SetValueType} from "../App";
import {Dispatch} from "redux";


export const initState = {
    startVal: '' as SetValueType
}
export type initialStateType = typeof initState;

export const startValReducer = (state: initialStateType = initState, action: StartValActionType): initialStateType => {
    console.log(state)
    console.log(action  )
    switch (action.type) {
        case 'SET-START-VALUE':
            return {
                ...state, startVal: action.startValue
            }
    }
    return state
}
export const startValAC = (startValue: SetValueType) => ({type: 'SET-START-VALUE', startValue} as const)
export type StartValActionType = ReturnType<typeof startValAC>
export const startValFromLocalStorageTC=()=>(dispatch:Dispatch)=> {
    let startNew = localStorage.getItem('startValue')
    if (startNew) {
        let startOne = JSON.parse(startNew)
        dispatch(startValAC(startOne));

        //props.setFirstStart(startOne);
    }
}