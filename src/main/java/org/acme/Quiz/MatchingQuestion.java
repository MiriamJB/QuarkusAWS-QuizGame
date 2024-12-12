//package org.acme.Quiz;
//
//import jakarta.persistence.*;
//
//import java.util.List;
//
//@Entity
//@DiscriminatorValue("Matching")
//public class MatchingQuestion extends QuizQuestion {
//    @ElementCollection
//    private List<MatchingPair> choices;
//
//    public MatchingQuestion() {}
//
//    public MatchingQuestion(String questionText, List<MatchingPair> choices) {
//        super(questionText);
//        this.choices = choices;
//    }
//
//    public List<MatchingPair> getChoices() {
//        return choices;
//    }
//
//    public List<MatchingPair> setChoices(List<MatchingPair> choices) {
//        this.choices = choices;
//        return choices;
//    }
//}
//
