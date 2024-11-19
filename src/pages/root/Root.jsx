import React from 'react';
import Navbar from "../../components/Navbar";
import {Outlet} from "react-router";
import CategoriesSection from "../../components/CategoriesSection";

const Root = () => {
    return (
        <div className="container">
            <Navbar />
            <CategoriesSection />
            <Outlet />

        </div>
    );
};

export default Root;
