import React, {useEffect, useState} from 'react';
import {useLoaderData} from "react-router";
import {useSelector} from "react-redux";
import BlogPostCard from "../../components/BlogPostCard";

const Search = () => {
    const searchText = useLoaderData();
    const {blogs} = useSelector(store => store.blogs);
    const [findBlogs, setFindBlogs] = useState([]);

    useEffect(() => {
        const match = [];
        blogs.forEach(b => {
           if (b.title.toLowerCase().match(searchText.toLowerCase()) != null ||
               b.shortText.toLowerCase().match(searchText.toLocaleString())) {
                match.push(b);
           }
        });
        setFindBlogs(match);
    }, [blogs]);

    return (
        <div>
            {findBlogs.length > 0 ? findBlogs.map(b => <BlogPostCard col={12} post={b} />) : "No blogs found :("}
        </div>
    );
};

export default Search;
