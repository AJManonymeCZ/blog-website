import React, {useEffect, useState} from 'react';
import './LoginForm.css';
import users from '../../data/users.json';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = () => {
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            //make auth store with redux and dispatch login action after that redirect to dashboard
        } else {
            setError("Wrong email or password");
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setError(null);
        }, 3000);
    }, [error]);

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
