import posts from "../../data/posts.json";
import {
    DELETE_BLOG_FAILURE,
    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS, UPDATE_BLOG_FAILURE,
    UPDATE_BLOG_REQUEST,
    UPDATE_BLOG_SUCCESS
} from "./ActionType";

const initialState = {
    blogs: posts,
    loading: false,
    error: null,
}

export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_BLOG_REQUEST:
        case UPDATE_BLOG_REQUEST:
            return {...state, loading: true, error: null}
        case DELETE_BLOG_SUCCESS:
        case UPDATE_BLOG_SUCCESS:
            return {...state, loading: false, error: null, blogs: action.payload}
        case DELETE_BLOG_FAILURE:
        case UPDATE_BLOG_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

