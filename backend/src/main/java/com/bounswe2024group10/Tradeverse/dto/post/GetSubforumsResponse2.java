package com.bounswe2024group10.Tradeverse.dto.post;

import java.util.List;

import com.bounswe2024group10.Tradeverse.extra.SubforumWSpecs2;

public class GetSubforumsResponse2 {

    private boolean isSuccessful;
    private String message;
    private List<SubforumWSpecs2> subforums;

    public GetSubforumsResponse2(boolean isSuccessful, String message, List<SubforumWSpecs2> subforums) {
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

    public List<SubforumWSpecs2> getSubforums() {
        return subforums;
    }

    public void setSubforums(List<SubforumWSpecs2> subforums) {
        this.subforums = subforums;
    }
}
