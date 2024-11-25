package com.bounswe2024group10.Tradeverse.dto.post.other;

import java.util.List;

import com.bounswe2024group10.Tradeverse.extra.SuperPost;

public class GeneralGetResponse {

    private boolean isSuccessful;
    private String message;
    private List<SuperPost> comments;

    public GeneralGetResponse(boolean isSuccessful, String message, List<SuperPost> comments) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.comments = comments;
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

    public List<SuperPost> getComments() {
        return comments;
    }

    public void setComments(List<SuperPost> comments) {
        this.comments = comments;
    }
}
