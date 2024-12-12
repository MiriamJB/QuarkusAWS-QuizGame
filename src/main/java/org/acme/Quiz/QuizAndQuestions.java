package org.acme.Quiz;

import java.util.List;

// this class is just used as a helper for the QuizResource class
// combines a quiz with a list of questions
public class QuizAndQuestions {
    public Quiz quiz;
    public List<Question> questions;

    public QuizAndQuestions(Quiz quiz, List<Question> questions) {
        this.quiz = quiz;
        this.questions = questions;
    }
}
