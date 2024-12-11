package com.bounswe2024group10.Tradeverse.dto.follow;

import java.util.List;

import com.bounswe2024group10.Tradeverse.dto.user.GetUserResponse;

public class GetFollowingsResponse {

    private boolean isSuccessful;
    private String message;
    private List<GetUserResponse> followings;

    public GetFollowingsResponse(boolean isSuccessful, String message, List<GetUserResponse> followings) {
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

    public List<GetUserResponse> getFollowings() {
        return followings;
    }

    public void setFollowings(List<GetUserResponse> followings) {
        this.followings = followings;
    }
}
