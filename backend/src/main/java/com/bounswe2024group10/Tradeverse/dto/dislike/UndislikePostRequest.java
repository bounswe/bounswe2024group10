package com.bounswe2024group10.Tradeverse.dto.dislike;

public class UndislikePostRequest {
    private Long postId;
    private String username;

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
