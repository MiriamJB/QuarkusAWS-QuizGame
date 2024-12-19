import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"; // Get route parameters
import {API_URL} from "../../config";
import {useAuth} from "../../AuthContext";

function QuizEdit() {
    const {quizId} = useParams(); // Access quizId from URL
    const {username} = useAuth();
    const [quiz, setQuiz] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [message, setMessage] = useState('');
    const [updatingQuiz, setUpdatingQuiz] = useState(false);

    useEffect(() => {
        const fetchQuizDetails = async () => {
            const response = await fetch(`${API_URL}/api/quiz/${quizId}`);
            const data = await response.json();
            setQuiz(data.quiz);
            setQuestions(data.questions);
        };
        fetchQuizDetails().then(() => console.log(`Details for quiz ${quizId} fetched`));
    }, [quizId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setUpdatingQuiz(true);
        // const quizAndQuestions = {quiz: quiz, questions: []};

        try {
            const response = await fetch(`${API_URL}/api/quiz/${quiz.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(quiz),
            });

            if (response.ok) {
                setMessage('Quiz updated successfully!');
            } else {
                const errorData = await response.json();
                setMessage(`Failed to update quiz: ${errorData.error}`);
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
        setUpdatingQuiz(false);
    };

    const handleImageChange = (e) => {
        setQuiz({ ...quiz, image: e.target.files[0] });
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        if (!window.confirm('Are you sure you want to delete this quiz?')) {
            return;
        }

        try {
            const response = await fetch(`${API_URL}/api/quiz/${quizId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setMessage('Quiz deleted successfully!');
            } else {
                const errorData = await response.json();
                setMessage(`Failed to delete quiz: ${errorData.error}`);
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    }

    if (!quiz) {
        return <p>Loading quiz details...</p>;
    }

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h1>Update {quiz.quizName}</h1>
            <form onSubmit={handleSubmit}>
                <div style={{marginBottom: '20px'}}>
                    <label htmlFor='quizName' style={{display: 'block', marginBottom: '5px'}}>
                        Quiz Name:
                    </label>
                    <input
                        type='text'
                        id='quizName'
                        value={quiz.quizName}
                        onChange={(e) => setQuiz({...quiz, quizName: e.target.value})}
                        required
                        style={{width: '100%', padding: '8px'}}
                    />
                </div>

                <div style={{marginBottom: '20px'}}>
                    <label htmlFor='visibility' style={{display: 'block', marginBottom: '5px'}}>
                        Visibility:
                    </label>
                    <select
                        id='visibility'
                        value={quiz.visibility}
                        onChange={(e) => setQuiz({...quiz, visibility: e.target.value})}
                        style={{width: '100%', padding: '8px'}}
                    >
                        <option value='PUBLIC'>Public</option>
                        <option value='UNLISTED'>Unlisted</option>
                        <option value='PRIVATE'>Private</option>
                    </select>
                </div>

                <div style={{marginBottom: '20px'}}>
                    <label htmlFor='image' style={{display: 'block', marginBottom: '5px'}}>
                        Quiz Image (optional):
                    </label>
                    Current image: <img src={quiz.image} alt="Quiz thumbnail" style={{width: '100px'}}/>
                    <input
                        type='file'
                        id='image'
                        accept='image/*'
                        onChange={handleImageChange}
                    />
                </div>

                {updatingQuiz ?
                    <button
                        style={{
                            backgroundColor: 'blue',
                            color: 'white',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        Updating Quiz...
                    </button>
                    :
                    <button
                        type='submit'
                        style={{
                            backgroundColor: 'blue',
                            color: 'white',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        Update Quiz
                    </button>
                }
                <button
                    onClick={handleDelete}
                    style={{
                        backgroundColor: 'red',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Delete Quiz
                </button>
                <button
                    onClick={() => window.history.back()}
                    style={{
                        backgroundColor: 'blue',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Cancel
                </button>
            </form>

            {message && <p style={{marginTop: '20px', color: 'green'}}>{message}</p>}
        </div>
    );
}

export default QuizEdit;
