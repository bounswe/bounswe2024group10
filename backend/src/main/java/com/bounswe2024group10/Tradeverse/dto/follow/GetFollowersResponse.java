package com.bounswe2024group10.Tradeverse.dto.follow;

import java.util.List;

public class GetFollowersResponse {
    private boolean isSuccessful;
    private String message;
    private List<String> followers;

    public GetFollowersResponse(boolean isSuccessful, String message, List<String> followers) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.followers = followers;
    }

    public boolean isSuccessful() {
        return isSuccessful;
    }

    public void setSuccessful(boolean successful) {
        isSuccessful = successful;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List<String> getFollowers() {
        return followers;
    }

    public void setFollowers(List<String> followers) {
        this.followers = followers;
    }
}
