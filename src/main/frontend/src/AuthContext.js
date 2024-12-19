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

    // const getUserID = async () => {
    //     try {
    //         const {userId} = await getCurrentUser();
    //         return userId;
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    const getUsername = async () => {
        try {
            const {username} = await getCurrentUser();
            return username;
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <AuthContext.Provider value={{ signedIn, setSignedIn, checkSignIn, getUsername }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);