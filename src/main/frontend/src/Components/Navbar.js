import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.css';

const Navbar = ({ signOut, user }) => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut();
        navigate('/');
    };

    return (
        <>
            <nav style={{display: 'flex', justifyContent: 'space-between', padding: 10}}>
                <div>
                    Quiz Game App
                </div>
                <div>
                    <Link to="/"> Landing Page </Link>
                    <span> | </span>
                    <Link to="/home"> Home </Link>
                    <span> | </span>
                    Hello, {user.username}
                    <button onClick={handleSignOut}>Sign out</button>
                </div>
            </nav>
            <hr/>
        </>
    );
};

export default Navbar;