import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await Auth.currentAuthenticatedUser();
                setIsAuthenticated(true);
            } catch {
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, []);

    const handleSignOut = async () => {
        try {
            await Auth.signOut();
            setIsAuthenticated(false);
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    return (
        <nav style={styles.navbar}>
            <h1 style={styles.logo}>MyApp</h1>
            <div>
                <Link to="/" style={styles.link}>Landing</Link>
                {isAuthenticated ? (
                    <>
                        <Link to="/home" style={styles.link}>Home</Link>
                        <Link to="/profile" style={styles.link}>Profile</Link>
                        <button onClick={handleSignOut} style={styles.button}>Sign Out</button>
                    </>
                ) : (
                    <p style={styles.link}>Please Sign In</p>
                )}
            </div>
        </nav>
    );
};

const styles = {
    navbar: { display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#282c34' },
    logo: { color: '#61dafb' },
    link: { marginRight: '1rem', color: 'white', textDecoration: 'none' },
    button: { background: '#61dafb', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer' }
};

export default Navbar;
