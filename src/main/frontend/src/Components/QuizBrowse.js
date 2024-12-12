import {useEffect, useState} from "react";
import {API_URL} from "../config";

function QuizBrowse() {
const [message, setMessage] = useState("");

useEffect(() => {
    const fetchMessage = async () => {
        const response = await fetch(`${API_URL}/api/quiz`);
        const text = await response.text();
        setMessage(text);
    };
    fetchMessage().then(() => console.log("Message done fetching"));
}, []);

    return (
        <div>
            <h1>Browse Quizzes</h1>
            <p>{message}</p>
        </div>
    );
}

export default QuizBrowse;