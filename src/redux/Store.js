import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {thunk} from "redux-thunk";
import {authReducer} from "./auth/Reducer";
import {usersReducer} from "./users/Reducer";
import {blogReducer} from "./blogs/Reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    blogs: blogReducer,
})

export const store= legacy_createStore(rootReducer, applyMiddleware(thunk))