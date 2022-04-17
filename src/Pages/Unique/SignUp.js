import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='container'>
            
            <form >
                <h1>Please Sign Up Now</h1>
                <input type="text" name="" id="" placeholder='Your Name'/><br />
                <input type="email" name="" id="" placeholder='Your Email'/><br />
                <input type="password" name="" id="" placeholder='Your Password'/><br />
                <input type="password" name="" id="" placeholder='Confirm Your Password'/><br />
                <input type="submit" value="Sign Up" /><br />
                <Link style={{color:'grey'}} to='/login'><small>Create An Account</small></Link>
            </form>
            
        </div>
    );
};

export default SignUp;