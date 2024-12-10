import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav style={{display: 'flex', justifyContent: 'space-between', padding: 10}}>
                <div>
                    Quiz Game App
                </div>
                <div>
                    <Link to="/"> Home </Link>
                    <span> | </span>
                    <Link to="/test"> Test </Link>
                    <span> | </span>
                    <Link to="/auth"> Auth </Link>
                </div>
            </nav>
            <hr/>
        </>
    );
};

export default Navbar;
