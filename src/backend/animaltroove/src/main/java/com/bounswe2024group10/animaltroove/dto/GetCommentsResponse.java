package com.bounswe2024group10.animaltroove.dto;

import com.bounswe2024group10.animaltroove.model.Comment;

public class GetCommentsResponse {

    private boolean success;
    private String message;
    private Iterable<Comment> comments;

    public GetCommentsResponse(boolean success, String message, Iterable<Comment> comments) {
        this.success = success;
        this.message = message;
        this.comments = comments;
    }

    public boolean isSuccess() {
        return success;
    }

    public String getMessage() {
        return message;
    }

    public Iterable<Comment> getComments() {
        return comments;
    }
}
