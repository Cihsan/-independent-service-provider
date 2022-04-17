import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='banner'>
            <div className='flex container'>
                <h3>Fitness Park</h3>
                <nav>
                
                    <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/blogs'>Blog</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/about'>About</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/checkout'>Checkout</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/sign-up'>Sign Up</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "link")} to='/login'>Login</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;