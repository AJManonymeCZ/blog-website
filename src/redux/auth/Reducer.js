import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from "./ActionType";

const initialState = {
    user: null,
    loading: false,
    error: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, loading: true, error: null}

        case LOGIN_SUCCESS:
            return {...state, loading: false, error: null, user: action.payload}

        case LOGIN_FAILURE:
            return {...state, loading: false, error: action.payload}

        case LOGOUT:
            return initialState;

        default:
            return state;
    }
}