import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {Button, Modal} from "react-bootstrap";
import {updateUser} from "../../redux/users/Action";
import {addBlog, updateBLog} from "../../redux/blogs/Action";

const blogInitialState = {
    id: null,
    title: "",
    date: "",
    shortText: "",
    longText: "",
    category: "Technology",
    image: "",
    authorId: null
}

const UpdateBlogsModal = ({show, handleClose, id}) => {
    const categories = ["Technology", "Culture","Science", "Politics", "Health","Style", "Business", "Opinion", "Lifestyle"];
    const {blogs} = useSelector(store => store.blogs);
    const {auth} = useSelector(store => store);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(blogInitialState);
    const [message, setMessage] = useState("");
    const [updating, setUpdating] = useState(true);

    const handleSaveChanges = () => {
        if (updating) {
            dispatch(updateBLog(blogs, blog));
        } else {
            blog.id = blogs.length + 1;
            blog.authorId = auth.user.id;
            blog.date = new Date().toISOString().split('T')[0];
            dispatch(addBlog(blogs, blog));
        }

        handleClose();
        navigate("/dashboard/blogs");
    };

    useEffect(() => {
        if (id == null) {
            setBlog(blogInitialState);
            setUpdating(false);
        } else {
            setUpdating(true);
            const findBlog = blogs.find(b => b.id === parseInt(id));
            if (findBlog) {
                setBlog(findBlog);
            } else {
                setMessage("No blog found with id:" + id);
            }
        }
    }, [id, blogs]);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{updating ? "Update Blog" : "Add Blog"}</Modal.Title>
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
                                    <textarea className="form-control" id="shortText" value={blog.shortText} rows="2" onChange={e => setBlog({...blog, shortText: e.target.value})} ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label for="longText" className="form-label">Long Text</label>
                                    <textarea className="form-control" id="longText" value={blog.longText} rows="6" onChange={e => setBlog({...blog, longText: e.target.value})}></textarea>
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
