package com.bounswe2024group10.Tradeverse.dto.post.explore;

import java.util.List;

import com.bounswe2024group10.Tradeverse.extra.SuperPost;

public class ExploreNonRecursiveResponse {

    private boolean isSuccessful;
    private String message;
    private List<SuperPost> recentPosts;
    private List<SuperPost> popularPosts;

    public ExploreNonRecursiveResponse(boolean isSuccessful, String message, List<SuperPost> recentPosts, List<SuperPost> popularPosts) {
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

    public List<SuperPost> getRecentPosts() {
        return recentPosts;
    }

    public void setRecentPosts(List<SuperPost> recentPosts) {
        this.recentPosts = recentPosts;
    }

    public List<SuperPost> getPopularPosts() {
        return popularPosts;
    }

    public void setPopularPosts(List<SuperPost> popularPosts) {
        this.popularPosts = popularPosts;
    }
}
