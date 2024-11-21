package com.bounswe2024group10.Tradeverse.dto.like;

import java.util.List;

import com.bounswe2024group10.Tradeverse.model.Post;

public class GetLikedPostsResponse {

    private boolean isSuccessful;
    private String message;
    private List<Post> likedPosts;

    public GetLikedPostsResponse(boolean isSuccessful, String message, List<Post> likedPosts) {
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

    public List<Post> getLikedPosts() {
        return likedPosts;
    }

    public void setLikedPosts(List<Post> likedPosts) {
        this.likedPosts = likedPosts;
    }
}
