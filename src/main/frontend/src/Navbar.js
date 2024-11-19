import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <p className={styles.logo}>Quiz Game App</p>
            </div>
            <div className={styles.linkContainer}>
                <Link to="/" className={styles.link}>Home</Link>
                <Link to="/test" className={styles.link}>Test</Link>
            </div>
        </nav>
    );
};

export default Navbar;
