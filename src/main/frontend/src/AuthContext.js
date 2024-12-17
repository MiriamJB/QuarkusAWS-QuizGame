import React, { createContext, useState, useContext } from 'react';
import {getCurrentUser} from "aws-amplify/auth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [signedIn, setSignedIn] = useState(false);

    const checkSignIn = async () => {
        try {
            const {username} = await getCurrentUser();
            console.log(`Signed in as: ${username}`);
            setSignedIn(true);
        } catch (err) {
            console.log("Not signed in");
            setSignedIn(false);
        }
    }

    return (
        <AuthContext.Provider value={{ signedIn, setSignedIn, checkSignIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);