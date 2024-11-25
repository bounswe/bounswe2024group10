package com.bounswe2024group10.Tradeverse.dto.post.other;

public class GeneralGetRequest {

    private Long parentId;
    private String username;

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long postId) {
        this.parentId = postId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
