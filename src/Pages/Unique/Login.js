import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container'>
            <h1>Please Login</h1>
            <form >
                <input type="email" name="" id="" /><br />
                <input type="password" name="" id="" /><br />
                <input type="submit" value="Sign Up" /><br />
            </form>
            <Link to='/sign-up'>Create An Account</Link>
        </div>
    );
};

export default Login;