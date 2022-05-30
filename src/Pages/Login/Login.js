import React, { useRef} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';
import { sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const refEmail= useRef('')
    const refPassword= useRef('')

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [emailPasswordLogin, emailPasswordLoginUser, emailPasswordLoginLoading, emailPasswordLoginError] = useSignInWithEmailAndPassword(auth);
    
    /* Social Login */
    const navigate = useNavigate();
    const [logInWithGoogle, userGoogle,loadingGoogle,errorGoogle] = useSignInWithGoogle(auth);
    const [logInWithGithub, userGithub,loadingGithub,errorGithub] = useSignInWithGithub(auth);
    
    
    if (emailPasswordLoginUser ||userGoogle || userGithub) {
        navigate(from, { replace: true });
    }

    if(loadingGoogle || loadingGithub || emailPasswordLoginLoading){
        return 'Loading...'
    }

    let errortext;
    if (errorGoogle || errorGithub || emailPasswordLoginError) {
        errortext = <small className='text-error'>{errorGoogle?.message} {errorGithub?.message}{emailPasswordLoginError?.message}</small>}

    /* Error End */



    const getForm= async e=>{
        e.preventDefault()
        const email=refEmail.current.value
        const password=refPassword.current.value
        await emailPasswordLogin(email,password)
    }
    const resetPassword = async () => {
        const email = refEmail.current.value;
        if (email) {
            toast('Sent email Check Now');
            await sendPasswordResetEmail(email);
        }
        else{
            toast('please enter your email address');
        }
    }
    return (
        <div className='container'>
            <h1 className='login'>Login Here</h1>
            
            <form onSubmit={getForm}>
                
                <input ref={refEmail} type="email" name="email"  placeholder='Your Email' required/><br />
                <input ref={refPassword} type="password" name="password" placeholder='Your Password' required/><br />
                <input type="submit" value="Log In" /><br />
                {errortext}
            </form>
            <div className='alternative'>
                <p >OR</p>
                <button onClick={()=>logInWithGoogle()}>Login With Google</button><br />
                <button onClick={()=>logInWithGithub()}>Login With Github</button><br />
                <Link style={{backgroundColor:'#00cbcb',marginTop:'20px'}} to='/sign-up'><small>Don't have an account?</small></Link><br /><br />
                <p>Forget Password ? <button onClick={resetPassword}>Reset Password</button></p>
                <ToastContainer></ToastContainer>
            </div>
            
        </div>
    );
};

export default Login;