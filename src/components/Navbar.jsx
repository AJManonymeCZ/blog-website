import React from 'react';
import { Search } from "react-bootstrap-icons";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = () => {
    const {auth} = useSelector(store => store);
    const resetSelectedLink = () => {
        document.querySelectorAll("#navLinks a").forEach(link => {
           link.classList.remove("active");
        });
    }

    return (
        <header className="border-bottom lh-1 py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">
                    <a onClick={resetSelectedLink} className="link-secondary" href="#">Subscribe</a>
                </div>
                <div className="col-4 text-center">
                    <Link onClick={resetSelectedLink} className="blog-header-logo text-body-emphasis text-decoration-none" to={"/"}>MYBLOG</Link>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                    <Link  className="link-secondary" to="#" aria-label="Search">
                        <Search className="mx-3" size={20} />
                    </Link>
                    {auth.user == null
                        ?
                            <Link onClick={resetSelectedLink} className="btn btn-sm btn-outline-secondary" to="signin">Sign up</Link>
                        :
                            <Link onClick={resetSelectedLink} className="btn btn-sm btn-outline-primary" to="dashboard">Dashboard</Link>
                    }
                </div>
            </div>
        </header>
    );
};

export default Navbar;
