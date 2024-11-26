import {
    DELETE_USER_FAILURE,
    DELETE_USER_REQUEST,
    UPDATE_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS
} from "./ActionType";

export const updateUser = (users, user) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_USER_REQUEST});
        let error = false;
        console.log("Updating user", user)
        users.forEach(u => {
           if (u.id === user.id) {
               if (user.name) {
                   u.name = user.name;
               }
               if (user.email) {
                   u.email = user.email;
               }
               if (user.role) {
                   u.role = user.role;
               }
               if (user.password && user.password === user.retypePassword) {
                   console.log("Changing password");
                   u.password = user.password;
               }
           } else {
               error = true;
               dispatch({type: UPDATE_USER_FAILURE, error: "No user found!"});
           }
        });

         if (!error)
            dispatch({type: UPDATE_USER_SUCCESS, payload: users});
    }
}

export const deleteUser = (users, id) => {
    return async (dispatch) => {
        dispatch({type: DELETE_USER_REQUEST});

        if(users.find(u => u.id === id)) {
            users = users.filter(u => u.id !== id);
            dispatch({type: UPDATE_USER_SUCCESS, payload: users});
        } else {
            dispatch({type:DELETE_USER_FAILURE, error: "NO user with id: " + id })
        }

    }
}