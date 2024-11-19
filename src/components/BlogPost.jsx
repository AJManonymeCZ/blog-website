import React, {useEffect} from 'react';
import users from '../data/users.json';

const BlogPost = ({post}) => {
    const getAuthorById = (id) => {
        return users.find(u => u.id === id) ? users.find(u => u.id === id): post.authorId;
    };

    return (
        <article className="blog-post">
            <h2 className="display-5 link-body-emphasis mb-1">{post.title}</h2>
            <p className="blog-post-meta">{post.date} <a href="#">{getAuthorById(post.authorId).name}</a></p>
            <p>{post.longText}</p>
        </article>
    );
};

export default BlogPost;
