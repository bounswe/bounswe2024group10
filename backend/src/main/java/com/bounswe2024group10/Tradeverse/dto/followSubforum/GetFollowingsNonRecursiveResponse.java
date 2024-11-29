package com.bounswe2024group10.Tradeverse.dto.followSubforum;

import java.util.List;

import com.bounswe2024group10.Tradeverse.extra.SuperSubforum;

public class GetFollowingsNonRecursiveResponse {

    private boolean isSuccessful;
    private String message;
    private List<SuperSubforum> followings;

    public GetFollowingsNonRecursiveResponse(boolean isSuccessful, String message, List<SuperSubforum> followings) {
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

    public List<SuperSubforum> getFollowings() {
        return followings;
    }

    public void setFollowings(List<SuperSubforum> followings) {
        this.followings = followings;
    }
}
