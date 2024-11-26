import React from 'react';
import posts from "../../data/posts.json";
import BlogPostCard from "../../components/BlogPostCard";
import BlogPost from "../../components/BlogPost";
import RecentPostsSection from "../../components/RecentPostsSection";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
const Home = () => {
    const {blogs} = useSelector(store => store);
    const getRandomBlog = () => {
      return blogs.blogs[Math.floor(Math.random() * blogs.blogs.length)];
    };

    return (
        <div>
            <main className="container">
                <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                    <div className="col-lg-6 px-0">
                        <h1 className="display-4 fst-italic">{blogs.blogs[12].title}</h1>
                        <p className="lead my-3">{blogs.blogs[12].shortText}</p>
                        <p className="lead mb-0"><Link to={"/blog/" + 13} className="text-body-emphasis fw-bold">Continue reading...</Link></p>
                    </div>
                </div>

                <div className="row mb-2">
                    <BlogPostCard post={getRandomBlog()}/>
                    <BlogPostCard post={getRandomBlog()}/>
                </div>

                <div className="row g-5">
                    <div className="col-md-8">
                        <h3 className="pb-4 mb-4 fst-italic border-bottom">
                            Best Blogs
                        </h3>

                        <BlogPost post={getRandomBlog()} />
                        <BlogPost post={getRandomBlog()} />
                        <BlogPost post={getRandomBlog()} />
                    </div>

                    <div className="col-md-4">
                        <div className="position-sticky" style={{top: '2rem'}}>
                            <div className="p-4 mb-3 bg-body-tertiary rounded">
                                <h4 className="fst-italic">About</h4>
                                <p className="mb-0">
                                    Introduce your audience to the unique aspects of your publication,
                                    the talented writers behind it, the diverse content we offer,
                                    or any other information that helps convey what makes us special.
                                    The choice is yours.
                                </p>
                            </div>

                            <div>
                                <h4 className="fst-italic">Recent posts</h4>
                                <RecentPostsSection />
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Home;
