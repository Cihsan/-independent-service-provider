import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container flex'>
            <div>
                <h3>Fitness Park</h3>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/cart'>Cart</NavLink>
                    <NavLink to='/blogs'>Blog</NavLink>
                    <NavLink to='/checkout'>Checkout</NavLink>
                    <NavLink to='/sign-up'>Sign Up</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;