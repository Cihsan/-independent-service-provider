import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase_init';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Login = () => {
    const [logInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [logInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [emailPasswordLogin, emailPasswordLoginUser, emailPasswordLoginLoading, emailPasswordLoginError] = useSignInWithEmailAndPassword(auth);
    
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
        emailPasswordLogin(email,password)
    }

    
    return (
        <div className='container'>
            <h1 className='login'>Login Here</h1>
            
            <form onSubmit={getForm}>
                <input onBlur={getEmail} type="email" name=""  placeholder='Your Email' required/><br />
                <input onBlur={getPassword} type="password" name="" placeholder='Your Password' required/><br />
                <input type="submit" value="Log In" /><br />
            </form>
            <div className='alternative'>
                <p >OR</p>
                <button onClick={()=>logInWithGoogle()}>Login With Google</button><br />
                <button onClick={()=>logInWithGithub()}>Login With Github</button><br />
                <Link style={{backgroundColor:'#00cbcb',marginTop:'20px'}} to='/sign-up'><small>Don't have an account?</small></Link>
            </div>
            
        </div>
    );
};

export default Login;