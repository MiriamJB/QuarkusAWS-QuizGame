import {useEffect, useState} from "react";
import {API_URL} from "../../config";
import {Link} from "react-router-dom";
import './QuizBrowse.css'; // Import the CSS file
import { useAuth } from "../../AuthContext";

function QuizView() {
    const {getUserID} = useAuth();
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        const fetchQuizzes = async () => {
            const userId = await getUserID();
            const response = await fetch(`${API_URL}/api/quiz/user/${userId}`);
            const data = await response.json();
            setQuizzes(data);
        };
        fetchQuizzes().then(() => console.log("Quizzes done fetching"));
    }, []);

    return (
        <div className="quiz-container">
            <h1 className="quiz-title">Your Quizzes</h1>
            <div className="quiz-grid">
                {quizzes.map(quiz => (
                    <div key={quiz.id} className="quiz-card">
                        <div style={{display:"flex", flexDirection:"row"}}>
                            <img src={quiz.image} alt="Quiz thumbnail"/>
                            <div>
                                <h2>{quiz.quizName}</h2>
                                <p>{quiz.visibility} | {quiz.questionCount} questions | {quiz.timesTaken} plays</p>
                            </div>
                        </div>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <Link to={"/"}>Play</Link>
                            <Link to={`/browse/${quiz.id}`}>
                                View Details
                            </Link>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuizView;
