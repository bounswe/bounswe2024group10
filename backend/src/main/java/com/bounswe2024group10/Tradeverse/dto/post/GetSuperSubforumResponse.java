package com.bounswe2024group10.Tradeverse.dto.post;

import java.util.List;

import com.bounswe2024group10.Tradeverse.extra.SuperSubforum;

public class GetSuperSubforumResponse {

    private boolean isSuccessful;
    private String message;
    private List<SuperSubforum> subforums;

    public GetSuperSubforumResponse(boolean isSuccessful, String message, List<SuperSubforum> subforums) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.subforums = subforums;
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

    public List<SuperSubforum> getSubforums() {
        return subforums;
    }

    public void setSubforums(List<SuperSubforum> subforums) {
        this.subforums = subforums;
    }
}
