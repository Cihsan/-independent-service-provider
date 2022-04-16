import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1>Please Login</h1>
            <form >
                <input type="email" name="" id="" />
                <input type="password" name="" id="" />
                <input type="submit" value="Sign Up" />
            </form>
            <Link to='/signup'>Create An Account</Link>
        </div>
    );
};

export default Login;