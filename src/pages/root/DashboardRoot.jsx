import React, {useEffect, useState} from 'react';
import {
    ArrowReturnLeft,
    DoorClosed,
    GearWideConnected,
    HouseFill, List,
    PeopleFill, Postcard, PostcardHeart,
} from "react-bootstrap-icons";
import {useDispatch, useSelector} from "react-redux";
import {Outlet, useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {logout} from "../../redux/auth/Action";
import UserModal from "../dashboard/UserModal";
import "./dashboard.css"

const DashboardRoot = () => {
    const {auth} = useSelector(store => store);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const heightOfSidebar = window.innerHeight - 34;
    const [show, setShow] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: ""
    });
    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => {
        console.log("USER", auth.user);
        setUser(auth.user)
        setShow(true);
    }

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
        } else {
            setUser(auth.user);
        }
    }, [auth]);
    return (
        <div>
            <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
                <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" to="/">MY BLOGS</Link>
                <ul className="navbar-nav flex-row d-md-none">
                    <li className="nav-item text-nowrap">
                        <button className="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <List />
                        </button>
                    </li>
                </ul>
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
                                        <Link onClick={(e) => setActive(e)}
                                              className="nav-link d-flex align-items-center gap-2 active"
                                              aria-current="page" to="/dashboard">
                                            <HouseFill/>
                                            Dashboard
                                        </Link>
                                    </li>
                                    {
                                        auth.user?.previewRole === "admin"
                                            ?
                                            <DashboardAdminLinks setActive={setActive}/>
                                            :
                                            <DashboardEditorLinks setActive={setActive}/>
                                    }
                                </ul>
                                <hr className="my-3"/>
                                <ul className="nav flex-column mb-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex align-items-center gap-2" to="/">
                                        <ArrowReturnLeft />
                                            MY BLOGS
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <span style={{cursor: "pointer"}} onClick={handleShow} className="nav-link d-flex align-items-center gap-2">
                                            <GearWideConnected />
                                            Settings
                                        </span>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{cursor: "pointer"}} onClick={(e) => handleLogout(e)} className="nav-link d-flex align-items-center gap-2" to="/">
                                            <DoorClosed />
                                            Sign out
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <UserModal show={show} handleClose={handleClose} user={user} />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    )
};

export default DashboardRoot;


const DashboardAdminLinks = ({setActive}) => {
    return (
        <>
            <li className="nav-item">
                <Link onClick={(e) => setActive(e)} className="nav-link d-flex align-items-center gap-2"
                      aria-current="page"
                      to="/dashboard/users">
                    <PeopleFill/>
                    Users
                </Link>
            </li>
            <li className="nav-item">
                <Link onClick={(e) => setActive(e)} className="nav-link d-flex align-items-center gap-2"
                      aria-current="page"
                      to="/dashboard/blogs">
                    <Postcard/>
                    Blogs
                </Link>
            </li>
        </>
    );
};

const DashboardEditorLinks = ({setActive}) => {
    return (<>
        <li className="nav-item">
            <Link onClick={(e) => setActive(e)} className="nav-link d-flex align-items-center gap-2 active"
                  aria-current="page" to="/dashboard/blogs">
                <PostcardHeart/>
                My Blogs
            </Link>
        </li>
    </>);
}


