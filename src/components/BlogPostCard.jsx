import React from 'react';
import {ChevronRight} from "react-bootstrap-icons";
import {Link} from "react-router-dom";

const BlogPostCard = ({post, col = 6}) => {
    return (
        <div className={"col-md-" + col}>
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary-emphasis">{post.category ?? ''}</strong>
                    <h3 className="mb-0">{post.title}</h3>
                    <div className="mb-1 text-body-secondary">{post.date}</div>qq
                    <p className="card-text mb-auto">{post.shortText}</p>
                    <Link to={"/blog/" + post.id} className="icon-link gap-1 icon-link-hover stretched-link">
                        Continue reading
                        <ChevronRight />
                    </Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img src={post.image} alt="img" style={{width: '200px', height: '200px', objectFit: 'cover'}}/>
                </div>
            </div>
        </div>
    );
};

export default BlogPostCard;
