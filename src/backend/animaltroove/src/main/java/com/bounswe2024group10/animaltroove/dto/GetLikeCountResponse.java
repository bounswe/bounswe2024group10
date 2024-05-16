package com.bounswe2024group10.animaltroove.dto;

public class GetLikeCountResponse {
    private boolean success;
    private String message;
    private int likeCount;

    public GetLikeCountResponse(boolean success, String message, int likeCount) {
        this.success = success;
        this.message = message;
        this.likeCount = likeCount;
    }

    public boolean isSuccess() {
        return success;
    }

    public String getMessage() {
        return message;
    }

    public int getLikeCount() {
        return likeCount;
    }
}
