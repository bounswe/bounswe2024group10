package com.bounswe2024group10.Tradeverse.dto.follow;

import java.util.List;

public class GetFollowingsResponse {
    private boolean isSuccessful;
    private String message;
    private List<String> followings;

    public GetFollowingsResponse(boolean isSuccessful, String message, List<String> followings) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.followings = followings;
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

    public List<String> getFollowings() {
        return followings;
    }

    public void setFollowings(List<String> followings) {
        this.followings = followings;
    }
}
