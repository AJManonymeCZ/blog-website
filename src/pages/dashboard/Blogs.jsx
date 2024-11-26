import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteBlog} from "../../redux/blogs/Action";

const Blogs = () => {
    const {blogs} = useSelector((state) => state.blogs);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteBlog(blogs, id));
    };

    return (
        <>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Blogs</h1>
            </div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Date</th>
                    <th scope="col">Category</th>
                    <th scope="col">Author</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {blogs.map((b, i) =>
                    <tr>
                        <td>{i}</td>
                        <td>
                            <img src={b.image} alt="image" style={{ height: "60px", width: "60px", objectFit: "cover" }} />
                        </td>
                        <td>{b.title}</td>
                        <td>{b.date}</td>
                        <td>{b.category}</td>
                        <td>{b.authorId}</td>
                        <td>
                            <button type="button" className="btn btn-warning btn-sm">Update</button>
                            <button onClick={() => handleDelete(b.id)} type="button"
                                    className="mx-3 btn btn-danger btn-sm">Delete
                            </button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    );
};

export default Blogs;
