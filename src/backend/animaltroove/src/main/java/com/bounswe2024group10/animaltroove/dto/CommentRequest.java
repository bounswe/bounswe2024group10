package com.bounswe2024group10.animaltroove.dto;

public class CommentRequest {
    private String username;
    private int postID;
    private String description;

    public CommentRequest(String username, int postID, String description) {
        this.username = username;
        this.postID = postID;
        this.description = description;
    }

    public String getUsername() {
        return username;
    }

    public int getPostID() {
        return postID;
    }

    public String getDescription() {
        return description;
    }
}