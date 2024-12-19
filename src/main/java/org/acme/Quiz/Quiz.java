package org.acme.Quiz;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "quizzes")
public class Quiz extends PanacheEntity {
    public enum Visibility {
        PUBLIC, UNLISTED, PRIVATE
    }

    // attributes
    private String quizName;
    private String creatorUsername;
    private Visibility visibility;
    private Date createdDate;
    private Date lastModifiedDate;
    private int questionCount;
    private int timesTaken;
    private String image;

    // default constructor
    public Quiz() {
        quizName = "";
        visibility = Visibility.PRIVATE;
        createdDate = new Date();
        questionCount = 0;
        timesTaken = 0;
    }

    // copy constructor
    public Quiz(Quiz baseQuiz) {
        this.quizName = baseQuiz.quizName;
        this.creatorUsername = baseQuiz.creatorUsername;
        this.visibility = baseQuiz.visibility;
        this.createdDate = baseQuiz.createdDate;
        this.lastModifiedDate = baseQuiz.lastModifiedDate;
        this.questionCount = baseQuiz.questionCount;
        this.timesTaken = baseQuiz.timesTaken;
        this.image = baseQuiz.image;
    }

    // constructor
    public Quiz(String quizName, String creatorID, Visibility visibility) {
        this.quizName = quizName;
        this.creatorUsername = creatorID;
        this.visibility = visibility;
        this.createdDate = new Date();
        timesTaken = 0;
    }

    // getters and setters
    public String getQuizName() {
        return quizName;
    }

    public void setQuizName(String quizName) {
        this.quizName = quizName;
    }

    public String getCreatorUsername() {
        return creatorUsername;
    }

    public void setCreatorUsername(String creatorID) {
        this.creatorUsername = creatorID;
    }

    public Visibility getVisibility() {
        return visibility;
    }

    public void setVisibility(Visibility visibility) {
        this.visibility = visibility;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public Date getLastModifiedDate() {
        return lastModifiedDate;
    }

    public void setLastModifiedDate(Date lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
    }

    public int getQuestionCount() {
        return (int) Question.count("quizID", this.id);
    }

    public int getTimesTaken() {
        return timesTaken;
    }

    public void increaseTimesTaken() {
        timesTaken++;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
