import React, {useEffect} from 'react';
import Navbar from "../../components/Navbar";
import {Outlet} from "react-router";
import CategoriesSection from "../../components/CategoriesSection";

const Root = () => {
    useEffect(() => {
        let mainContainer = document.querySelector("#mainContainer");
        const footerHeight = document.querySelector("footer").offsetHeight;
        const innerHeight = window.innerHeight;
        mainContainer.setAttribute("style", "min-height: " + (innerHeight - footerHeight) + "px")  ;
    }, []);


    return (
        <div className="container">
            <div id="mainContainer" className="container">
                <Navbar />
                <CategoriesSection />
                <Outlet />
            </div>
            <footer className="footer mt-auto py-3 bg-body-tertiary">
                <div className="container">
                    <span className="text-body-secondary">© MY BLOGS. All rights reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Root;
