import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/home/Home";
import ErrorPage from "./pages/error/Error";
import BlogsLoader from "./pages/blogs/BlogsLoader";
import BlogLoader from "./pages/blog/BlogLoader";
import Blogs from "./pages/blogs/Blogs";
import DashboardBlogs from "./pages/dashboard/Blogs";
import Root from "./pages/root/Root";
import LoginForm from "./pages/login/LoginForm";
import Blog from "./pages/blog/Blog";
import {Provider, useSelector} from "react-redux";
import {store} from "./redux/Store";
import DashboardRoot from "./pages/root/DashboardRoot";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/dashboard/Users";
import UnAuthorized from "./components/UnAuthorized";
import Search from "./pages/search/Serach";
import SearchLoader from "./pages/search/SearchLoader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "blogs/:category",
                element: <Blogs />,
                loader: BlogsLoader
            },
            {
                path: "blog/:id",
                element: <Blog />,
                loader: BlogLoader
            },
            {
                path: "search/:search",
                element: <Search />,
                loader: SearchLoader
            },
            {
                path: "signin",
                element: <LoginForm />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardRoot />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboard",
                element: <UnAuthorized><Dashboard /></UnAuthorized> ,
            },
            {
                path: "/dashboard/users",
                element:<UnAuthorized ><Users /></UnAuthorized>,
            },
            {
                path: "/dashboard/blogs",
                element: <UnAuthorized><DashboardBlogs /></UnAuthorized>,
            },
        ],
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store} >
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
