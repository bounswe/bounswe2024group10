package com.bounswe2024group10.Tradeverse.dto.follow;

import java.util.List;

import com.bounswe2024group10.Tradeverse.dto.user.GetUserResponse;

public class GetFollowersResponse {

    private boolean isSuccessful;
    private String message;
    private List<GetUserResponse> followers;

    public GetFollowersResponse(boolean isSuccessful, String message, List<GetUserResponse> followers) {
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

    public List<GetUserResponse> getFollowers() {
        return followers;
    }

    public void setFollowers(List<GetUserResponse> followers) {
        this.followers = followers;
    }
}
