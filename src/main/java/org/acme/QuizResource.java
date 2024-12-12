package org.acme;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.acme.Quiz.*;

@Path("/api/quiz")
public class QuizResource {
    /* QuizAndQuestions JSON pattern:
    {
        "quiz": {
            "quizName": "string",
            "creatorID": "long",
            "visibility": "PRIVATE" | "PUBLIC" | "UNLISTED"
        },
        "questions": [
            {
                "questionText": "string"
            },
            ...
        ]
     */

    // CREATE
    @POST
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createQuiz(QuizAndQuestions data) {
        try {
            Quiz quiz = new Quiz(data.quiz);
            quiz.persist();
            Long quizID = quiz.id;
            for (Question q : data.questions) {
                Question question = new Question(quizID, q.getQuestionText());
                question.persist();
            }
            return Response.status(Response.Status.CREATED).build();
        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
    }

    // READ
    // Get all quizzes (without questions)
    @GET
    public Response getQuizzes() {
        return Response.ok(Quiz.listAll()).build();
    }

    // get quiz & questions by id
    @GET
    @Path("/{id}")
    public Response getQuizAndQuestions(@PathParam("id") Long id) {
        Quiz quiz = Quiz.findById(id);
        if (quiz == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok(new QuizAndQuestions(quiz, Question.list("quizID", id))).build();
    }

    // UPDATE
    // to update an entire quiz and its questions
    @PUT
    @Path("/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateQuiz(@PathParam("id") Long id, QuizAndQuestions data) {
        Quiz quiz = Quiz.findById(id);
        if (quiz == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        try {
            quiz.setQuizName(data.quiz.getQuizName());
            quiz.setVisibility(data.quiz.getVisibility());
            quiz.persist();
            for (Question q : data.questions) {
                Question question = Question.findById(q.id);
                if (question == null) {
                    question = new Question(id, q.getQuestionText());
                } else {
                    question.setQuestionText(q.getQuestionText());
                }
                question.persist();
            }
            return Response.ok().build();
        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
    }

    // update a quiz without changing its questions
    @PATCH
    @Path("/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateQuizPartial(@PathParam("id") Long id, Quiz data) {
        Quiz quiz = Quiz.findById(id);
        if (quiz == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        try {
            quiz.setQuizName(data.getQuizName());
            quiz.setVisibility(data.getVisibility());
            quiz.persist();
            return Response.ok().build();
        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
    }

    // DELETE
    // delete a quiz and its questions
    @DELETE
    @Path("/{id}")
    @Transactional
    public Response deleteQuiz(@PathParam("id") Long id) {
        Quiz quiz = Quiz.findById(id);
        if (quiz == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        Question.delete("quizID", id);
        quiz.delete();
        return Response.ok().build();
    }
}

