import React from 'react';
import {useLoaderData} from "react-router";
import users from "../../data/users.json";
import {useSelector} from "react-redux";

const Blog = () => {
    const id = useLoaderData();
    const {blogs} = useSelector((store) => store);
    const post = blogs.blogs.find(post => post.id === parseInt(id));
    return (
        <div className="container-fluid" style={{maxWidth: '900px'}}>
            { post ?
                    <div>
                        <img style={{ width: '100%', height: '350px', objectFit: 'cover' }} src={post.image} className="img-fluid" alt="img" />
                        <h1 className="mb-1">{post.title}</h1>
                        <div className="d-flex justify-content-between mb-1">
                            <strong className="d-inline-block mb-2 text-primary-emphasis">{post.category}</strong>
                            <div className="text-body-secondary">{users.find(u => u.id === post.authorId).name}</div>
                            <div className="text-body-secondary">{post.date}</div>
                        </div>
                        <p>
                            {post.longText}
                        </p>
                    </div>
                :
                    <div>No blog found!</div>
            }
        </div>
    );
};

export default Blog;
