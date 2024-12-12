package org.acme.Quiz;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.*;

@Entity
@Table(name = "quiz_questions")
//@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
//@DiscriminatorColumn(name = "type", discriminatorType = DiscriminatorType.STRING)
public class Question extends PanacheEntity {
    // attributes
    private Long quizID; // The quiz this question belongs to
    private String questionText; // The question

    // default constructor
    public Question() {
        quizID = (long) -1;
        questionText = "";
    }

    // constructors
    public Question(String question) {
        this.quizID = (long) -1;
        this.questionText = question;
    }

    public Question(Long quizID, String question) {
        this.quizID = quizID;
        this.questionText = question;
    }

    // getters and setters
    public Long getQuizID() {
        return quizID;
    }

    public void setQuizID(Long quizID) {
        this.quizID = quizID;
    }

    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String question) {
        this.questionText = question;
    }
}
