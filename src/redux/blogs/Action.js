import {DELETE_BLOG_FAILURE, DELETE_BLOG_REQUEST, DELETE_BLOG_SUCCESS} from "./ActionType";

export const deleteBlog = (blogs, id) => {
    return async (dispatch) => {
      dispatch({type: DELETE_BLOG_REQUEST});

        if(blogs.find(u => u.id === id)) {
            blogs = blogs.filter(b => b.id !== id);
            dispatch({type: DELETE_BLOG_SUCCESS, payload: blogs});
        } else {
            dispatch({type:DELETE_BLOG_FAILURE, error: "NO blog with id: " + id })
        }
    };
}