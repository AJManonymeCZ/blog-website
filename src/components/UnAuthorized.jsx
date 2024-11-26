import React from 'react';
import {useSelector} from "react-redux";
import {Navigate} from "react-router";

const UnAuthorized = ({children, role}) => {
    const {auth} = useSelector(store => store);
    return auth.user != null ? children : <Navigate to={"/signin"} replace />;
};

export default UnAuthorized;
