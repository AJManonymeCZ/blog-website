import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteBlog} from "../../redux/blogs/Action";
import UpdateBlogsModal from "./UpdateBlogsModal";
import {Plus} from "react-bootstrap-icons";

const Blogs = () => {
    const {blogs} = useSelector((state) => state.blogs);
    const {users} = useSelector((state) => state.users);
    const {auth} = useSelector(store => store);
    const dispatch = useDispatch();

    const [id, setId] = useState(null);
    const [show, setShow] = useState(false);
    const [allOrMyBlogs, setAllOrMyBlogs] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = (id) => {
        dispatch(deleteBlog(blogs, id));
    };

    const findAuthorById = (id) =>{
        return users.find(u => u.id === id)?.name ?? "Unknown";
    }

    const handleUpdate = (id) => {
        setId(id);
        handleShow();
    };

    const handleCreate = () => {
      setId(null);
      handleShow();
    };

    useEffect(() => {
        if (auth.user.role !== "admin") {
            setAllOrMyBlogs(blogs.filter(b => b.authorId === auth.user.id));
        } else {
            setAllOrMyBlogs(blogs);
        }
    }, [auth, blogs]);

    return (
        <>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Blogs</h1>
                <button onClick={() => handleCreate()} className="btn btn-primary"><Plus width="16" height="16" />Add Blog</button>
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
                {allOrMyBlogs.map((b, i) =>
                    <tr>
                        <td>{i + 1}</td>
                        <td>
                            <img src={b.image} alt="image" style={{ height: "60px", width: "60px", objectFit: "cover" }} />
                        </td>
                        <td>{b.title}</td>
                        <td>{b.date}</td>
                        <td>{b.category}</td>
                        <td>{findAuthorById(b.authorId)}</td>
                        <td>
                            <button onClick={() => handleUpdate(b.id)} type="button" className="btn btn-warning btn-sm">Update</button>
                            <button onClick={() => handleDelete(b.id)} type="button"
                                    className="mx-3 btn btn-danger btn-sm">Delete
                            </button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            <UpdateBlogsModal show={show} handleClose={handleClose} id={id} />
        </>
    );
};

export default Blogs;
