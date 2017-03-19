import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
    <div className="container">
        <h1>brand.</h1>
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
        </nav>
    </div>
);

export default Navbar;
