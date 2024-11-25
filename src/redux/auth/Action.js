import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from "./ActionType";

export const login = (users, userData) => {
    return async (dispatch) => {
        dispatch({type: LOGIN_REQUEST})

        const user = users.find(u => u.email === userData.email && u.password === userData.password);
        if (user) {
            dispatch({type: LOGIN_SUCCESS, payload: user})
            console.log("login success");
        } else {
            dispatch({type: LOGIN_FAILURE, payload: "Wrong email or password"})
            console.log("login error");
        }
    }
}

export const logout = () => {
    return async(dispatch) => {
        dispatch({type: LOGOUT})
    }
}

export const getUser = () => {
    return async(dispatch) => {
        dispatch({type: LOGOUT})
    }
}