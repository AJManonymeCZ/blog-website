import React from 'react';
import {Link} from "react-router-dom";

const CategoryItem = ({onClick, name}) => {
    return (
        <Link onClick={onClick} to={"blogs/" + name} className="nav-link link-body-emphasis" style={{fontSize: '13px', overflowX: "hidden"}}>{name}</Link>
    );
};

export default CategoryItem;
