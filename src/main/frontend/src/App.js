import React, {useEffect, useState} from "react";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchMessage = async () => {
            const response = await fetch("/api/hello");
            const text = await response.text();
            setMessage(text);
        };
        fetchMessage().then(() => console.log("Message fetched"));
    }, []);

    return (
        <div>
            <h1>Message from the backend:</h1>
            <p>{message}</p>
        </div>
    );

}

export default App;