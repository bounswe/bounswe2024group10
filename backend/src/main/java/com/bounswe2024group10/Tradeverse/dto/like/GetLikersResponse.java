package com.bounswe2024group10.Tradeverse.dto.like;

import java.util.List;

public class GetLikersResponse {

    private boolean isSuccessful;
    private String message;
    private List<String> likers;

    public GetLikersResponse(boolean isSuccessful, String message, List<String> likers) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.likers = likers;
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

    public List<String> getLikers() {
        return likers;
    }

    public void setLikers(List<String> likers) {
        this.likers = likers;
    }
}
