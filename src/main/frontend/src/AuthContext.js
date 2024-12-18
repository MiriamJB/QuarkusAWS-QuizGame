import React, { createContext, useState, useContext } from 'react';
import {getCurrentUser} from "aws-amplify/auth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [signedIn, setSignedIn] = useState(false);
    const [username, setUsername] = useState('');

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

    const checkUsername = async () => {
        try {
            const {username} = await getCurrentUser();
            setUsername(username);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <AuthContext.Provider value={{ signedIn, setSignedIn, checkSignIn, username, checkUsername }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);