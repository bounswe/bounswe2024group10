package com.bounswe2024group10.Tradeverse.dto.like;

import java.util.List;

public class GetLikedPostsResponse {

    private boolean isSuccessful;
    private String message;
    private List<Long> likedPosts;

    public GetLikedPostsResponse(boolean isSuccessful, String message, List<Long> likedPosts) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.likedPosts = likedPosts;
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

    public List<Long> getLikedPosts() {
        return likedPosts;
    }

    public void setLikedPosts(List<Long> likedPosts) {
        this.likedPosts = likedPosts;
    }
}
