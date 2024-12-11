import {Link} from "react-router-dom";
import React from "react";

function LandingPage() {
    return (
        <div>
            <nav style={{display: 'flex', justifyContent: 'space-between', padding: 10}}>
                Quiz Game App
                <Link to="/home"> Sign In </Link>
            </nav>
            <hr/>
            <h1>Welcome to the Quiz Game App!</h1>
            <p>This is the landing page. All other pages require you to sign in.</p>
        </div>
    );
}

export default LandingPage;