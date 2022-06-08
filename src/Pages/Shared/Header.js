import { signOut } from 'firebase/auth';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () =>{
        signOut(auth);
    }
    return (
    <div className='topnav'>
        <div className='navbar'>
                <div className='flex container'>
                    <h3 className='title' >Electrial Solution</h3>
                    <nav>
                        <div>
                        <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/blogs'>Blog</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/about'>About</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/checkout'>Checkout</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/review'>Reviews</NavLink>
                        </div>
                        {!user?
                            <div>
                            <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/login'>Login</NavLink>
                            </div>
                            :
                            <button onClick={logout}>Log Out</button>
                            }
                    </nav>
                </div>
        </div>
    </div>
        
    );
};

export default Header;