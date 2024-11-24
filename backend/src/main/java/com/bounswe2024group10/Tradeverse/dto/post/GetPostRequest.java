package com.bounswe2024group10.Tradeverse.dto.post;

public class GetPostRequest {
    
    private Long postId;

    private String username;

    public GetPostRequest() {
    }

    public GetPostRequest(Long postId, String username) {
        this.postId = postId;
        this.username = username;
    }

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
