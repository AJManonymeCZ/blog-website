import React from 'react';
import {useLoaderData} from "react-router";
import BlogPostCard from "../../components/BlogPostCard";

const Blogs = () => {
    const posts = useLoaderData();
    return (
        <main className="container" style={{maxWidth: '900px'}}>
            {posts.length !== 0
                ?
                posts.map((p, i) => (
                    <BlogPostCard key={i} post={p} col={12} />
                ))
                :
                "No blogs found for this category"
            }
        </main>
    );
};

export default Blogs;
