import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"; // Get route parameters
import {API_URL} from "../../config";

function QuizDetails() {
    const {quizId} = useParams(); // Access quizId from URL
    const [quiz, setQuiz] = useState(null);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchQuizDetails = async () => {
            const response = await fetch(`${API_URL}/api/quiz/${quizId}`);
            const data = await response.json();
            setQuiz(data.quiz);
            setQuestions(data.questions);
        };
        fetchQuizDetails().then(() => console.log(`Details for quiz ${quizId} fetched`));
    }, [quizId]);

    if (!quiz) {
        return <p>Loading quiz details...</p>;
    }

    return (
        <div>
            <h1>{quiz.quizName}</h1>
            <p><strong>ID:</strong> {quiz.id}</p>
            <p><strong>Creator:</strong> {quiz.creatorID ?? "Unknown"}</p>
            <p><strong>Visibility:</strong> {quiz.visibility}</p>
            <p><strong>Questions:</strong> {quiz.questionCount}</p>
            <div>
                {questions.map(question => (
                    <div key={question.id}>
                        <p>{question.questionText}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuizDetails;