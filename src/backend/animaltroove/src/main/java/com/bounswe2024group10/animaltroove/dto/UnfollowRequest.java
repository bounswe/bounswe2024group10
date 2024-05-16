package com.bounswe2024group10.animaltroove.dto;

public class UnfollowRequest {
    
    private String followerUsername;
    private String followedUsername;

    public UnfollowRequest(String followerUsername, String followedUsername) {
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
