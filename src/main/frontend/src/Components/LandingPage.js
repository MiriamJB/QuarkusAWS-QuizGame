import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {useAuth} from "../AuthContext";

function LandingPage() {
    const navigate = useNavigate();
    const {signedIn} = useAuth();

    useEffect( () => {
        if (signedIn) {
            navigate('/home');
        }
    }, []);

    return (
        <div>
            <h1>Welcome to the Quiz Game App!</h1>
            <p>This is the landing page. All other pages require you to sign in.</p>
        </div>
    );
}

export default LandingPage;