import React, {useState} from 'react';
import { Search } from "react-bootstrap-icons";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

const Navbar = () => {
    const {auth} = useSelector(store => store);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (search.trim().length > 0) {
            navigate("/search/" + search);
        } else {
            navigate("/");
        }
    };
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
                    <form className="d-flex mx-2" role="search">
                        <input style={{height: "31px"}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={e => setSearch(e.target.value)} />
                        <button onClick={handleSearch} className="btn btn-sm btn-outline-success" type="button">Search</button>
                    </form>
                    {auth.user == null
                        ?
                            <Link onClick={resetSelectedLink} className="btn btn-sm btn-outline-secondary" to="signin">Sign in</Link>
                        :
                            <Link onClick={resetSelectedLink} className="btn btn-sm btn-outline-primary" to="dashboard">Dashboard</Link>
                    }
                </div>
            </div>
        </header>
    );
};

export default Navbar;
