import React, {useState} from 'react';
import CategoryItem from "./CategoryItem";
import {categories} from "../data/categories";
const CategoriesSection = () => {
    const [selected, setSelected] = useState(null);

    const setSelectedLink = (e) => {
        const clickedEl = e.target;
        if(selected) {
            selected.classList.remove("active")
        }
        clickedEl.classList.add("active");
        setSelected(clickedEl);
    }

    return (
        <div className="nav-scroller py-1 mb-3 border-bottom">
            <nav id="navLinks" className="nav nav-underline justify-content-center">
                {categories.map((c, i) => (<CategoryItem onClick={setSelectedLink} key={i} name={c} />))}
            </nav>
        </div>
    );
};

export default CategoriesSection;
