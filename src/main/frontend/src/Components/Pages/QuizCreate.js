import React, {useEffect, useState} from 'react';
import { API_URL } from '../../config';
import { useAuth } from "../../AuthContext";

function QuizCreate() {
    const {getUserID} = useAuth();
    const [quiz, setQuiz] = useState({quizName: '', creatorID: '', visibility: 'PRIVATE'});
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchQuizzes = async () => {
            const userId = await getUserID();
            setQuiz({ ...quiz, creatorID: userId });
        };
        fetchQuizzes().then(() => console.log("User ID fetched"));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const quizAndQuestions = {quiz: quiz, questions: []};

        try {
            const response = await fetch(`${API_URL}/api/quiz`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(quizAndQuestions),
            });

            if (response.ok) {
                setMessage('Quiz created successfully!');
                setQuiz({quizName: '', creatorID: quiz.creatorID, visibility: 'PRIVATE'});
                setImage(null);
            } else {
                const errorData = await response.json();
                setMessage(`Failed to create quiz: ${errorData.error}`);
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h1>Create a New Quiz</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor='quizName' style={{ display: 'block', marginBottom: '5px' }}>
                        Quiz Name:
                    </label>
                    <input
                        type='text'
                        id='quizName'
                        value={quiz.quizName}
                        onChange={(e) => setQuiz({ ...quiz, quizName: e.target.value })}
                        required
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor='visibility' style={{ display: 'block', marginBottom: '5px' }}>
                        Visibility:
                    </label>
                    <select
                        id='visibility'
                        value={quiz.visibility}
                        onChange={(e) => setQuiz({ ...quiz, visibility: e.target.value })}
                        style={{ width: '100%', padding: '8px' }}
                    >
                        <option value='PUBLIC'>Public</option>
                        <option value='UNLISTED'>Unlisted</option>
                        <option value='PRIVATE'>Private</option>
                    </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor='image' style={{ display: 'block', marginBottom: '5px' }}>
                        Quiz Image:
                    </label>
                    <input
                        type='file'
                        id='image'
                        accept='image/*'
                        onChange={handleImageChange}
                    />
                </div>

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
                    Create Quiz
                </button>
            </form>

            {message && <p style={{ marginTop: '20px', color: 'green' }}>{message}</p>}
        </div>
    );
}

export default QuizCreate;
