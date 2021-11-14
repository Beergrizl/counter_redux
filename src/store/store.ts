import {applyMiddleware, combineReducers, createStore} from "redux";
import {valueReducer} from "./valueRuducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
        value: valueReducer,
            }
);

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppStoreType = typeof store;
