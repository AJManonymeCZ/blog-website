import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {Button, Modal} from "react-bootstrap";
import {updateUser} from "../../redux/users/Action";
import {updateBLog} from "../../redux/blogs/Action";

const UpdateBlogsModal = ({show, handleClose, id}) => {
    const categories = ["Technology", "Culture","Science", "Politics", "Health","Style", "Business", "Opinion", "Lifestyle"];
    const {blogs} = useSelector(store => store.blogs);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [message, setMessage] = useState("");

    const handleSaveChanges = () => {
        dispatch(updateBLog(blogs, blog));
        handleClose();
        navigate("/dashboard/blogs");
    };

    useEffect(() => {
        const findBlog = blogs.find(b => b.id === parseInt(id));
        if (findBlog) {
            setBlog(findBlog);
        } else {
            setMessage("No blog found with id:" + id);
        }
    }, [id, blogs]);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        blog
                            ?
                            <form className="row g-3">
                                <div className="col-md-12">
                                    <label htmlFor="name" className="form-label">Image Url</label>
                                    <input type="text" className="form-control" id="name" value={blog.image} onChange={e => setBlog({...blog, image: e.target.value})} />
                                </div>
                                <div className="col-md12">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="email" className="form-control" id="title" value={blog.title} onChange={e => setBlog({...blog, title: e.target.value})} />
                                </div>
                                <select className="form-select" aria-label="Select Category" onChange={e => setBlog({...blog, category: e.target.value})}>
                                    {categories.map(r => <option selected={r === blog.category}  value={r}>{r}</option>)}
                                </select>
                                <div className="mb-3">
                                    <label for="shortText" className="form-label">Short Text</label>
                                    <textarea className="form-control" id="shortText" rows="2" onChange={e => setBlog({...blog, shortText: e.target.value})} >{blog.shortText}</textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="longText" className="form-label">Long Text</label>
                                    <textarea className="form-control" id="longText" rows="6" onChange={e => setBlog({...blog, longText: e.target.value})}>{blog.longText}</textarea>
                                </div>
                            </form>
                            :
                            message
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UpdateBlogsModal;
