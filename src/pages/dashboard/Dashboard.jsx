import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Dashboard = () => {
    const {auth} = useSelector((state) => state);
    const {users} = useSelector(store => store.users);
    const {blogs} = useSelector(store => store.blogs);

    const getEditorsBlogsCount = () => {
        return blogs.filter(blog => blog.authorId === auth.user.id).length;
    };
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
            </div>

            <div className="row g-4">
                {auth.user.role === "admin"
                    ?
                    <div className="col-md-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Users</h5>
                                <p className="card-text fs-4">{users.length}</p>
                                <Link to="/dashboard/users" className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                    :
                    ""
                }
                <div className="col-md-6">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">Blogs</h5>
                            <p className="card-text fs-4">{auth.user.role === "admin" ? blogs.length : getEditorsBlogsCount()}</p>
                            <Link to={auth.user.role === "admin" ? '/dashboard/blogs' : '/dashboard/my-blogs'} className="btn btn-success">View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
