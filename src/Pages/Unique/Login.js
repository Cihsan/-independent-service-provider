import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container'>
            
            <form >
            <h1>Login Here</h1>
                <input type="email" name="" id="" placeholder='Your Email' required/><br />
                <input type="password" name="" id="" placeholder='Your Password' required/><br />
                <input type="submit" value="Log In" /><br />
                <Link style={{color:'grey'}} to='/sign-up'><small>Create An Account</small></Link>
            </form>
            
        </div>
    );
};

export default Login;