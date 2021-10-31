import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "red"
      }
    return (
        <div className="header">
            <NavLink to='/home'activeStyle={activeStyle}>Home</NavLink>
            <NavLink to='/friends'activeStyle={activeStyle}>Friends</NavLink>
            <NavLink to='/about'activeStyle={activeStyle}>About</NavLink>
            <NavLink to='/about/coulture'activeStyle={activeStyle}>Coulture</NavLink>

        </div>
    );
};

export default Header;