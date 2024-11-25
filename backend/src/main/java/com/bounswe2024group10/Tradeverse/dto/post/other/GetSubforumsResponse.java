package com.bounswe2024group10.Tradeverse.dto.post.other;

import java.util.List;

import com.bounswe2024group10.Tradeverse.extra.SubforumWSpecs;

public class GetSubforumsResponse {

    private boolean isSuccessful;
    private String message;
    private List<SubforumWSpecs> subforums;

    public GetSubforumsResponse(boolean isSuccessful, String message, List<SubforumWSpecs> subforums) {
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

    public List<SubforumWSpecs> getSubforums() {
        return subforums;
    }

    public void setSubforums(List<SubforumWSpecs> subforums) {
        this.subforums = subforums;
    }
}
