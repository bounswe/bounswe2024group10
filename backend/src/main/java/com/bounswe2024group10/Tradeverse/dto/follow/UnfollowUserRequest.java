package com.bounswe2024group10.Tradeverse.dto.follow;

public class UnfollowUserRequest {
    private String followerUsername;
    private String followedUsername;

    public String getFollowerUsername() {
        return followerUsername;
    }

    public void setFollowerUsername(String followerUsername) {
        this.followerUsername = followerUsername;
    }

    public String getFollowedUsername() {
        return followedUsername;
    }

    public void setFollowedUsername(String followedUsername) {
        this.followedUsername = followedUsername;
    }
}
