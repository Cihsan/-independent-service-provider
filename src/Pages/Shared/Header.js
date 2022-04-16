import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/cart'>Cart</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/sign-up'>Sign Up</NavLink>
        </div>
    );
};

export default Header;