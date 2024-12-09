package com.bounswe2024group10.Tradeverse.dto.subforum;

public class FollowSubforumRequest {
    private Long subforumId;

    public FollowSubforumRequest() {}

    public FollowSubforumRequest(Long subforumId) {
        this.subforumId = subforumId;
    }

    public Long getSubforumId() {
        return subforumId;
    }

    public void setSubforumId(Long subforumId) {
        this.subforumId = subforumId;
    }
}