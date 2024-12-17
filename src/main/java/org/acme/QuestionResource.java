package org.acme;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.acme.Quiz.Question;

@Path("/api/question")
public class QuestionResource {
    // READ
    // get all questions from a quiz by id
    @GET
    @Path("/allFrom/{id}")
    public Response getQuestions(@PathParam("id") Long id) {
        return Response.ok(Question.list("quizID", id)).build();
    }

    // get question by id
    @GET
    @Path("/{id}")
    public Response getQuestion(@PathParam("id") Long id) {
        return Response.ok(Question.findById(id)).build();
    }

    //get number of questions by id
    @GET
    @Path("/count/{id}")
    public Response getQuestionCount(@PathParam("id") Long id) {
        return Response.ok(Question.count("quizID", id)).build();
    }

    // UPDATE
    // update a question
    @PUT
    @Path("/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateQuizPartial(@PathParam("id") Long id, Question data) {
        Question question = Question.findById(id);
        if (question == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        try {
            question.setQuestionText(data.getQuestionText());
            question.persist();
            return Response.ok().build();
        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
    }

    // DELETE
    // delete a question
    @DELETE
    @Path("/{id}")
    @Transactional
    public Response deleteQuestion(@PathParam("id") Long id) {
        Question question = Question.findById(id);
        if (question == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        question.delete();
        return Response.ok().build();
    }
}
