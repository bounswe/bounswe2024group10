package com.bounswe2024group10.Tradeverse.dto.post;

import java.time.LocalDateTime;

public class CreatePostRequest {
    private String username;
    private String title;
    private Long parentID;
    private String content;
    private Boolean likable;
    private LocalDateTime creationDate;
    private LocalDateTime lastEditDate;

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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Boolean getLikable() {
        return likable;
    }

    public void setLikable(Boolean likable) {
        this.likable = likable;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public LocalDateTime getLastEditDate() {
        return lastEditDate;
    }

    public void setLastEditDate(LocalDateTime lastEditDate) {
        this.lastEditDate = lastEditDate;
    }
}
