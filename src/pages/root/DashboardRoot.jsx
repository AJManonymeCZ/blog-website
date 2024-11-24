import React, {useEffect, useState} from 'react';
import {
    ArrowLeftShort,
    ArrowReturnLeft,
    DoorClosed,
    GearWideConnected,
    HouseFill,
    PeopleFill, Postcard,
    Search
} from "react-bootstrap-icons";
import {useDispatch, useSelector} from "react-redux";
import {Outlet, useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {logout} from "../../redux/auth/Action";
import {Button, Modal} from "react-bootstrap";
import UserModal from "../dashboard/UserModal";

const DashboardRoot = () => {
    const {auth} = useSelector(store => store);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const heightOfSidebar = window.innerHeight;



    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

    const setActive = (e) => {
        document.querySelectorAll("#ulLinks li a").forEach(a => {
           a.classList.remove('active');
        });
        e.target.classList.add("active");
    }

    useEffect(() => {
        if (auth.user === null) {
            navigate("/signin");
        }
    }, [auth]);

    return (
        <div>
            <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">MY BLOGS</a>
            </header>

            <div className="container-fluid">
                <div className="row">
                    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary" style={{minHeight: heightOfSidebar + "px"}}>
                        <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="sidebarMenuLabel">MY BLOGS</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                                <ul id="ulLinks" className="nav flex-column">
                                    <li className="nav-item">
                                        <Link onClick={(e) => setActive(e)} className="nav-link d-flex align-items-center gap-2 active" aria-current="page" to="/dashboard">
                                            <HouseFill />
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link onClick={(e) => setActive(e)} className="nav-link d-flex align-items-center gap-2" aria-current="page" to="/dashboard/users">
                                            <PeopleFill />
                                            Users
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link onClick={(e) => setActive(e)} className="nav-link d-flex align-items-center gap-2" aria-current="page" to="/dashboard/blogs">
                                            <Postcard />
                                            Blogs
                                        </Link>
                                    </li>
                                </ul>
                                <hr className="my-3" />
                                <ul className="nav flex-column mb-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex align-items-center gap-2" to="/">
                                            <ArrowReturnLeft />
                                            MY BLOGS
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link onClick={handleShow} className="nav-link d-flex align-items-center gap-2" to="">
                                            <GearWideConnected />
                                            Settings
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link onClick={(e) => handleLogout(e)} className="nav-link d-flex align-items-center gap-2" to="#">
                                            <DoorClosed />
                                            Sign out
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <UserModal show={show} handleClose={handleClose} />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    )
};

export default DashboardRoot;
