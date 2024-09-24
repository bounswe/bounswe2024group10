package com.bounswe2024group10.animaltroove.dto;

public class UnbookmarkRequest {
    private String username;
    private int postID;

    public UnbookmarkRequest(String username, int postID) {
        this.username = username;
        this.postID = postID;
    }

    public String getUsername() {
        return username;
    }

    public int getPostID() {
        return postID;
    }
}
