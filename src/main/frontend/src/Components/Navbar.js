import React from 'react';
import '@aws-amplify/ui-react/styles.css';
import NavAuth from "./NavAuth";
import NavUnAuth from "./NavUnAuth";
import {useAuth} from "../AuthContext";
import './Navbar.css';

const Navbar = () => {
    const {signedIn} = useAuth();

    return (
        <>
            <nav style={{display: 'flex', justifyContent: 'space-between', padding: 10}}>
                <div>
                    Quiz Game App
                </div>
                <div>
                {signedIn ? <NavAuth/> : <NavUnAuth/>}
                </div>
            </nav>
            <hr/>
        </>
    );
};

export default Navbar;