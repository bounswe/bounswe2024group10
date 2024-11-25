package com.bounswe2024group10.Tradeverse.dto.followSubforum;

public class GetFollowingsRequest {
    private String username;

    public GetFollowingsRequest() {
    }

    public GetFollowingsRequest(String username) {
        this.username = username;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    
}
