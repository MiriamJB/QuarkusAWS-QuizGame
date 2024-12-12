//package org.acme.Quiz;
//
//import jakarta.persistence.DiscriminatorValue;
//import jakarta.persistence.ElementCollection;
//import jakarta.persistence.Entity;
//
//import java.util.List;
//
//@Entity
//@DiscriminatorValue("MultipleChoice")
//public class MultipleChoiceQuestion extends QuizQuestion {
//    // attributes
//    @ElementCollection
//    private List<String> choices;
//    private int answer;
//
//    // default constructor
//    public MultipleChoiceQuestion() {}
//
//    // constructor
//    public MultipleChoiceQuestion(String questionText, List<String> choices, int answer) {
//        super(questionText);
//        this.choices = choices;
//        this.answer = answer;
//    }
//
//    // getters and setters
//    public List<String> getChoices() {
//        return choices;
//    }
//
//    public List<String> setChoices(List<String> choices) {
//        this.choices = choices;
//        return choices;
//    }
//
//    public int getAnswer() {
//        return answer;
//    }
//
//    public int setAnswer(int answer) {
//        this.answer = answer;
//        return answer;
//    }
//
//}
