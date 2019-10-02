import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/logout">Log Out</Link></li>
                <li><Link to="/recipes">Recipes</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;
