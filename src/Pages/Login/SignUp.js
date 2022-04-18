import React, { useRef} from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase_init';

const SignUp = () => {
    /* Social Login */
    const navigate = useNavigate();
    const [logInWithGoogle,userGoogle,loadingGoogle,errorGoogle] = useSignInWithGoogle(auth);
    const [logInWithGithub,userGithub,loadingGithub,errorGithub] = useSignInWithGithub(auth);

    const [newEmail,userNewEmail,loadingNewEmail,errorNewEmail,] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const refName=useRef('')
    const refEmail=useRef('')
    const refPassword=useRef('')
    const refConfPassword=useRef('')
    /* Error Check */
    
    let errortext;

    if(loadingGoogle || loadingGithub||loadingNewEmail){
        return 'Loading...'}

    if (errorGoogle || errorGithub||errorNewEmail ||updateError) {
        errortext = <small className='text-error'>{errorGoogle?.message} {errorGithub?.message}</small>}

    if (userGoogle || userGithub ||userNewEmail ||updating) {
        navigate('/home');
    }
    /* Error End */
   
    const getForm= async (e)=>{
        e.preventDefault()
        const name=refName.current.value
        const email=refEmail.current.value
        const password=refEmail.current.value
        await newEmail(email,password)
        await updateProfile({ displayName: name });
        
    }
    

    return (
        <div className='container'>
            <h1 style={{textAlign:'center'}}>Please Sign Up Now</h1>
            <form onSubmit={getForm}>
                <input ref={refName} type="text" name="" placeholder='Your Name' required/><br />
                <input ref={refEmail} type="email" name="" placeholder='Your Email' required/><br />
                <input ref={refPassword} type="password" name="" placeholder='Your Password' required/><br />
                <input ref={refConfPassword} type="password" name="" placeholder='Confirm Your Password' required/><br />
                <input type="submit" value="Sign Up" /><br />
                {errortext}
            </form>
            <div className='alternative'>
                <p >OR</p>
                <button onClick={()=>logInWithGoogle()}>Login With Google</button><br />
                <button onClick={()=>logInWithGithub()}>Login With Github</button><br />
                <Link style={{backgroundColor:'#00cbcb',marginTop:'20px'}} to='/login'><small>Have You Account</small></Link>

            </div>
        </div>
    );
};

export default SignUp;