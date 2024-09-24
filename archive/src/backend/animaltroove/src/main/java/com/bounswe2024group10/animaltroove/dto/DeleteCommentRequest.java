package com.bounswe2024group10.animaltroove.dto;

public class DeleteCommentRequest {

    private int commentID;

    public DeleteCommentRequest(int commentID) {
        this.commentID = commentID;
    }

    public int getCommentID() {
        return commentID;
    }
}
