package com.bounswe2024group10.animaltroove.dto;

public class DeleteCommentRequest {
    private long commentID;

    public DeleteCommentRequest(long commentID) {
        this.commentID = commentID;
    }

    public long getCommentID() {
        return commentID;
    }
}
