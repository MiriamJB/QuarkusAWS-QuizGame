import React, {useEffect, useState} from "react";
import {API_URL} from "./config";

function TestPage() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchMessage = async () => {
            const response = await fetch(`${API_URL}/api/hello`);
            const text = await response.text();
            setMessage(text);
        };
        fetchMessage().then(() => console.log("Message done fetching"));
    }, []);

    return (
        <div>
            <h1>TestPage</h1>
            <p>{message}</p>
        </div>
    );

}

export default TestPage;