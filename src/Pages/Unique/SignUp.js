import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase_init';

const SignUp = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmpassword,setConfirmPassword]=useState('')
    const [name,setName]=useState('')

    const getName=e=>{
        setName(e.target.value);
    }
    const getEmail=e=>{
        setEmail(e.target.value);
    }
    const getPassword=e=>{
        setPassword(e.target.value);
    }
    const getConfirmPassword=e=>{
        setConfirmPassword(e.target.value);
    }
    const getForm=e=>{
        e.preventDefault()
        console.log(name,email,password,confirmpassword);
    }
    return (
        <div className='container'>
            <h1 style={{textAlign:'center'}}>Please Sign Up Now</h1>
            <form onSubmit={getForm}>
                <input onBlur={getName} type="text" name="" placeholder='Your Name'/><br />
                <input onBlur={getEmail} type="email" name="" placeholder='Your Email'/><br />
                <input onBlur={getPassword} type="password" name="" placeholder='Your Password'/><br />
                <input onBlur={getConfirmPassword} type="password" name="" placeholder='Confirm Your Password'/><br />
                <input type="submit" value="Sign Up" /><br />
                <Link style={{backgroundColor:'#00cbcb',marginTop:'20px'}} to='/login'><small>Have You Account</small></Link>
            </form>
        </div>
    );
};

export default SignUp;