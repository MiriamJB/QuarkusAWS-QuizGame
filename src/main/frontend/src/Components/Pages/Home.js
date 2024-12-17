import React, {useEffect, useState} from "react";
import {API_URL} from "../../config";
import {Link} from "react-router-dom";
import {useAuth} from "../../AuthContext";

// Home page for authenticated users
function Home() {
    const [message, setMessage] = useState("");
    const {setSignedIn} = useAuth();

    useEffect(() => {
        setSignedIn(true);
        const fetchMessage = async () => {
            const response = await fetch(`${API_URL}/api/hello`);
            const text = await response.text();
            setMessage(text);
        };
        fetchMessage().then(() => console.log("Message done fetching"));
    }, []);

    return (
        <div>
            <h1>Home page</h1>
            <Link to={"/yours"} style={{padding:5}}>Your quizzes</Link>
            <Link to={"/create"} style={{padding:5}}>Create a quiz</Link>
            <Link to={""} style={{padding:5}}>Join a quiz</Link>
            <Link to={"/browse"} style={{padding:5}}>Browse Quizzes</Link>
        </div>
    );

}

export default Home;