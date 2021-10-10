import {applyMiddleware, combineReducers, createStore} from "redux";
import {valueReducer} from "./valueRuducer";
import {resetValueReducer} from "./resetValueReducer";
import {maxValueReducer} from "./maxValueReducer";
import thunk from "redux-thunk";
import {maxValReducer} from "./maxValReducer";
import {startValReducer} from "./startValReducer";


const rootReducer = combineReducers({
        value: valueReducer,
        resetValue: resetValueReducer,
        maxValue: maxValueReducer,
        startVal: startValReducer,
        maxVal: maxValReducer,
    }
);

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppStoreType = typeof store;
