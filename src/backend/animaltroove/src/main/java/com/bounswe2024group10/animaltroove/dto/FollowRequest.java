package com.bounswe2024group10.animaltroove.dto;

public class FollowRequest {
    
    private String followerUsername;
    private String followedUsername;

    public FollowRequest(String followerUsername, String followedUsername) {
        this.followerUsername = followerUsername;
        this.followedUsername = followedUsername;
    }

    public String getFollowerUsername() {
        return this.followerUsername;
    }

    public String getFollowedUsername() {
        return this.followedUsername;
    }

}
