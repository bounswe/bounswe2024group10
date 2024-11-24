package com.bounswe2024group10.Tradeverse.dto.post;

import java.util.HashMap;
import java.util.List;

public class CreateCommentRequest {
    private String username;
    private Long parentID;
    private List<HashMap<String, String>> content;


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long getParentID() {
        return parentID;
    }

    public void setParentID(Long parentID) {
        this.parentID = parentID;
    }

    public List<HashMap<String, String>> getContent() {
        return content;
    }

    public void setContent(List<HashMap<String, String>> content) {
        this.content = content;
    }
}
