import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {withAuthenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import {useAuth} from "../AuthContext";

const NavAuth = ({signOut, user}) => {
    const navigate = useNavigate();
    const {setSignedIn} = useAuth();

    const handleSignOut = () => {
        signOut();
        setSignedIn(false);
        navigate('/');
    };

    return (
        <>
            <Link to="/"> Home </Link>
            <span> | </span>
            Hello, {user.username}
            <span> | </span>
            <button onClick={handleSignOut}>Sign Out</button>
        </>
    );
};

export default withAuthenticator(NavAuth);