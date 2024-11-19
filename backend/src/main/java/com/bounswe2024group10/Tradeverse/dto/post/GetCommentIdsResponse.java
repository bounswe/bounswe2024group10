package com.bounswe2024group10.Tradeverse.dto.post;

import java.util.List;

public class GetCommentIdsResponse {

    private boolean isSuccessful;
    private String message;
    private List<Long> commentIds;

    public GetCommentIdsResponse(boolean isSuccessful, String message, List<Long> commentIds) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.commentIds = commentIds;
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

    public List<Long> getCommentIds() {
        return commentIds;
    }

    public void setLikers(List<Long> commentIds) {
        this.commentIds = commentIds;
    }
}
