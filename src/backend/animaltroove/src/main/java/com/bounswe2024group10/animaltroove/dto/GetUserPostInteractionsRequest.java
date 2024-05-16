package com.bounswe2024group10.animaltroove.dto;

public class GetUserPostInteractionsRequest {
    private int postID;
    private String username;

    public GetUserPostInteractionsRequest() {
        // Default constructor
    }

    public GetUserPostInteractionsRequest(int postID, String username) {
        this.postID = postID;
        this.username = username;
    }

    public int getPostID() {
        return postID;
    }

    public String getUsername() {
        return username;
    }
}
