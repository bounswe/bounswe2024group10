package com.bounswe2024group10.Tradeverse.dto.post;

import java.util.List;

import com.bounswe2024group10.Tradeverse.extra.PostWSpecs;

public class ExploreResponse {
    private boolean isSuccessful;
    private String message;
    private List<PostWSpecs> recentPosts;
    private List<PostWSpecs> popularPosts;


    public ExploreResponse(boolean isSuccessful, String message, List<PostWSpecs> recentPosts, List<PostWSpecs> popularPosts) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.recentPosts = recentPosts;
        this.popularPosts = popularPosts;
    }

    public boolean getIsSuccessful() {
        return isSuccessful;
    }
    
    public void setIsSuccessful(boolean successful) {
        isSuccessful = successful;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }    
}