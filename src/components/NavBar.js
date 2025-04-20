// src/components/NavBar.js
import React from 'react';
import '../styles/App.css';
import '../styles/NavBar.css';

function NavBar() {
    return (
        <nav>
            <ul>
                <li><a href="#music">Music</a></li>
                <li><a href="#business">Business</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;