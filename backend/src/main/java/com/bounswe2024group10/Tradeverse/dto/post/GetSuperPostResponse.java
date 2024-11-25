package com.bounswe2024group10.Tradeverse.dto.post;

import com.bounswe2024group10.Tradeverse.extra.SuperPost;

public class GetSuperPostResponse {

    private boolean isSuccessful;
    private String message;
    private SuperPost post;

    public GetSuperPostResponse(boolean isSuccessful, String message, SuperPost post) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.post = post;
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

    public SuperPost getPost() {
        return post;
    }

    public void setPost(SuperPost post) {
        this.post = post;
    }
}
