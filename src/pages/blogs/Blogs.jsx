import React from 'react';
import {useLoaderData} from "react-router";
import BlogPostCard from "../../components/BlogPostCard";
import {useSelector} from "react-redux";
import posts from "../../data/posts.json";

const Blogs = () => {
    const category = useLoaderData();
    const {blogs} = useSelector(store => store);
    const posts = blogs.blogs.filter(p => p.category === category);
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
