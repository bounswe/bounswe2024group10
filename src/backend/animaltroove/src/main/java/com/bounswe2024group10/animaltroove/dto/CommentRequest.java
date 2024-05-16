package com.bounswe2024group10.animaltroove.dto;

public class CommentRequest {
    private long userID;
    private long postID;
    private String description;

    public CommentRequest(long userID, long postID, String description) {
        this.userID = userID;
        this.postID = postID;
        this.description = description;
    }

    public long getUserID() {
        return userID;
    }

    public long getPostID() {
        return postID;
    }

    public String getDescription() {
        return description; 
    }
}
