import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='container'>
            <h1>Please Sign Up Now</h1>
            <form >
                <input type="text" name="" id="" /><br />
                <input type="email" name="" id="" /><br />
                <input type="password" name="" id="" /><br />
                <input type="submit" value="Sign Up" />
            </form>
            <Link to='/login'>Already Have Login</Link>
        </div>
    );
};

export default SignUp;