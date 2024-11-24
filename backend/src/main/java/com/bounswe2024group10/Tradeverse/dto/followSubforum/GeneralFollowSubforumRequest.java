package com.bounswe2024group10.Tradeverse.dto.followSubforum;

public class GeneralFollowSubforumRequest {
    private String followerUsername;
    private Long followedSubforumID;

    public String getFollowerUsername() {
        return followerUsername;
    }

    public void setFollowerUsername(String followerUsername) {
        this.followerUsername = followerUsername;
    }

    public Long getFollowedSubforumID() {
        return followedSubforumID;
    }

    public void setFollowedSubforumID(Long followedUsername) {
        this.followedSubforumID = followedUsername;
    }
}
