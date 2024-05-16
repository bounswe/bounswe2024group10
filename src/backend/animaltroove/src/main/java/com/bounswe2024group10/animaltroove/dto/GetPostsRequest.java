package com.bounswe2024group10.animaltroove.dto;

public class GetPostsRequest {

    private String username;

    public GetPostsRequest(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }
}
