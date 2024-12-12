package org.acme.Quiz;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "quizzes")
public class Quiz extends PanacheEntity {
    public enum Visibility {
        PUBLIC, UNLISTED, PRIVATE
    }

    // attributes
    private String quizName;
    private Long creatorID;
    private Visibility visibility;

    // default constructor
    public Quiz() {
        quizName = "";
        visibility = Visibility.PRIVATE;
    }

    // copy constructor
    public Quiz(Quiz baseQuiz) {
        this.quizName = baseQuiz.quizName;
        this.creatorID = baseQuiz.creatorID;
        this.visibility = baseQuiz.visibility;
    }

    // constructor
    public Quiz(String quizName, Long creatorID, Visibility visibility) {
        this.quizName = quizName;
        this.creatorID = creatorID;
        this.visibility = visibility;
    }

    // getters and setters
    public String getQuizName() {
        return quizName;
    }

    public void setQuizName(String quizName) {
        this.quizName = quizName;
    }

    public Long getCreatorID() {
        return creatorID;
    }

    public void setCreatorID(Long creatorID) {
        this.creatorID = creatorID;
    }

    public Visibility getVisibility() {
        return visibility;
    }

    public void setVisibility(Visibility visibility) {
        this.visibility = visibility;
    }
}
