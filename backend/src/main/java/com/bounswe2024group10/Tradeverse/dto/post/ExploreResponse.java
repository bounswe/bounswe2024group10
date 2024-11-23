package com.bounswe2024group10.Tradeverse.dto.post;

import java.util.List;

import com.bounswe2024group10.Tradeverse.model.Post;

public class ExploreResponse {
    private boolean isSuccessful;
    private String message;
    private List<Post> recentPosts;
    private List<Post> popularPosts;
    private List<Boolean> isRecentLiked;
    private List<Boolean> isRecentDisliked;
    private List<Boolean> isPopularLiked;
    private List<Boolean> isPopularDisliked;

    public ExploreResponse(boolean isSuccessful, String message, List<Post> recentPosts, List<Post> popularPosts, List<Boolean> isRecentLiked, List<Boolean> isRecentDisliked, List<Boolean> isPopularLiked, List<Boolean> isPopularDisliked) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.recentPosts = recentPosts;
        this.popularPosts = popularPosts;
        this.isRecentLiked = isRecentLiked;
        this.isRecentDisliked = isRecentDisliked;
        this.isPopularLiked = isPopularLiked;
        this.isPopularDisliked = isPopularDisliked;
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

    public List<Post> getRecentPosts() {
        return recentPosts;
    }

    public void setRecentPosts(List<Post> recentPosts) {
        this.recentPosts = recentPosts;
    }   

    public List<Post> getPopularPosts() {
        return popularPosts;
    }

    public void setPopularPosts(List<Post> popularPosts) {
        this.popularPosts = popularPosts;
    }

    public List<Boolean> getIsRecentLiked() {
        return isRecentLiked;
    }

    public void setIsRecentLiked(List<Boolean> isRecentLiked) {
        this.isRecentLiked = isRecentLiked;
    }

    public List<Boolean> getIsRecentDisliked() {
        return isRecentDisliked;
    }

    public void setIsRecentDisliked(List<Boolean> isRecentDisliked) {
        this.isRecentDisliked = isRecentDisliked;
    }

    public List<Boolean> getIsPopularLiked() {
        return isPopularLiked;
    }

    public void setIsPopularLiked(List<Boolean> isPopularLiked) {
        this.isPopularLiked = isPopularLiked;
    }

    public List<Boolean> getIsPopularDisliked() {
        return isPopularDisliked;
    }

    public void setIsPopularDisliked(List<Boolean> isPopularDisliked) {
        this.isPopularDisliked = isPopularDisliked;
    }
    
}
