import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <span className="navbar-brand mb-0 h1">CPDMF</span>
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link"to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
        </ul>
        </nav>
                
    );
}

export default Header;
