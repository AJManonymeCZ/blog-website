import {
    DELETE_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS
} from "./ActionType";
import users from "../../data/users.json";

const initialState = {
    users: users,
    loading: false,
    error: null
};
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_REQUEST:
        case DELETE_USER_REQUEST:
            return { ...state, loading: true }

        case UPDATE_USER_SUCCESS:
        case DELETE_USER_SUCCESS:
            return { ...state, loading: false, error: null, users: action.payload }

        case UPDATE_USER_FAILURE:
        case DELETE_USER_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
};