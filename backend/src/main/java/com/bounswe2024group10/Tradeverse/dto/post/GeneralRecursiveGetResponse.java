package com.bounswe2024group10.Tradeverse.dto.post;

import java.util.List;

import com.bounswe2024group10.Tradeverse.extra.PostWSpecs;

public class GeneralRecursiveGetResponse {

    private boolean isSuccessful;
    private String message;
    private List<PostWSpecs> comments;

    public GeneralRecursiveGetResponse(boolean isSuccessful, String message, List<PostWSpecs> comments) {
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

    public List<PostWSpecs> getComments() {
        return comments;
    }

    public void setComments(List<PostWSpecs> comments) {
        this.comments = comments;
    }
}
