import React from 'react';
import posts from "../data/posts.json";

const RecentPostsSection = () => {

    const getRecentPosts = () => {
        return [posts[0], posts[2], posts[3]]
    }

    return (
        <ul className="list-unstyled">
            {getRecentPosts().map((p,i) => (
                <li key={i}>
                    <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                        <img src={p.image} alt="img" style={{width: '96px', height: '96px', objectFit: 'cover'}}/>
                        <div className="col-lg-8">
                            <h6 className="mb-0">{p.title}</h6>
                            <small className="text-body-secondary">{p.date}</small>
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default RecentPostsSection;
