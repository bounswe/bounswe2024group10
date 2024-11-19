package com.bounswe2024group10.Tradeverse.dto.post;

public class CreateSubforumRequest {
    private String username;
    private String title;
    private Long parentID;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getParentID() {
        return parentID;
    }  

    public void setParentID(Long parentID) {
        this.parentID = parentID;
    }

}
