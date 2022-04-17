import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const getEmail=e=>{
        setEmail(e.target.value);
    }
    const getPassword=e=>{
        setPassword(e.target.value);
    }
    const getForm=e=>{
        e.preventDefault()
        console.log(email,password);
    }
    return (
        <div className='container'>
            <h1 style={{textAlign:'center'}}>Login Here</h1>
            <form onSubmit={getForm}>
                <input onBlur={getEmail} type="email" name=""  placeholder='Your Email' required/><br />
                <input onBlur={getPassword} type="password" name="" placeholder='Your Password' required/><br />
                <input type="submit" value="Log In" /><br />
                <Link style={{color:'grey'}} to='/sign-up'><small>Create An Account</small></Link>

            </form>
        </div>
    );
};

export default Login;