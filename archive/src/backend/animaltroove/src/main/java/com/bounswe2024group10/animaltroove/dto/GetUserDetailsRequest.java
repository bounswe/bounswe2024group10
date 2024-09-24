package com.bounswe2024group10.animaltroove.dto;

public class GetUserDetailsRequest {
    private String username;

    public GetUserDetailsRequest() {
        // Default constructor for deserialization
    }

    public GetUserDetailsRequest(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }
}
