import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {thunk} from "redux-thunk";
import {authReducer} from "./auth/Reducer";
import {usersReducer} from "./users/Reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
})

export const store= legacy_createStore(rootReducer, applyMiddleware(thunk))