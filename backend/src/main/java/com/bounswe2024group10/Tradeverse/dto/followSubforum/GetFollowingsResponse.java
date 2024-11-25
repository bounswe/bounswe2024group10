package com.bounswe2024group10.Tradeverse.dto.followSubforum;

import java.util.List;

import com.bounswe2024group10.Tradeverse.extra.SubforumWSpecs;

public class GetFollowingsResponse {

    private boolean isSuccessful;
    private String message;
    private List<SubforumWSpecs> followings;

    public GetFollowingsResponse(boolean isSuccessful, String message, List<SubforumWSpecs> followings) {
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

    public List<SubforumWSpecs> getFollowings() {
        return followings;
    }

    public void setFollowings(List<SubforumWSpecs> followings) {
        this.followings = followings;
    }
}
