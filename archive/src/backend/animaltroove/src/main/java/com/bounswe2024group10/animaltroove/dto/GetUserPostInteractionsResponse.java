package com.bounswe2024group10.animaltroove.dto;

public class GetUserPostInteractionsResponse {
    
    private boolean success;
    private String message;
    private boolean isLiked;
    private boolean isDisliked;
    private boolean isBookmarked;
    
    public GetUserPostInteractionsResponse(boolean success, String message, boolean isLiked, boolean isDisliked, boolean isBookmarked) {
        this.success = success;
        this.message = message;
        this.isLiked = isLiked;
        this.isDisliked = isDisliked;
        this.isBookmarked = isBookmarked;
    }

    public boolean isSuccess() {
        return success;
    }

    public String getMessage() {
        return message;
    }

    public boolean isLiked() {
        return isLiked;
    }

    public boolean isDisliked() {
        return isDisliked;
    }

    public boolean isBookmarked() {
        return isBookmarked;
    }
}
