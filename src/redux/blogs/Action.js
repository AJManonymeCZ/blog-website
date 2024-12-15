import {
    ADD_BLOG_FAILURE,
    ADD_BLOG_REQUEST, ADD_BLOG_SUCCESS,
    DELETE_BLOG_FAILURE,
    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    UPDATE_BLOG_FAILURE,
    UPDATE_BLOG_REQUEST, UPDATE_BLOG_SUCCESS
} from "./ActionType";

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

export const updateBLog = (blogs, blog) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_BLOG_REQUEST});
        let error = false;
        blogs.forEach(b => {
            if (b.id === blog.id) {
                if (blog.title) {
                    b.title = blog.title;
                }
                if (blog.image) {
                    b.image = blog.image;
                }
                if (blog.category) {
                    b.category = blog.category;
                }
                if (blog.shortText) {
                    b.shortText = blog.shortText;
                }
                if (blog.longText) {
                    b.longText = blog.longText;
                }
            } else {
                error = true;
                dispatch({type: UPDATE_BLOG_FAILURE, error: "No blog found!"});
            }
        });

        if (!error)
            dispatch({type: UPDATE_BLOG_SUCCESS, payload: blogs});
    };
}

export const addBlog = (blogs, addedBlog) => {
    return async (dispatch) => {
        dispatch({type: ADD_BLOG_REQUEST});
        if(blogs.push(addedBlog)) {
            dispatch({type: ADD_BLOG_SUCCESS, payload: blogs});
        } else {
            dispatch({type: ADD_BLOG_FAILURE, error: "Error when adding blog"});
        }
    }
}