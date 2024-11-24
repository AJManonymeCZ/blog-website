import React, {useEffect, useState} from 'react';
import './LoginForm.css';
import users from '../../data/users.json';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth/Action";
import {useNavigate} from "react-router";

const LoginForm = () => {
    const {auth} = useSelector(store => store);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = () => {
        dispatch(login({email: email, password: password}));
    }

    useEffect(() => {
        if (auth.user) {
            navigate('/dashboard');
        } else {
            setError(auth.error);
        }
    }, [auth]);

    return (
        <div>
            <form className="form-signin mx-auto">
                {error
                    ?
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                    :
                    ""
                }
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating">
                    <input onInput={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input onInput={(e) => setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Remember me
                    </label>
                </div>
                <button onClick={handleLogin} className="btn btn-primary w-100 py-2" type="button">Sign in</button>
            </form>
        </div>
    );
};

export default LoginForm;
