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
import Root from "./pages/root/Root";
import LoginForm from "./pages/login/LoginForm";
import Blog from "./pages/blog/Blog";

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
                path: "signin",
                element: <LoginForm />,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
